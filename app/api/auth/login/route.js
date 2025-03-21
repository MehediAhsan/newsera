import connectMongoDB from "@/lib/mongodb";
import User from "@/models/user";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { cookies } from "next/headers";

const JWT_SECRET = process.env.JWT_SECRET;

export async function POST(request) {
  try {
    const { email, password } = await request.json();
    await connectMongoDB();

    const user = await User.findOne({ email });
    if (!user) {
      return Response.json({ message: "User not found" }, { status: 400 });
    }

    const isValidPassword = await bcrypt.compare(password, user.password);
    if (!isValidPassword) {
      return Response.json({ message: "Invalid credentials" }, { status: 400 });
    }

    const token = jwt.sign(
      { userId: user._id, name: user.name, email: user.email },
      JWT_SECRET,
      {
        expiresIn: "1d",
      }
    );

    cookies().set("auth_token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      maxAge: 86400,
      sameSite: "strict",
      path: "/",
    });

    return Response.json(
      {
        message: "Login successful",
        user: { userId: user._id, name: user.name, email: user.email },
      },
      { status: 200 }
    );
  } catch (error) {
    return Response.json({ message: "Error logging in" }, { status: 500 });
  }
}
