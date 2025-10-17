"use server";

import mongoose from "mongoose";
import { NextResponse } from "next/server";
import usermodel from "../UserSchema/user-schema.js";
import orgmodel from "../organizationSchema/org-schema.js";

// ✅ Connect to MongoDB
async function connectDB() {
  if (mongoose.connection.readyState >= 1) return;

  try {
    await mongoose.connect('mongodb+srv://aakarshm826:akm@cluster0.vqfy9.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {
      dbName: "trainosphere", // replace with your database name
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("✅ MongoDB connected for login route");
  } catch (error) {
    console.error("❌ Database connection failed:", error);
    throw new Error("MongoDB connection failed");
  }
}

// ✅ POST (Login) Route
export async function POST(request) {
  try {
    await connectDB();

    const { email, aadharNum } = await request.json();

    if (!email || !aadharNum) {
      return NextResponse.json(
        { message: "Email and Aadhar number are required" },
        { status: 400 }
      );
    }

    // Find user in MongoDB
    const user = await usermodel.findOne({ email, aadharNum }) || await orgmodel.findOne({ email, licenseNum: aadharNum });

    if (!user) {
      return NextResponse.json(
        { message: "Invalid credentials. User not found." },
        { status: 401 }
      );
    }

    // ✅ Success
    return NextResponse.json(
      {
        message: "Login successful",
        user: {
          username: user.username,
          email: user.email,
          contact: user.contact,
          aadharNum: user.aadharNum,
          dob: user.dob,
        },
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("❌ Login error:", error);
    return NextResponse.json(
      { message: "Login failed", error: error.message },
      { status: 500 }
    );
  }
}
