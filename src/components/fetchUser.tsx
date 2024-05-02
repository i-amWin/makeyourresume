"use client";

import React, { useEffect } from "react";
import { useAppDispatch } from "@/redux/hooks";
import { setUser } from "@/redux/features/user/userSlice";
import axios from "axios";

export const FetchUser = ({ children }: { children: React.ReactNode }) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    axios
      .post("/api/auth/refresh-tokens", {}, { withCredentials: true })
      .then(({ data }) => {
        dispatch(setUser(data.user));
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, [dispatch]);

  return children;
};
