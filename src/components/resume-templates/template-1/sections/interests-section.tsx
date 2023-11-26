"use client";

import { LucideIcon, Heart } from "lucide-react";
import Heading from "../components/heading";
import { useInterests } from "@/store/resume-data-store";

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
  const interests = useInterests();
  return (
    <div>
      <Heading>Interests</Heading>
      <ul className="flex flex-col gap-[calc(var(--WIDTHPERCENTAGE)*6)]">
        {(interests.length === 0 ? defaultInterest : interests).map(
          (interest) => (
            <li key={interest.id}>
              <InterestText text={interest.name} />
            </li>
          ),
        )}
      </ul>
    </div>
  );
}

function InterestText({ text }: { Icon?: LucideIcon; text: string }) {
  return (
    <p className="flex items-center gap-[calc(var(--WIDTHPERCENTAGE)*6)]">
      <span className="text-[rgb(var(--ACCENT-COLOR))]">
        {
          <Heart className="h-[calc(var(--WIDTHPERCENTAGE)*15)] w-[calc(var(--WIDTHPERCENTAGE)*15)]" />
        }
      </span>
      <span className="text-[calc(var(--WIDTHPERCENTAGE)*9)] capitalize leading-snug">
        {text}
      </span>
    </p>
  );
}
