"use client";
import { useFirstName, useImage, useLastName } from "@/store/resume-data-store";

export default function ImageSection() {
  const image = useImage();

  return (
    <div
      className="flex aspect-square w-full items-center justify-center overflow-hidden rounded"
      style={{ border: `2px solid rgb(var(--ACCENT-COLOR))` }}
    >
      {image === "" ? (
        <ImagePlaceholder />
      ) : (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={image} className="object-cover object-center" alt="" />
      )}
    </div>
  );
}

function ImagePlaceholder() {
  const firstName = useFirstName();
  const lastName = useLastName();

  return (
    <p className="text-[calc(var(--WIDTHPERCENTAGE)*62)] font-semibold leading-none text-[rgb(var(--ACCENT-COLOR))]">
      {(firstName[0] || "J") + (lastName[0] || "D")}
    </p>
  );
}
