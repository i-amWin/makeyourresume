import DraggableItemWrapper from "@/components/form/draggable-item-wrapper";
import {
  PersonalProfile,
  removeField,
  setField,
} from "@/redux/features/Resume Data/resumeDataSlice";
import { useAppDispatch } from "@/redux/hooks";
import { PersonalProfilePreview } from "./personal-profile-preview";
import { TextInput } from "@/components/form/form-input";
import { memo } from "react";

type PersonalProfileEditorProps = PersonalProfile;

export const PersonalProfileEditor = memo(
  ({ id, fieldName, fieldValue }: PersonalProfileEditorProps) => {
    const dispatch = useAppDispatch();

    const setPersonalProfile = (personalProfile: PersonalProfile) => {
      dispatch(
        setField({ fieldName: "personalProfiles", value: personalProfile }),
      );
    };

    const removePersonalProfile = (id: string) => {
      dispatch(removeField({ fieldName: "personalProfiles", id }));
    };

    return (
      <DraggableItemWrapper
        id={id}
        preview={
          <PersonalProfilePreview
            fieldName={fieldName}
            fieldValue={fieldValue}
          />
        }
        onRemoveClick={() => removePersonalProfile(id)}
        removeSrOnlyLabel={`Remove field ${fieldName} with value ${fieldValue}`}
      >
        <div className="flex flex-wrap items-end gap-2">
          <TextInput
            label="Field Name"
            placeholder="Enter the field name"
            value={fieldName}
            setValue={(value) =>
              setPersonalProfile({ id, fieldValue, fieldName: value })
            }
          />

          <TextInput
            label="Field Value"
            placeholder="Enter the field value"
            value={fieldValue}
            setValue={(value) =>
              setPersonalProfile({ id, fieldName, fieldValue: value })
            }
          />
        </div>
      </DraggableItemWrapper>
    );
  },
);

PersonalProfileEditor.displayName = "PersonalProfileEditor";
