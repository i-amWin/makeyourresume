import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import { prisma } from "@/lib/db";

// ROUTE: GET /api/users/me - [Authenticated User]
export async function GET(req: NextRequest) {
  const cookieStore = cookies();

  const accessToken = cookieStore.get("accessToken");

  if (!accessToken) {
    return NextResponse.json(
      {
        message: "Not authorized to access this route",
      },
      {
        status: 401,
      },
    );
  }

  const decoded = (await jwt.verify(
    accessToken.value,
    String(process.env.ACCESS_TOKEN_SECRET),
  )) as { id: string };

  if (!decoded.id) {
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

  return NextResponse.json(
    {
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
