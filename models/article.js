import mongoose, { Schema } from 'mongoose';

const articleSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    slug: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    excerpt: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
      index: true,
    },
    tags: [{ type: String, index: true }],
    status: {
      type: String,
      enum: ['draft', 'pending_review', 'published', 'archived'],
      default: 'draft',
      index: true,
    },
    featuredImage: String,
    author: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
      index: true,
    },
    locale: {
      type: String,
      enum: ['bd', 'global'],
      default: 'bd',
      index: true,
    },
    isBreaking: { type: Boolean, default: false },
    isFeatured: { type: Boolean, default: false },
    readTime: { type: Number, default: 5 },
    seo: {
      title: String,
      description: String,
      ogImage: String,
    },
    metrics: {
      views: { type: Number, default: 0 },
      reads: { type: Number, default: 0 },
      likes: { type: Number, default: 0 },
      shares: { type: Number, default: 0 },
      comments: { type: Number, default: 0 },
    },
    publishedAt: { type: Date, index: true },
  },
  {
    timestamps: true,
  }
);

articleSchema.index({ category: 1, publishedAt: -1 });
articleSchema.index({ author: 1, status: 1 });

export default mongoose.models.Article || mongoose.model('Article', articleSchema);
