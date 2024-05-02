import jwt from "jsonwebtoken";
import { constants } from "@/constants";
import { ReadonlyRequestCookies } from "next/dist/server/web/spec-extension/adapters/request-cookies";

export const createAndSetTokens = ({
  id,
  cookieStore,
}: {
  id: string;
  cookieStore: ReadonlyRequestCookies;
}) => {
  const accessToken = signAccessToken({ id });
  const refreshToken = signRefreshToken({ id });

  cookieStore.set("accessToken", accessToken, {
    expires: new Date(Date.now() + constants.ACCESS_TOKEN_EXPIRY),
    maxAge: constants.ACCESS_TOKEN_EXPIRY,
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
  });

  cookieStore.set("refreshToken", refreshToken, {
    expires: new Date(Date.now() + constants.REFRESH_TOKEN_EXPIRY),
    maxAge: constants.REFRESH_TOKEN_EXPIRY,
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
  });
};

function signAccessToken(payload: { id: string }) {
  if (!process.env.ACCESS_TOKEN_SECRET) {
    throw new Error("ACCESS_TOKEN_SECRET is not defined");
  }

  return jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET!, {
    expiresIn: constants.ACCESS_TOKEN_EXPIRY,
  });
}

function signRefreshToken(payload: { id: string }) {
  if (!process.env.REFRESH_TOKEN_SECRET) {
    throw new Error("REFRESH_TOKEN_SECRET is not defined");
  }

  return jwt.sign(payload, process.env.REFRESH_TOKEN_SECRET, {
    expiresIn: constants.REFRESH_TOKEN_EXPIRY,
  });
}
