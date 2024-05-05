"use client";

import Link from "next/link";

import { useTemplateIdParam } from "@/hooks/useTemplateIdParam";

import { selectEducations } from "@/redux/features/Resume Data/resumeDataSlice";

import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/form/section-heading";
import SkipButton from "@/components/form/skip-button";
import NextButton from "@/components/form/next-button";
import { Educations } from "./_components/educations";

const EducationsPage = () => {
  const templateId = useTemplateIdParam();

  return (
    <div className="space-y-2 rounded border p-4">
      <div className="flex flex-wrap gap-2">
        <Button asChild variant="secondary">
          <Link href={`/templates/${templateId}/editor/interests`}>
            Previous (Interests)
          </Link>
        </Button>

        <div className="ml-auto flex flex-wrap justify-end gap-2">
          <SkipButton
            sectionName="educations"
            href={`/templates/${templateId}/editor/projects`}
          />

          <NextButton
            label="Next (Projects)"
            href={`/templates/${templateId}/editor/projects`}
            selectFunction={selectEducations}
            sectionName="educations"
          />
        </div>
      </div>

      <SectionHeading>Educations</SectionHeading>

      <p className="text-sm">
        <span className="font-bold">Note:</span> Empty field will also be added
        to your resume. So remove the fields you don&apos;t want to show by
        clicking on the trash icon.
      </p>

      <form className="space-y-2" onSubmit={(e) => e.preventDefault()}>
        <p className="text-sm font-bold text-accent">
          Add your Educational Qualifications.
        </p>

        <Educations />
      </form>
    </div>
  );
};

export default EducationsPage;
