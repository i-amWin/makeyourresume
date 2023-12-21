"use client";

import { Fragment } from "react";
import Link from "next/link";
import { Trash2 } from "lucide-react";

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
} from "@/store/resume-data-store";

import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/form/section-heading";
import FormInput from "@/components/form/form-input";
import SkipButton from "@/components/form/skip-button";
import NextButton from "@/components/form/next-button";
import { Separator } from "@/components/ui/separator";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

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

      <form className="space-y-2">
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

  return (
    <div className="space-y-4">
      <ul className="space-y-2">
        {workExperiences.map((workExperience) => (
          <Fragment key={workExperience.id}>
            <WorkExperienceEditor {...workExperience} />
          </Fragment>
        ))}
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

  return (
    <li className="grid items-end gap-2">
      <div className="flex gap-2">
        <FormInput
          label="Company Name"
          placeholder="Enter your company name"
          useValue={() => workExperience.companyName}
          useSetValue={() => (value) => {
            setWorkExperience({ ...workExperience, companyName: value });
          }}
          className="flex-1"
        />
        <Button
          size="icon"
          variant="destructive"
          onClick={() => removeWorkExperience(workExperience.id)}
          className="self-end"
        >
          <Trash2 />
          <span className="sr-only">
            Remove {workExperience.companyName} from your resume
          </span>
        </Button>
      </div>
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
            {workExperience.workResponsibilities.map((workResponsibility) => (
              <Fragment key={workResponsibility.id}>
                <WorkResponsibilityEditor
                  id={workExperience.id}
                  workResponsibility={workResponsibility}
                />
              </Fragment>
            ))}
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

      <Separator className="mt-2" />
    </li>
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
    <li className="flex items-end gap-2">
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

      <div className="flex items-end gap-2">
        <Button
          size="icon"
          variant="destructive"
          onClick={() => removeWorkResponsibility(id, workResponsibility.id)}
        >
          <Trash2 />
          <span className="sr-only">
            Remove {workResponsibility.responsibility} from your resume
          </span>
        </Button>
      </div>
    </li>
  );
}
