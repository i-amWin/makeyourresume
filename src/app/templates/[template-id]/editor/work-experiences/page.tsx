"use client";

import { Fragment } from "react";
import Link from "next/link";

import { useTemplateIdParam } from "@/hooks/useTemplateIdParam";

import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/form/section-heading";
import { TextInput } from "@/components/form/form-input";
import SkipButton from "@/components/form/skip-button";
import NextButton from "@/components/form/next-button";
import { Label } from "@/components/ui/label";
import { arrayMove } from "@dnd-kit/sortable";
import DraggableItemWrapper from "@/components/form/draggable-item-wrapper";
import DNDContexts from "@/components/form/dnd-contexts";
import {
  WorkExperience,
  WorkResponsibility,
  addField,
  addWorkResponsibility,
  removeField,
  removeWorkResponsibilityField,
  selectWorkExperiences,
  setField,
  setFields,
  setWorkResponsibilities,
  setWorkResponsibilityField,
} from "@/redux/features/Resume Data/resumeDataSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { Textarea } from "@/components/ui/textarea";

export default function WorkExperiences() {
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

        <WorkExperiencesGroup />
      </form>
    </div>
  );
}

function WorkExperiencesGroup() {
  const dispatch = useAppDispatch();
  const workExperiences = useAppSelector(selectWorkExperiences);

  const setItems = (oldIndex: number, newIndex: number) => {
    dispatch(
      setFields({
        fieldName: "workExperiences",
        value: arrayMove(workExperiences, oldIndex, newIndex),
      }),
    );
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
        onClick={() => dispatch(addField("workExperiences"))}
      >
        Add Work Experience
      </Button>
    </div>
  );
}

type WorkExperienceEditorProps = WorkExperience;

function WorkExperienceEditor(workExperience: WorkExperienceEditorProps) {
  // const setWorkExperience = useSetWorkExperience();
  // const removeWorkExperience = useRemoveWorkExperience();
  // const addWorkResponsibility = useAddWorkResponsibility();
  const dispatch = useAppDispatch();

  const setItems = (oldIndex: number, newIndex: number) => {
    dispatch(
      setWorkResponsibilities({
        workExperienceId: workExperience.id,
        workResponsibilities: arrayMove(
          workExperience.workResponsibilities,
          oldIndex,
          newIndex,
        ),
      }),
    );
  };

  const removeWorkExperience = (id: string) => {
    dispatch(removeField({ fieldName: "workExperiences", id }));
  };

  const setWorkExperience = (workExperience: WorkExperience) => {
    dispatch(
      setField({
        fieldName: "workExperiences",
        value: workExperience,
      }),
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
        <TextInput
          label="Company Name"
          placeholder="Enter your company name"
          value={workExperience.companyName}
          setValue={(value) => {
            setWorkExperience({ ...workExperience, companyName: value });
          }}
        />

        <div className="grid grid-cols-2 gap-2">
          <TextInput
            label="Job Title"
            placeholder="Enter your job title"
            value={workExperience.jobTitle}
            setValue={(value) => {
              setWorkExperience({ ...workExperience, jobTitle: value });
            }}
            className="col-span-2 sm:col-span-1"
          />

          <TextInput
            label="Location"
            placeholder="Enter the job location"
            value={workExperience.location}
            setValue={(value) => {
              setWorkExperience({ ...workExperience, location: value });
            }}
            className="col-span-2 sm:col-span-1"
          />
        </div>

        <div className="grid grid-cols-2 gap-2">
          <TextInput
            label="Joining Date"
            placeholder="Enter the joining date"
            value={workExperience.joiningDate}
            setValue={(value) => {
              setWorkExperience({ ...workExperience, joiningDate: value });
            }}
            className="col-span-2 sm:col-span-1"
          />

          <TextInput
            label="Leaving Date"
            placeholder="Enter the leaving date"
            value={workExperience.leavingDate}
            setValue={(value) => {
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
            onClick={() => dispatch(addWorkResponsibility(workExperience.id))}
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
  // const setWorkResponsibility = useSetWorkResponsibility();
  // const removeWorkResponsibility = useRemoveWorkResponsibility();
  const dispatch = useAppDispatch();

  const setWorkResponsibility = (
    id: string,
    newWorkResponsibility: WorkResponsibility,
  ) => {
    dispatch(
      setWorkResponsibilityField({
        workExperienceId: id,
        workResponsibility: newWorkResponsibility,
      }),
    );
  };

  const removeWorkResponsibility = (
    id: string,
    workResponsibilityId: string,
  ) => {
    console.log({ id, workResponsibilityId });
    dispatch(
      removeWorkResponsibilityField({
        workExperienceId: id,
        workResponsibilityId,
      }),
    );
  };

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
