"use client";

import { Fragment, memo } from "react";
import Link from "next/link";

import { useTemplateIdParam } from "@/hooks/useTemplateIdParam";

import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/form/section-heading";
import { TextInput } from "@/components/form/form-input";
import SkipButton from "@/components/form/skip-button";
import NextButton from "@/components/form/next-button";
import FormSelect from "@/components/form/form-select";
import { arrayMove } from "@dnd-kit/sortable";
import DraggableItemWrapper from "@/components/form/draggable-item-wrapper";
import DNDContexts from "@/components/form/dnd-contexts";
import {
  Social,
  addField,
  removeField,
  selectSocials,
  setField,
  setFields,
} from "@/redux/features/Resume Data/resumeDataSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";

export default function Socials() {
  const templateId = useTemplateIdParam();

  return (
    <div className="space-y-2 rounded border p-4">
      <div className="flex flex-wrap gap-2">
        <Button asChild size="sm" variant="secondary">
          <Link href={`/templates/${templateId}/editor/profile`}>
            Previous (Profile)
          </Link>
        </Button>

        <div className="ml-auto flex flex-wrap justify-end gap-2">
          <SkipButton
            sectionName="socials"
            href={`/templates/${templateId}/editor/skills`}
          />

          <NextButton
            label="Next (Skills)"
            href={`/templates/${templateId}/editor/skills`}
            selectFunction={selectSocials}
            sectionName="socials"
          />
        </div>
      </div>

      <SectionHeading>Socials</SectionHeading>

      <p className="text-sm">
        <span className="font-bold">Note:</span> Empty field will also be added
        to your resume. So remove the fields you don&apos;t want to show by
        clicking on the trash icon.
      </p>

      <form className="space-y-2" onSubmit={(e) => e.preventDefault()}>
        <p className="text-sm font-bold text-accent">
          Add your Socials Accounts.
        </p>

        <SocialsGroup />
      </form>
    </div>
  );
}

function SocialsGroup() {
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
            <Fragment key={social.id}>
              <SocialEditor {...social} />
            </Fragment>
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
}

type SocialEditorProps = Social;

const SocialEditor = memo(({ id, name, url }: SocialEditorProps) => {
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

function SocialPreview({ name, url }: { name: string; url: string }) {
  return (
    <div className="flex min-h-full items-center gap-2 text-sm font-medium text-accent">
      <p className="capitalize">{name}</p>
      {url && <span>|</span>}
      <p className="break-all">{url}</p>
    </div>
  );
}
