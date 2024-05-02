import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import { prisma } from "@/lib/db";
import { createAndSetTokens } from "../_utils/create-and-set-tokens";

// ROUTE: POST /api/auth/refresh-token - [Authenticated User]
export async function POST(req: NextRequest) {
  const cookieStore = cookies();

  const refreshToken = cookieStore.get("refreshToken");

  if (!refreshToken) {
    return NextResponse.json(
      { message: "Refresh token not found" },
      { status: 401 },
    );
  }

  const decoded = (await jwt.verify(
    refreshToken.value,
    String(process.env.REFRESH_TOKEN_SECRET),
  )) as { id: string };

  if (!decoded) {
    return NextResponse.json(
      { message: "Invalid refresh token" },
      { status: 401 },
    );
  }

  const user = await prisma.user.findUnique({
    where: { id: decoded.id },
  });

  if (!user) {
    return NextResponse.json({ message: "User not found" }, { status: 404 });
  }

  createAndSetTokens({ id: user.id, cookieStore });

  return NextResponse.json(
    {
      message: "Tokens refreshed successfully",
      user: {
        id: user.id,
        email: user.email,
        name: user.name,
        resumes: user.resumes,
      },
    },
    { status: 200 },
  );
}
