import { Button } from "../ui/button";

import Link from "next/link";

import SkipButton from "./skip-button";
import { useAppSelector } from "@/redux/hooks";
import {
  selectSkippedSection,
  type Section,
} from "@/redux/features/Skipped Sections/skippedSectionSlice";

type NextButtonProps = {
  label: string;
  sectionName: Section;
  useData: () => unknown[];
  href: string;
};

export default function NextButton({
  label,
  useData,
  sectionName,
  href,
}: NextButtonProps) {
  const length = useData().length;
  const isSkipped = useAppSelector((state) =>
    selectSkippedSection(state, sectionName),
  );

  if (length === 0 && !isSkipped) {
    return (
      <SkipButton
        sectionName={sectionName}
        href={href}
        buttonLabel={label}
        buttonVariant="default"
      />
    );
  }

  return (
    <Button size="sm" asChild>
      <Link href={href}>{label}</Link>
    </Button>
  );
}
