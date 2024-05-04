"use client";

import { useEffect } from "react";
import { useAppDispatch } from "@/redux/hooks";
import { setUser } from "@/redux/features/auth/authSlice";
import axios from "axios";

export const RefreshUser = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const abortController = new AbortController();

    (async () => {
      try {
        const res = await axios.post(
          "/api/auth/refresh-tokens",
          {},
          {
            withCredentials: true,
            signal: abortController.signal,
          },
        );

        dispatch(setUser(res.data.user));
      } catch (error: any) {
        dispatch(setUser(null));
        console.log(error);
      }
    })();

    return () => {
      abortController.abort();
    };
  }, [dispatch]);

  return null;
};
