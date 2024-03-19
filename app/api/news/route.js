import connectMongoDB from "@/lib/mongodb";
import News from "@/models/news";
import { NextResponse } from "next/server";

export async function POST(request) {
  const { headline, type } = await request.json();
  await connectMongoDB();
  await News.create({ headline, type });
  return NextResponse.json({ message: "Topic Created" }, { status: 201 });
}