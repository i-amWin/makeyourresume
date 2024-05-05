import { arrayMove } from "@dnd-kit/sortable";

import { useAppDispatch, useAppSelector } from "@/redux/hooks";

import {
  addField,
  selectInterests,
  setFields,
} from "@/redux/features/Resume Data/resumeDataSlice";

import DNDContexts from "@/components/form/dnd-contexts";
import { InterestEditor } from "./interest-editor";
import { Button } from "@/components/ui/button";

export const Interests = () => {
  const dispatch = useAppDispatch();
  const interests = useAppSelector(selectInterests);

  const setItems = (oldIndex: number, newIndex: number) => {
    dispatch(
      setFields({
        fieldName: "interests",
        value: arrayMove(interests, oldIndex, newIndex),
      }),
    );
  };

  return (
    <div className="space-y-4">
      <ul className="space-y-2">
        <DNDContexts
          items={interests.map((interest) => ({ id: interest.id }))}
          setItems={setItems}
        >
          {interests.map((interest) => (
            <InterestEditor {...interest} key={interest.id} />
          ))}
        </DNDContexts>
      </ul>
      <Button
        type="button"
        variant="accent"
        onClick={() => dispatch(addField("interests"))}
      >
        Add Interest
      </Button>
    </div>
  );
};
