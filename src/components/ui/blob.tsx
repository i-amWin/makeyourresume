"use client";
import { useEffect, useRef } from "react";

export default function Blob() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    function moveBlob(e: MouseEvent) {
      const { clientX, clientY } = e;

      ref.current?.animate(
        {
          left: `${clientX}px`,
          top: `${clientY}px`,
        },
        { duration: 3000, fill: "forwards" }
      );
    }

    window.addEventListener("mousemove", moveBlob);

    return () => {
      window.removeEventListener("mousemove", moveBlob);
    };
  }, []);
  return (
    <div className="fixed -z-10 left-0 top-0 h-screen w-screen isolate">
      <div
        style={{}}
        ref={ref}
        className="h-64 aspect-square bg-white -z-10 rounded-full absolute left-1/3 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-primary to-primary-foreground blob"
      />
      <div className="w-full h-full backdrop-blur-[100px]"></div>
    </div>
  );
}
