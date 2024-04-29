"use client";

import Link from "next/link";

import { useTemplateIdParam } from "@/hooks/useTemplateIdParam";

import { selectInterests } from "@/redux/features/Resume Data/resumeDataSlice";

import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/form/section-heading";
import SkipButton from "@/components/form/skip-button";
import NextButton from "@/components/form/next-button";
import { Interests } from "./_components/interests";

const InterestsPage = () => {
  const templateId = useTemplateIdParam();

  return (
    <div className="space-y-2 rounded border p-4">
      <div className="flex flex-wrap gap-2">
        <Button asChild size="sm" variant="secondary">
          <Link href={`/templates/${templateId}/editor/skills`}>
            Previous (Skills)
          </Link>
        </Button>

        <div className="ml-auto flex flex-wrap justify-end gap-2">
          <SkipButton
            sectionName="interests"
            href={`/templates/${templateId}/editor/educations`}
          />

          <NextButton
            label="Next (Educations)"
            href={`/templates/${templateId}/editor/educations`}
            selectFunction={selectInterests}
            sectionName="interests"
          />
        </div>
      </div>

      <SectionHeading>Interests</SectionHeading>

      <p className="text-sm">
        <span className="font-bold">Note:</span> Empty field will also be added
        to your resume. So remove the fields you don&apos;t want to show by
        clicking on the trash icon.
      </p>

      <form className="space-y-2" onSubmit={(e) => e.preventDefault()}>
        <p className="text-sm font-bold text-accent">Add your Interests.</p>

        <Interests />
      </form>
    </div>
  );
};

export default InterestsPage;
