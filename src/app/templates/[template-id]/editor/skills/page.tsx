"use client";

import { Fragment } from "react";
import Link from "next/link";
import { Trash2 } from "lucide-react";

import { useTemplateIdParam } from "@/hooks/useTemplateIdParam";
import {
  useSkills,
  useAddSkill,
  useRemoveSkill,
  useSetSkill,
} from "@/store/resume-data-store";

import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/form/section-heading";
import FormInput from "@/components/form/form-input";
import SkipButton from "@/components/form/skip-button";
import NextButton from "@/components/form/next-button";

export default function Skills() {
  const templateId = useTemplateIdParam();

  return (
    <div className="space-y-2 rounded border p-4">
      <div className="flex flex-wrap gap-2">
        <Button asChild size="sm" variant="secondary">
          <Link href={`/templates/${templateId}/editor/socials`}>
            Previous (Socials)
          </Link>
        </Button>

        <div className="ml-auto flex flex-wrap justify-end gap-2">
          <SkipButton
            sectionName="skills"
            href={`/templates/${templateId}/editor/interests`}
          />

          <NextButton
            label="Next (Interests)"
            href={`/templates/${templateId}/editor/interests`}
            useData={useSkills}
            sectionName="skills"
          />
        </div>
      </div>

      <SectionHeading>Skills</SectionHeading>

      <p className="text-sm">
        <span className="font-bold">Note:</span> Empty field will also be added
        to your resume. So remove the fields you don&apos;t want to show by
        clicking on the trash icon.
      </p>

      <form className="space-y-2">
        <p className="text-sm font-bold text-accent">Add your Skills.</p>

        <SkillsGroup />
      </form>
    </div>
  );
}

function SkillsGroup() {
  const addSkill = useAddSkill();
  const skills = useSkills();

  return (
    <div className="space-y-4">
      <ul className="space-y-2">
        {skills.map((skill) => (
          <Fragment key={skill.id}>
            <SkillEditor {...skill} />
          </Fragment>
        ))}
      </ul>

      <Button
        type="button"
        variant="accent"
        size="sm"
        onClick={() => addSkill()}
      >
        Add Skill
      </Button>
    </div>
  );
}

type SkillEditorProps = ReturnType<typeof useSkills>[number];

function SkillEditor({ id, name }: SkillEditorProps) {
  const setSkill = useSetSkill();
  const removeSkill = useRemoveSkill();

  return (
    <li className="flex flex-wrap items-end gap-2">
      <FormInput
        label="Skill Name"
        placeholder="Enter your skill name"
        useValue={() => name}
        useSetValue={() => (value: string) => setSkill({ id, name: value })}
      />

      <Button size="icon" variant="destructive" onClick={() => removeSkill(id)}>
        <Trash2 />
        <span className="sr-only">Remove {name} skill</span>
      </Button>
    </li>
  );
}
