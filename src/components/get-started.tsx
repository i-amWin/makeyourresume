"use client";

import { usePathname } from "next/navigation";
import { Button } from "./ui/button";
import Link from "next/link";

export default function GetStarted() {
  const pathName = usePathname();

  if (pathName !== "/") return null;
  return (
    <Button variant="secondary">
      <Link href="/templates">Get Started</Link>
    </Button>
  );
}
