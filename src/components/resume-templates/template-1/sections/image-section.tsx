import { useAccentColor } from "@/store/custom-styles-store";
import { useFirstName, useImage, useLastName } from "@/store/resume-data-store";
import { Image } from "lucide-react";
import { isDoubleUnderscores } from "@/utils/is-double-underscores";
import { Frijole } from "next/font/google";

export default function ImageSection() {
  const accentColor = useAccentColor("template-1");

  const image = useImage();

  return (
    <div
      className="flex aspect-square w-full items-center justify-center overflow-hidden rounded-[calc(var(--WIDTHPERCENTAGE)*3)]"
      style={{
        border: `calc(var(--WIDTHPERCENTAGE)*1) solid ${accentColor}`,
      }}
    >
      {image === "" ? (
        <ImagePlaceholder accentColor={accentColor} />
      ) : (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={image} className="object-cover object-center" alt="" />
      )}
    </div>
  );
}

function ImagePlaceholder({ accentColor }: { accentColor: string }) {
  const firstName = useFirstName();
  const lastName = useLastName();

  return (
    <p
      className="text-[calc(var(--WIDTHPERCENTAGE)*62)] font-semibold leading-none"
      style={{
        color: accentColor,
      }}
    >
      {isDoubleUnderscores(firstName) || isDoubleUnderscores(lastName) ? (
        // eslint-disable-next-line jsx-a11y/alt-text
        <Image className="h-[calc(var(--WIDTHPERCENTAGE)*50)] w-[calc(var(--WIDTHPERCENTAGE)*50)] stroke-[calc(var(--WIDTHPERCENTAGE)*1.2)]" />
      ) : (
        (firstName[0] || "J") + (lastName[0] || "D")
      )}
    </p>
  );
}
