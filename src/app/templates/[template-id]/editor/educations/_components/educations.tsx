import { arrayMove } from "@dnd-kit/sortable";

import { useAppDispatch, useAppSelector } from "@/redux/hooks";

import {
  addField,
  selectEducations,
  setFields,
} from "@/redux/features/Resume Data/resumeDataSlice";

import DNDContexts from "@/components/form/dnd-contexts";
import { EducationEditor } from "./education-editor";
import { Button } from "@/components/ui/button";

export const Educations = () => {
  const dispatch = useAppDispatch();
  const educations = useAppSelector(selectEducations);

  const setItems = (oldIndex: number, newIndex: number) => {
    dispatch(
      setFields({
        fieldName: "educations",
        value: arrayMove(educations, oldIndex, newIndex),
      }),
    );
  };

  return (
    <div className="space-y-4">
      <ul className="space-y-2">
        <DNDContexts
          items={educations.map((education) => ({ id: education.id }))}
          setItems={setItems}
        >
          {educations.map((education) => (
            <EducationEditor {...education} key={education.id} />
          ))}
        </DNDContexts>
      </ul>

      <Button
        type="button"
        variant="accent"
        size="sm"
        onClick={() => dispatch(addField("educations"))}
      >
        Add Education
      </Button>
    </div>
  );
};
