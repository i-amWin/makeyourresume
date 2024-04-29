"use client";

import Link from "next/link";

import { useTemplateIdParam } from "@/hooks/useTemplateIdParam";

import { selectWorkExperiences } from "@/redux/features/Resume Data/resumeDataSlice";

import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/form/section-heading";
import SkipButton from "@/components/form/skip-button";
import NextButton from "@/components/form/next-button";
import { WorkExperiences } from "./_components/work-experiences";

const WorkExperiencesPage = () => {
  const templateId = useTemplateIdParam();

  return (
    <div className="space-y-2 rounded border p-4">
      <div className="flex flex-wrap gap-2">
        <Button asChild size="sm" variant="secondary">
          <Link href={`/templates/${templateId}/editor/projects`}>
            Previous (Projects)
          </Link>
        </Button>
        <div className="ml-auto flex flex-wrap justify-end gap-2">
          <SkipButton
            sectionName="workExperiences"
            href={`/templates/${templateId}/editor/personal-profile`}
          />

          <NextButton
            label="Next (Personal Profile)"
            href={`/templates/${templateId}/editor/personal-profile`}
            selectFunction={selectWorkExperiences}
            sectionName="workExperiences"
          />
        </div>
      </div>

      <SectionHeading>Work Experiences</SectionHeading>

      <p className="text-sm">
        <span className="font-bold">Note:</span> Empty field will also be added
        to your resume. So remove the fields you don&apos;t want to show by
        clicking the trash icon.
      </p>

      <form className="space-y-2" onSubmit={(e) => e.preventDefault()}>
        <p className="text-sm font-bold text-accent">
          Add your Work Experiences.
        </p>

        <WorkExperiences />
      </form>
    </div>
  );
};

export default WorkExperiencesPage;
