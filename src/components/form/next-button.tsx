import { Button } from "../ui/button";

import Link from "next/link";

import {
  type Section,
  useGetSkippedSection,
} from "@/store/skipped-section-store";
import SkipButton from "./skip-button";

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
  const isSkipped = useGetSkippedSection(sectionName);

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
