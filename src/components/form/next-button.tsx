import Link from "next/link";

import { useAppSelector } from "@/redux/hooks";

import { type RootState } from "@/redux/store";
import {
  selectSkippedSection,
  type Section,
} from "@/redux/features/Skipped Sections/skippedSectionSlice";

import { Button } from "../ui/button";
import SkipButton from "./skip-button";

type NextButtonProps = {
  label: string;
  sectionName: Section;
  selectFunction: (state: RootState) => unknown[];
  href: string;
};

export default function NextButton({
  label,
  selectFunction,
  sectionName,
  href,
}: NextButtonProps) {
  const length = useAppSelector(selectFunction).length;
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
