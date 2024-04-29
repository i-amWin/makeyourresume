import DraggableItemWrapper from "@/components/form/draggable-item-wrapper";
import { TextInput } from "@/components/form/form-input";
import FormSelect from "@/components/form/form-select";
import {
  Social,
  removeField,
  setField,
} from "@/redux/features/Resume Data/resumeDataSlice";
import { useAppDispatch } from "@/redux/hooks";
import { memo } from "react";
import { SocialPreview } from "./social-preview";

type SocialEditorProps = Social;

export const SocialEditor = memo(({ id, name, url }: SocialEditorProps) => {
  const dispatch = useAppDispatch();

  const removeSocial = (id: string) => {
    dispatch(removeField({ fieldName: "socials", id }));
  };

  const setSocial = (social: Social) => {
    dispatch(setField({ fieldName: "socials", value: social }));
  };

  return (
    <DraggableItemWrapper
      id={id}
      preview={<SocialPreview name={name} url={url} />}
      onRemoveClick={() => removeSocial(id)}
      removeSrOnlyLabel={`Remove ${name} social with url ${url}`}
    >
      <div className="flex flex-wrap items-end gap-2">
        <FormSelect
          label="Social Name"
          placeholder="Select an Option"
          defaultValue={name}
          onValueChange={(value) => setSocial({ id, url, name: value })}
        />

        <TextInput
          label="Social URL"
          placeholder="Enter your social link"
          value={url}
          setValue={(value) => setSocial({ id, name, url: value })}
        />
      </div>
    </DraggableItemWrapper>
  );
});

SocialEditor.displayName = "SocialEditor";
