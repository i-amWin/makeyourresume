"use client";

import { Fragment } from "react";
import Link from "next/link";

import { useTemplateIdParam } from "@/hooks/useTemplateIdParam";
import {
  useEducations,
  useAddEducation,
  useRemoveEducation,
  useSetEducation,
  useSetEductions,
} from "@/store/resume-data-store";

import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/form/section-heading";
import FormInput from "@/components/form/form-input";
import SkipButton from "@/components/form/skip-button";
import NextButton from "@/components/form/next-button";
import { arrayMove } from "@dnd-kit/sortable";
import DraggableItemWrapper from "@/components/form/draggable-item-wrapper";
import DNDContexts from "@/components/form/dnd-contexts";

export default function Educations() {
  const templateId = useTemplateIdParam();

  return (
    <div className="space-y-2 rounded border p-4">
      <div className="flex flex-wrap gap-2">
        <Button asChild size="sm" variant="secondary">
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
            useData={useEducations}
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

        <EducationsGroup />
      </form>
    </div>
  );
}

function EducationsGroup() {
  const addEducation = useAddEducation();
  const educations = useEducations();
  const setEducations = useSetEductions();

  const setItems = (oldIndex: number, newIndex: number) => {
    setEducations(arrayMove(educations, oldIndex, newIndex));
  };

  return (
    <div className="space-y-4">
      <ul className="space-y-2">
        <DNDContexts
          items={educations.map((education) => ({ id: education.id }))}
          setItems={setItems}
        >
          {educations.map((education) => (
            <Fragment key={education.id}>
              <EducationEditor {...education} />
            </Fragment>
          ))}
        </DNDContexts>
      </ul>

      <Button
        type="button"
        variant="accent"
        size="sm"
        onClick={() => addEducation()}
      >
        Add Education
      </Button>
    </div>
  );
}

type EducationEditorProps = ReturnType<typeof useEducations>[number];

function EducationEditor(education: EducationEditorProps) {
  const setEducation = useSetEducation();
  const removeEducation = useRemoveEducation();

  return (
    <DraggableItemWrapper
      id={education.id}
      preview={<EducationPreview {...education} />}
      onRemoveClick={() => removeEducation(education.id)}
      removeSrOnlyLabel={`Remove ${education.courseName} from your resume`}
    >
      <div className="grid items-end gap-2">
        <FormInput
          label="Degree / Course Name"
          placeholder="Enter your course name"
          useValue={() => education.courseName}
          useSetValue={() => (value) => {
            setEducation({ ...education, courseName: value });
          }}
        />

        <FormInput
          label="Institute / College Name"
          placeholder="Enter your college name"
          useValue={() => education.collegeName}
          useSetValue={() => (value) => {
            setEducation({ ...education, collegeName: value });
          }}
        />

        <div className="flex flex-wrap items-end justify-between gap-2">
          <FormInput
            label="Start Date"
            placeholder="Enter your start date"
            useValue={() => education.from}
            useSetValue={() => (value) => {
              setEducation({ ...education, from: value });
            }}
            className="min-w-[10rem] flex-1"
          />

          <FormInput
            label="End Date"
            placeholder="Enter your end date"
            useValue={() => education.to}
            useSetValue={() => (value) => {
              setEducation({ ...education, to: value });
            }}
            className="min-w-[10rem] flex-1"
          />
        </div>
      </div>
    </DraggableItemWrapper>
  );
}

function EducationPreview({
  courseName,
  collegeName,
  from,
  to,
}: EducationEditorProps) {
  return (
    <div className="flex min-h-full flex-col justify-center text-sm font-medium text-accent">
      <div className="flex gap-2">
        <p>{courseName}</p>
        {collegeName && <span>|</span>}
        <p>{collegeName}</p>
      </div>
      <div className="flex gap-2">
        <p>{from}</p>
        {to && <span>-</span>}
        <p>{to}</p>
      </div>
    </div>
  );
}
