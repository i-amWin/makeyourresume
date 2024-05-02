import { prisma } from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcrypt";
import { cookies } from "next/headers";

export async function GET(req: NextRequest) {
  cookies().set("hello", "world");

  return NextResponse.json({ message: "Hello" });
}

import * as z from "zod";

const createUserSchema = z.object({
  name: z.string().min(3).max(255),
  email: z.string().email(),
  password: z.string().min(8).max(255),
});

// ROUTE: POST /api/auth/register - [Everyone]
export async function POST(req: NextRequest) {
  const body = await req.json().catch(() => ({}));

  const response = createUserSchema.safeParse(body);

  if (!response.success) {
    return NextResponse.json(
      { message: "Invalid Credentials" },
      { status: 400 },
    );
  }

  const { name, email, password } = response.data;

  const existingUser = await prisma.user.findUnique({
    where: {
      email,
    },
  });

  if (existingUser) {
    return NextResponse.json(
      { message: "User with this email already exists" },
      { status: 400 },
    );
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const user = await prisma.user.create({
    data: {
      name,
      email,
      password: hashedPassword,
    },
    select: {
      id: true,
      name: true,
      email: true,
      resumes: true,
    },
  });

  return NextResponse.json(
    {
      message: "User created successfully",
      user,
    },
    { status: 201 },
  );
}
