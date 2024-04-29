import { memo } from "react";

import { useAppDispatch } from "@/redux/hooks";

import {
  Skill,
  removeField,
  setField,
} from "@/redux/features/Resume Data/resumeDataSlice";

import DraggableItemWrapper from "@/components/form/draggable-item-wrapper";
import { SkillPreview } from "./skill-preview";
import { TextInput } from "@/components/form/form-input";

type SkillEditorProps = Skill;

export const SkillEditor = memo(({ id, name }: SkillEditorProps) => {
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
