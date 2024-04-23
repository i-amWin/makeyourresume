"use client";

import { Fragment, memo } from "react";
import Link from "next/link";

import { useTemplateIdParam } from "@/hooks/useTemplateIdParam";

import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/form/section-heading";
import { TextInput } from "@/components/form/form-input";
import SkipButton from "@/components/form/skip-button";
import NextButton from "@/components/form/next-button";

import { arrayMove } from "@dnd-kit/sortable";
import DraggableItemWrapper from "@/components/form/draggable-item-wrapper";
import DNDContexts from "@/components/form/dnd-contexts";
import {
  Skill,
  addField,
  removeField,
  selectSkills,
  setField,
  setFields,
} from "@/redux/features/Resume Data/resumeDataSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";

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
            selectFunction={selectSkills}
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

      <form className="space-y-2" onSubmit={(e) => e.preventDefault()}>
        <p className="text-sm font-bold text-accent">Add your Skills.</p>

        <SkillsGroup />
      </form>
    </div>
  );
}

function SkillsGroup() {
  const dispatch = useAppDispatch();
  const skills = useAppSelector(selectSkills);

  const setItems = (oldIndex: number, newIndex: number) => {
    dispatch(
      setFields({
        fieldName: "skills",
        value: arrayMove(skills, oldIndex, newIndex),
      }),
    );
  };

  return (
    <div className="space-y-4">
      <ul className="space-y-2">
        <DNDContexts
          items={skills.map((skill) => ({ id: skill.id }))}
          setItems={setItems}
        >
          {skills.map((skill) => (
            <Fragment key={skill.id}>
              <SkillEditor {...skill} />
            </Fragment>
          ))}
        </DNDContexts>
      </ul>

      <Button
        type="button"
        variant="accent"
        size="sm"
        onClick={() => dispatch(addField("skills"))}
      >
        Add Skill
      </Button>
    </div>
  );
}

type SkillEditorProps = Skill;

const SkillEditor = memo(({ id, name }: SkillEditorProps) => {
  const dispatch = useAppDispatch();

  const removeSkill = (id: string) => {
    dispatch(removeField({ fieldName: "skills", id }));
  };

  const setSkill = (social: Skill) => {
    dispatch(setField({ fieldName: "skills", value: social }));
  };

  return (
    <DraggableItemWrapper
      id={id}
      preview={<SkillPreview name={name} />}
      onRemoveClick={() => removeSkill(id)}
      removeSrOnlyLabel={`Remove ${name} skill`}
    >
      <TextInput
        label="Skill Name"
        placeholder="Enter your skill name"
        value={name}
        setValue={(value) => setSkill({ id, name: value })}
      />
    </DraggableItemWrapper>
  );
});

SkillEditor.displayName = "SkillEditor";

function SkillPreview({ name }: { name: string }) {
  return (
    <div className="flex min-h-full items-center gap-2 text-sm font-medium text-accent">
      <p className="text-sm uppercase">{name}</p>
    </div>
  );
}
