"use client";

import { selectUser } from "@/redux/features/user/userSlice";
import { useAppSelector } from "@/redux/hooks";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function ProtectLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const user = useAppSelector(selectUser);
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.push("/login");
    }
  }, [user, router]);

  return (
    <>
      {user ? (
        children
      ) : (
        <div className="loader fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 " />
      )}
    </>
  );
}
