"use client";

import { Fragment } from "react";
import Link from "next/link";

import { useTemplateIdParam } from "@/hooks/useTemplateIdParam";
import {
  type WorkResponsibility,
  useWorkExperiences,
  useAddWorkExperience,
  useAddWorkResponsibility,
  useRemoveWorkExperience,
  useRemoveWorkResponsibility,
  useSetWorkExperience,
  useSetWorkResponsibility,
  useSetWorkExperiences,
  useSetWorkResponsibilities,
} from "@/store/resume-data-store";

import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/form/section-heading";
import FormInput from "@/components/form/form-input";
import SkipButton from "@/components/form/skip-button";
import NextButton from "@/components/form/next-button";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { arrayMove } from "@dnd-kit/sortable";
import DraggableItemWrapper from "@/components/form/draggable-item-wrapper";
import DNDContexts from "@/components/form/dnd-contexts";

export default function WorkExperiences() {
  const templateId = useTemplateIdParam();

  return (
    <div className="space-y-2 rounded border p-4">
      <div className="flex flex-wrap gap-2">
        <Button asChild size="sm" variant="secondary">
          <Link href={`/templates/${templateId}/editor/projects`}>
            Previous (Projects))
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
            useData={useWorkExperiences}
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

        <WorkExperiencesGroup />
      </form>
    </div>
  );
}

function WorkExperiencesGroup() {
  const addWorkExperience = useAddWorkExperience();
  const workExperiences = useWorkExperiences();
  const setWorkExperiences = useSetWorkExperiences();

  const setItems = (oldIndex: number, newIndex: number) => {
    setWorkExperiences(arrayMove(workExperiences, oldIndex, newIndex));
  };

  return (
    <div className="space-y-4">
      <ul className="space-y-2">
        <DNDContexts
          items={workExperiences.map((workExperience) => ({
            id: workExperience.id,
          }))}
          setItems={setItems}
        >
          {workExperiences.map((workExperience) => (
            <Fragment key={workExperience.id}>
              <WorkExperienceEditor {...workExperience} />
            </Fragment>
          ))}
        </DNDContexts>
      </ul>

      <Button
        type="button"
        variant="accent"
        size="sm"
        onClick={() => addWorkExperience()}
      >
        Add Work Experience
      </Button>
    </div>
  );
}

type WorkExperienceEditorProps = ReturnType<typeof useWorkExperiences>[number];

function WorkExperienceEditor(workExperience: WorkExperienceEditorProps) {
  const setWorkExperience = useSetWorkExperience();
  const removeWorkExperience = useRemoveWorkExperience();
  const addWorkResponsibility = useAddWorkResponsibility();

  const setWorkResponsibilities = useSetWorkResponsibilities();

  const setItems = (oldIndex: number, newIndex: number) => {
    setWorkResponsibilities(
      workExperience.id,
      arrayMove(workExperience.workResponsibilities, oldIndex, newIndex),
    );
  };

  return (
    <DraggableItemWrapper
      id={workExperience.id}
      preview={<WorkExperiencePreview {...workExperience} />}
      onRemoveClick={() => removeWorkExperience(workExperience.id)}
      removeSrOnlyLabel={`Remove ${workExperience.companyName} from your resume`}
    >
      <div className="grid items-end gap-2">
        <FormInput
          label="Company Name"
          placeholder="Enter your company name"
          useValue={() => workExperience.companyName}
          useSetValue={() => (value) => {
            setWorkExperience({ ...workExperience, companyName: value });
          }}
        />

        <div className="grid grid-cols-2 gap-2">
          <FormInput
            label="Job Title"
            placeholder="Enter your job title"
            useValue={() => workExperience.jobTitle}
            useSetValue={() => (value) => {
              setWorkExperience({ ...workExperience, jobTitle: value });
            }}
            className="col-span-2 sm:col-span-1"
          />

          <FormInput
            label="Location"
            placeholder="Enter the job location"
            useValue={() => workExperience.location}
            useSetValue={() => (value) => {
              setWorkExperience({ ...workExperience, location: value });
            }}
            className="col-span-2 sm:col-span-1"
          />
        </div>

        <div className="grid grid-cols-2 gap-2">
          <FormInput
            label="Joining Date"
            placeholder="Enter the joining date"
            useValue={() => workExperience.joiningDate}
            useSetValue={() => (value) => {
              setWorkExperience({ ...workExperience, joiningDate: value });
            }}
            className="col-span-2 sm:col-span-1"
          />

          <FormInput
            label="Leaving Date"
            placeholder="Enter the leaving date"
            useValue={() => workExperience.leavingDate}
            useSetValue={() => (value) => {
              setWorkExperience({ ...workExperience, leavingDate: value });
            }}
            className="col-span-2 sm:col-span-1"
          />
        </div>

        <div className="space-y-4">
          <div className="space-y-1">
            <Label>Work Responsibilities</Label>
            <ul className="space-y-2">
              <DNDContexts
                items={workExperience.workResponsibilities.map(
                  (workResponsibility) => ({ id: workResponsibility.id }),
                )}
                setItems={setItems}
              >
                {workExperience.workResponsibilities.map(
                  (workResponsibility) => (
                    <Fragment key={workResponsibility.id}>
                      <WorkResponsibilityEditor
                        id={workExperience.id}
                        workResponsibility={workResponsibility}
                      />
                    </Fragment>
                  ),
                )}
              </DNDContexts>
            </ul>
          </div>

          <Button
            type="button"
            variant="accent"
            size="sm"
            onClick={() => addWorkResponsibility(workExperience.id)}
          >
            Add Work Responsibility
          </Button>
        </div>
      </div>
    </DraggableItemWrapper>
  );
}

type WorkResponsibilityEditorProps = {
  id: string;
  workResponsibility: WorkResponsibility;
};

function WorkResponsibilityEditor({
  id,
  workResponsibility,
}: WorkResponsibilityEditorProps) {
  const setWorkResponsibility = useSetWorkResponsibility();
  const removeWorkResponsibility = useRemoveWorkResponsibility();

  return (
    <DraggableItemWrapper
      id={workResponsibility.id}
      preview={
        <div className="flex min-h-full items-center text-sm font-medium text-accent">
          <p>{workResponsibility.responsibility}</p>
        </div>
      }
      onRemoveClick={() => removeWorkResponsibility(id, workResponsibility.id)}
      removeSrOnlyLabel={`Remove ${workResponsibility.responsibility} from your resume`}
    >
      <Textarea
        placeholder="Enter your work responsibility"
        value={workResponsibility.responsibility}
        onChange={(e) =>
          setWorkResponsibility(id, {
            ...workResponsibility,
            responsibility: e.target.value,
          })
        }
      />
    </DraggableItemWrapper>
  );
}

function WorkExperiencePreview({
  companyName,
  jobTitle,
  location,
  joiningDate,
  leavingDate,
}: WorkExperienceEditorProps) {
  return (
    <div className="flex min-h-full flex-col justify-center text-sm font-medium text-accent">
      <div className="flex gap-2">
        <p>{companyName}</p>
        {jobTitle && <span>|</span>}
        <p>{jobTitle}</p>
      </div>
      <p>{location}</p>
      <div className="flex gap-2">
        <p>{joiningDate}</p>
        {leavingDate && <span>-</span>}
        <p>{leavingDate}</p>
      </div>
    </div>
  );
}
