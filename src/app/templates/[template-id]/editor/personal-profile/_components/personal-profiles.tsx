import { arrayMove } from "@dnd-kit/sortable";

import { useAppDispatch, useAppSelector } from "@/redux/hooks";

import {
  addField,
  selectPersonalProfiles,
  setFields,
} from "@/redux/features/Resume Data/resumeDataSlice";

import DNDContexts from "@/components/form/dnd-contexts";
import { PersonalProfileEditor } from "./personal-profile-editor";
import { Button } from "@/components/ui/button";

export const PersonalProfiles = () => {
  const personalProfiles = useAppSelector(selectPersonalProfiles);
  const dispatch = useAppDispatch();

  const setItems = (oldIndex: number, newIndex: number) => {
    dispatch(
      setFields({
        fieldName: "personalProfiles",
        value: arrayMove(personalProfiles, oldIndex, newIndex),
      }),
    );
  };

  return (
    <div className="space-y-4">
      <ul className="space-y-2">
        <DNDContexts
          items={personalProfiles.map((personalProfile) => ({
            id: personalProfile.id,
          }))}
          setItems={setItems}
        >
          {personalProfiles.map((personalProfile) => (
            <PersonalProfileEditor
              {...personalProfile}
              key={personalProfile.id}
            />
          ))}
        </DNDContexts>
      </ul>
      <Button
        type="button"
        variant="accent"
        size="sm"
        onClick={() => dispatch(addField("personalProfiles"))}
      >
        Add Personal Profile
      </Button>
    </div>
  );
};
