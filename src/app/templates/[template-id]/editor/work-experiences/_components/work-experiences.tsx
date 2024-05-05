import { arrayMove } from "@dnd-kit/sortable";

import { useAppDispatch, useAppSelector } from "@/redux/hooks";

import {
  addField,
  selectWorkExperiences,
  setFields,
} from "@/redux/features/Resume Data/resumeDataSlice";

import DNDContexts from "@/components/form/dnd-contexts";
import { WorkExperienceEditor } from "./work-experience-editor";
import { Button } from "@/components/ui/button";

export const WorkExperiences = () => {
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
            <WorkExperienceEditor {...workExperience} key={workExperience.id} />
          ))}
        </DNDContexts>
      </ul>

      <Button
        type="button"
        variant="accent"
        onClick={() => dispatch(addField("workExperiences"))}
      >
        Add Work Experience
      </Button>
    </div>
  );
};
