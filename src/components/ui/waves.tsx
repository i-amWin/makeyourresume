"use client";
import Wave from "react-wavify";

export default function Waves() {
  return (
    <div className="absolute left-0 w-full h-[100svh] top-0 -z-10">
      <Wave
        className="w-full absolute bottom-0 left-0"
        fill="hsl(9.705882352941176, 97.14285714285715%, 58.82352941176471%)"
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
