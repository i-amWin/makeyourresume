import DNDContexts from "@/components/form/dnd-contexts";
import { Button } from "@/components/ui/button";
import {
  addField,
  selectSocials,
  setFields,
} from "@/redux/features/Resume Data/resumeDataSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { arrayMove } from "@dnd-kit/sortable";
import { SocialEditor } from "./social-editor";

export const Socials = () => {
  const dispatch = useAppDispatch();
  const socials = useAppSelector(selectSocials);

  const setItems = (oldIndex: number, newIndex: number) => {
    dispatch(
      setFields({
        fieldName: "socials",
        value: arrayMove(socials, oldIndex, newIndex),
      }),
    );
  };

  return (
    <div className="space-y-4">
      <ul className="space-y-2">
        <DNDContexts
          items={socials.map((social) => ({ id: social.id }))}
          setItems={setItems}
        >
          {socials.map((social) => (
            <SocialEditor {...social} key={social.id} />
          ))}
        </DNDContexts>
      </ul>

      <Button
        type="button"
        variant="accent"
        size="sm"
        onClick={() => dispatch(addField("socials"))}
      >
        Add Social
      </Button>
    </div>
  );
};
