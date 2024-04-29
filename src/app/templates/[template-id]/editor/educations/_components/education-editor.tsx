import DraggableItemWrapper from "@/components/form/draggable-item-wrapper";
import {
  Education,
  removeField,
  setField,
} from "@/redux/features/Resume Data/resumeDataSlice";
import { useAppDispatch } from "@/redux/hooks";
import { memo } from "react";
import { EducationPreview } from "./education-preview";
import { TextInput } from "@/components/form/form-input";

type EducationEditorProps = Education;

export const EducationEditor = memo((education: EducationEditorProps) => {
  const dispatch = useAppDispatch();

  const removeEducation = (id: string) => {
    dispatch(removeField({ fieldName: "educations", id }));
  };

  const setEducation = (education: Education) => {
    dispatch(setField({ fieldName: "educations", value: education }));
  };

  return (
    <DraggableItemWrapper
      id={education.id}
      preview={<EducationPreview {...education} />}
      onRemoveClick={() => removeEducation(education.id)}
      removeSrOnlyLabel={`Remove ${education.courseName} from your resume`}
    >
      <div className="grid items-end gap-2">
        <TextInput
          label="Degree / Course Name"
          placeholder="Enter your course name"
          value={education.courseName}
          setValue={(value) => {
            setEducation({ ...education, courseName: value });
          }}
        />

        <TextInput
          label="Institute / College Name"
          placeholder="Enter your college name"
          value={education.collegeName}
          setValue={(value) => {
            setEducation({ ...education, collegeName: value });
          }}
        />

        <div className="flex flex-wrap items-end justify-between gap-2">
          <TextInput
            label="Start Date"
            placeholder="Enter your start date"
            value={education.from}
            setValue={(value) => {
              setEducation({ ...education, from: value });
            }}
            className="min-w-[10rem] flex-1"
          />

          <TextInput
            label="End Date"
            placeholder="Enter your end date"
            value={education.to}
            setValue={(value) => {
              setEducation({ ...education, to: value });
            }}
            className="min-w-[10rem] flex-1"
          />
        </div>
      </div>
    </DraggableItemWrapper>
  );
});

EducationEditor.displayName = "EducationEditor";
