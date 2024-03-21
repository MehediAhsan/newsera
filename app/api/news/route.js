import connectMongoDB from "@/lib/mongodb";
import News from "@/models/news";
import { NextResponse } from "next/server";

// Cached database connection promise
let dbConnectionPromise = null;

// Function to establish database connection if not already connected
async function ensureDBConnection() {
  if (!dbConnectionPromise) {
    dbConnectionPromise = connectMongoDB();
  }
  return dbConnectionPromise;
}

export async function POST(request) {
  try {
    // Extract data from the request body
    const data = await request.json();

    console.log(data);
    // Ensure database connection
    await ensureDBConnection();

    // Create a new news topic
    await News.create(data);

    // Respond with success message
    return NextResponse.json({ message: "News is Added Successfully" }, { status: 201 });
  } catch (error) {
    console.error("Error creating news news:", error);
    return NextResponse.error({ message: "Failed to add news" });
  }
}

// export async function GET() {
//   try {
//     await ensureDBConnection();
//     const allNews = await News.find();
//     return NextResponse.json({ allNews });
//   } catch (error) {
//     console.error("Error fetching news:", error);
//     return NextResponse.error({ message: "Failed to fetch news" });
//   }
// }

