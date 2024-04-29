import DraggableItemWrapper from "@/components/form/draggable-item-wrapper";
import {
  Interest,
  removeField,
  setField,
} from "@/redux/features/Resume Data/resumeDataSlice";
import { useAppDispatch } from "@/redux/hooks";
import { memo } from "react";
import { InterestPreview } from "./interest-preview";
import { TextInput } from "@/components/form/form-input";

type InterestEditorProps = Interest;

export const InterestEditor = memo(({ id, name }: InterestEditorProps) => {
  const dispatch = useAppDispatch();

  const removeInterest = (id: string) => {
    dispatch(removeField({ fieldName: "interests", id }));
  };

  const setInterest = (social: Interest) => {
    dispatch(setField({ fieldName: "interests", value: social }));
  };

  return (
    <DraggableItemWrapper
      id={id}
      preview={<InterestPreview name={name} />}
      onRemoveClick={() => removeInterest(id)}
      removeSrOnlyLabel={`Remove ${name} interest`}
    >
      <div className="flex flex-wrap items-end gap-2">
        <TextInput
          label="Interest Name"
          placeholder="Enter your interest"
          value={name}
          setValue={(value) => setInterest({ id, name: value })}
        />
      </div>
    </DraggableItemWrapper>
  );
});

InterestEditor.displayName = "InterestEditor";
