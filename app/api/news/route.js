import connectMongoDB from "@/lib/mongodb";
import News from "@/models/news";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

let dbConnectionPromise = null;

async function ensureDBConnection() {
  if (!dbConnectionPromise) {
    dbConnectionPromise = connectMongoDB();
  }
  return dbConnectionPromise;
}

export async function POST(request) {
  try {
    const data = await request.json();
    await ensureDBConnection();
    await News.create(data);
    return NextResponse.json(
      { message: "News is Added Successfully" },
      {
        status: 201,
        headers: {
          "Cache-Control": "no-store",
        },
      }
    );
  } catch (error) {
    console.error("Error creating news news:", error);
    return NextResponse.json(
      { message: "Failed to add news" },
      {
        status: 500,
        headers: {
          "Cache-Control": "no-store",
        },
      }
    );
  }
}

export async function GET() {
  try {
    await ensureDBConnection();
    const allNews = await News.find();
    return NextResponse.json(allNews);
  } catch (error) {
    console.error("Error fetching news:", error);
    return NextResponse.error({ message: "Failed to fetch news" });
  }
}

export async function PUT(request) {
  try {
    const body = await request.json();

    const { _id, ...updatedData } = body;

    if (!_id) {
      return NextResponse.json(
        { message: "News ID is required" },
        { status: 400 }
      );
    }

    await ensureDBConnection();

    const updatedNews = await News.findByIdAndUpdate(
      new mongoose.Types.ObjectId(_id),
      updatedData,
      { new: true, runValidators: true }
    );

    if (!updatedNews) {
      return NextResponse.json({ message: "News not found" }, { status: 404 });
    }

    return NextResponse.json(
      { message: "News updated successfully", data: updatedNews },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error updating news:", error);
    return NextResponse.json(
      { message: "Failed to update news" },
      { status: 500 }
    );
  }
}
