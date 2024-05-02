import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import { prisma } from "@/lib/db";

export async function POST(req: NextRequest) {
  const templateId = (await req.json()).templateId as string;

  const cookieStore = cookies();
  const accessToken = cookieStore.get("accessToken");

  if (!accessToken) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }

  const decoded = (await jwt.verify(
    accessToken.value,
    String(process.env.ACCESS_TOKEN_SECRET),
  )) as { id: string };

  if (!decoded.id) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }

  const user = await prisma.user.findUnique({
    where: { id: decoded.id },
    select: { resumes: true, id: true, email: true, name: true },
  });

  if (user?.resumes.includes(templateId)) {
    return NextResponse.json(
      { message: "Resume already added" },
      { status: 400 },
    );
  }

  const updatedUser = await prisma.user.update({
    where: { id: decoded.id },
    data: {
      resumes: {
        push: templateId,
      },
    },
    select: {
      id: true,
      email: true,
      name: true,
      resumes: true,
    },
  });

  return NextResponse.json(
    {
      message: "Resume added",
      user: updatedUser,
    },
    { status: 200 },
  );
}
