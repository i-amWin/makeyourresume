import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function DELETE(req: NextRequest) {
  const cookieStore = cookies();

  cookieStore.set("accessToken", "", {
    expires: new Date(0),
  });

  cookieStore.set("refreshToken", "", {
    expires: new Date(0),
  });

  return NextResponse.json({ message: "Logged out" }, { status: 200 });
}
