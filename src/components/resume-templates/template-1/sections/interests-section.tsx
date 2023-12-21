import { LucideIcon, Heart } from "lucide-react";
import Heading from "../components/heading";
import { useInterests } from "@/store/resume-data-store";
import { useAccentColor } from "@/store/custom-styles-store";
import { useGetSkippedSection } from "@/store/skipped-section-store";
import { isDoubleUnderscores } from "@/utils/is-double-underscores";

const defaultInterest = [
  {
    id: "interest1",
    name: "Reading",
  },
  {
    id: "interest2",
    name: "Hiking",
  },
  {
    id: "interest3",
    name: "Coding Challenges",
  },
];

export default function InterestsSection() {
  const shouldSkip = useGetSkippedSection("interests");
  const interests = useInterests();

  if (shouldSkip) return null;

  return (
    <div>
      <Heading>Interests</Heading>
      <ul className="flex flex-col gap-[calc(var(--WIDTHPERCENTAGE)*6)]">
        {(interests.length === 0 ? defaultInterest : interests).map(
          (interest) => {
            if (isDoubleUnderscores(interest.name)) return null;
            return (
              <li key={interest.id}>
                <InterestText text={interest.name} />
              </li>
            );
          },
        )}
      </ul>
    </div>
  );
}

function InterestText({ text }: { Icon?: LucideIcon; text: string }) {
  const accentColor = useAccentColor("template-1");
  return (
    <p className="flex items-center gap-[calc(var(--WIDTHPERCENTAGE)*6)]">
      <Heart
        className="h-[calc(var(--WIDTHPERCENTAGE)*15)] w-[calc(var(--WIDTHPERCENTAGE)*15)]"
        color={accentColor}
      />
      <span className="text-[calc(var(--WIDTHPERCENTAGE)*9)] capitalize leading-snug">
        {text}
      </span>
    </p>
  );
}
