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
    return NextResponse.json(
      { message: "News is Added Successfully" },
      {
        status: 201,
        headers: {
          "Cache-Control": "no-store", // 🔥 Prevent caching
        },
      }
    );
  } catch (error) {
    console.error("Error creating news news:", error);
    return NextResponse.error({ message: "Failed to add news" });
  }
}

export async function GET() {
  console.log("API /api/nes hit"); // 👈 Log when API starts

  try {
    await ensureDBConnection();
    const allNews = await News.find();
    console.log("Fetched News Count:", allNews.length); // Log fetched data count
    console.log("Fetched Data:", allNews);
    return NextResponse.json({ allNews });
  } catch (error) {
    console.error("Error fetching news:", error);
    return NextResponse.error({ message: "Failed to fetch news" });
  }
}
