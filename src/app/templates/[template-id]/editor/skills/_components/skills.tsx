import DNDContexts from "@/components/form/dnd-contexts";
import {
  addField,
  selectSkills,
  setFields,
} from "@/redux/features/Resume Data/resumeDataSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { arrayMove } from "@dnd-kit/sortable";
import { SkillEditor } from "./skill-editor";
import { Button } from "@/components/ui/button";

export const Skills = () => {
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
            <SkillEditor {...skill} key={skill.id} />
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
};
