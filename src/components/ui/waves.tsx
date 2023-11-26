"use client";
import Wave from "react-wavify";

export default function Waves() {
  return (
    <div className="absolute left-0 top-0 -z-10 h-[100svh] w-full">
      <Wave
        className="absolute bottom-0 left-0 w-full text-primary"
        fill="currentColor"
        options={{
          height: 30,
          amplitude: 20,
          speed: 0.2,
          points: 4,
        }}
      />
    </div>
  );
}
