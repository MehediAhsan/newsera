import connectMongoDB from "@/lib/mongodb";
import User from "@/models/user";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { NextResponse } from "next/server";

const JWT_SECRET = process.env.JWT_SECRET;

export async function POST(request) {
  try {
    const { email, password } = await request.json();
    await connectMongoDB();

    const user = await User.findOne({ email });
    if (!user) {
      return NextResponse.json({ message: "User not found" }, { status: 400 });
    }

    const isValidPassword = await bcrypt.compare(password, user.password);
    if (!isValidPassword) {
      return NextResponse.json({ message: "Invalid credentials" }, { status: 400 });
    }

    const token = jwt.sign({ userId: user._id, name: user.name, email: user.email }, JWT_SECRET, {
      expiresIn: "1d",
    });

    return NextResponse.json({ message: "Login successful", token }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "Error logging in" }, { status: 500 });
  }
}
