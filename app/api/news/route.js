import connectMongoDB from "@/lib/mongodb";
import Article from "@/models/article";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

const fallbackAuthorId = '000000000000000000000000';

const toSlug = (title = '') =>
  String(title)
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .slice(0, 120) || 'untitled-story';

const normalizeArticle = (article) => {
  const item = article && typeof article.toObject === 'function' ? article.toObject() : article;

  return {
    ...item,
    _id: item?._id?.toString?.() || item?._id,
    author: item?.author && typeof item.author === 'object' ? item.author : { _id: item?.author || fallbackAuthorId },
    title: item?.title || item?.headline || 'Untitled story',
    headline: item?.headline || item?.title || 'Untitled story',
    excerpt: item?.excerpt || item?.description || '',
    description: item?.description || item?.excerpt || '',
    content: item?.content || item?.description || '',
    category: item?.category || item?.type || 'General',
    type: item?.type || item?.category || 'General',
    featuredImage: item?.featuredImage || item?.image || 'https://images.unsplash.com/photo-1495020689067-958852a7765e?auto=format&fit=crop&w=1200&q=80',
    image: item?.image || item?.featuredImage || 'https://images.unsplash.com/photo-1495020689067-958852a7765e?auto=format&fit=crop&w=1200&q=80',
    status: item?.status || 'draft',
    tags: Array.isArray(item?.tags) ? item.tags : typeof item?.tags === 'string' ? item.tags.split(',').map((tag) => tag.trim()).filter(Boolean) : [],
    slug: item?.slug || toSlug(item?.title || item?.headline),
    createdAt: item?.createdAt,
    updatedAt: item?.updatedAt,
    authorName: item?.authorName || item?.author?.name || 'NewsEra Staff',
    authorEmail: item?.authorEmail || item?.author?.email || 'editor@newsera.com',
  };
};

let dbConnectionPromise = null;

async function ensureDBConnection() {
  if (!dbConnectionPromise) {
    dbConnectionPromise = connectMongoDB();
  }
  return dbConnectionPromise;
}

export async function POST(request) {
  try {
    const payload = await request.json();
    const title = payload.title || payload.headline || 'Untitled story';
    const excerpt = payload.excerpt || payload.description || 'Story summary pending.';
    const content = payload.content || payload.description || 'Story content pending.';
    const category = payload.category || payload.type || 'General';
    const status = payload.status || 'draft';
    const tags = Array.isArray(payload.tags)
      ? payload.tags
      : String(payload.tags || '')
          .split(',')
          .map((tag) => tag.trim())
          .filter(Boolean);
    const authorId = payload.author || payload.authorId || fallbackAuthorId;

    await ensureDBConnection();

    const createdArticle = await Article.create({
      title,
      slug: payload.slug || toSlug(title),
      excerpt,
      content,
      category,
      tags,
      status,
      featuredImage: payload.featuredImage || payload.image || 'https://images.unsplash.com/photo-1495020689067-958852a7765e?auto=format&fit=crop&w=1200&q=80',
      image: payload.image || payload.featuredImage || 'https://images.unsplash.com/photo-1495020689067-958852a7765e?auto=format&fit=crop&w=1200&q=80',
      author: mongoose.Types.ObjectId.isValid(authorId)
        ? new mongoose.Types.ObjectId(authorId)
        : new mongoose.Types.ObjectId(fallbackAuthorId),
      authorName: payload.authorName || 'NewsEra Staff',
      authorEmail: payload.authorEmail || 'editor@newsera.com',
      locale: payload.locale || 'bd',
      isBreaking: Boolean(payload.isBreaking),
      isFeatured: Boolean(payload.isFeatured),
      readTime: Number(payload.readTime) || 5,
      seo: payload.seo || {
        title,
        description: excerpt,
      },
    });

    return NextResponse.json(
      { message: 'News is Added Successfully', article: normalizeArticle(createdArticle) },
      {
        status: 201,
        headers: {
          'Cache-Control': 'no-store',
        },
      }
    );
  } catch (error) {
    console.error('Error creating news:', error);
    return NextResponse.json(
      { message: 'Failed to add news' },
      {
        status: 500,
        headers: {
          'Cache-Control': 'no-store',
        },
      }
    );
  }
}

export async function GET() {
  try {
    await ensureDBConnection();
    const allNews = await Article.find().sort({ createdAt: -1 }).lean();
    return NextResponse.json(allNews.map(normalizeArticle));
  } catch (error) {
    console.error('Error fetching news:', error);
    return NextResponse.json({ message: 'Failed to fetch news' }, { status: 500 });
  }
}

export async function PUT(request) {
  try {
    const body = await request.json();
    const { _id, ...updatedData } = body;

    if (!_id) {
      return NextResponse.json({ message: 'News ID is required' }, { status: 400 });
    }

    const nextData = { ...updatedData };
    if (nextData.title && !nextData.slug) {
      nextData.slug = toSlug(nextData.title);
    }
    if (nextData.headline && !nextData.title) {
      nextData.title = nextData.headline;
    }
    if (nextData.description && !nextData.excerpt) {
      nextData.excerpt = nextData.description;
    }
    if (nextData.type && !nextData.category) {
      nextData.category = nextData.type;
    }
    if (nextData.featuredImage || nextData.image) {
      nextData.featuredImage = nextData.featuredImage || nextData.image;
      nextData.image = nextData.image || nextData.featuredImage;
    }

    await ensureDBConnection();

    const updatedNews = await Article.findByIdAndUpdate(
      new mongoose.Types.ObjectId(_id),
      nextData,
      { new: true, runValidators: true }
    );

    if (!updatedNews) {
      return NextResponse.json({ message: 'News not found' }, { status: 404 });
    }

    return NextResponse.json(
      { message: 'News updated successfully', data: normalizeArticle(updatedNews) },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error updating news:', error);
    return NextResponse.json({ message: 'Failed to update news' }, { status: 500 });
  }
}

export async function DELETE(request) {
  try {
    const { _id } = await request.json();

    if (!_id) {
      return NextResponse.json({ message: 'News ID is required' }, { status: 400 });
    }

    await ensureDBConnection();

    const deletedNews = await Article.findByIdAndDelete(new mongoose.Types.ObjectId(_id));

    if (!deletedNews) {
      return NextResponse.json({ message: 'News not found' }, { status: 404 });
    }

    return NextResponse.json({ message: 'News deleted successfully' }, { status: 200 });
  } catch (error) {
    console.error('Error deleting news:', error);
    return NextResponse.json({ message: 'Failed to delete news' }, { status: 500 });
  }
}