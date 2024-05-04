import { prisma } from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcrypt";
import { cookies } from "next/headers";

import * as z from "zod";
import { createAndSetTokens } from "../_utils/create-and-set-tokens";

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8).max(255),
});

// ROUTE: POST /api/auth/login - [Everyone]
export async function POST(req: NextRequest) {
  const body = await req.json().catch(() => ({}));

  const response = loginSchema.safeParse(body);

  if (!response.success) {
    return NextResponse.json(
      { message: "Invalid Credentials" },
      { status: 400 },
    );
  }

  const { email, password } = response.data;

  const user = await prisma.user.findUnique({
    where: {
      email,
    },
  });

  if (!user) {
    return NextResponse.json(
      { message: "Invalid Credentials" },
      { status: 400 },
    );
  }

  const isPasswordMatch = await bcrypt.compare(password, user.password);

  if (!isPasswordMatch) {
    return NextResponse.json(
      { message: "Invalid Credentials" },
      { status: 404 },
    );
  }

  const cookieStore = cookies();

  createAndSetTokens({ id: user.id, cookieStore });

  return NextResponse.json(
    {
      message: "Logged in successfully",
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        resumes: user.resumes,
      },
    },
    { status: 200 },
  );
}
