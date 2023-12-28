"use client";

import { Fragment } from "react";
import Link from "next/link";

import { useTemplateIdParam } from "@/hooks/useTemplateIdParam";
import {
  useInterests,
  useAddInterest,
  useRemoveInterest,
  useSetInterest,
  useSetInterests,
} from "@/store/resume-data-store";

import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/form/section-heading";
import FormInput from "@/components/form/form-input";
import SkipButton from "@/components/form/skip-button";
import NextButton from "@/components/form/next-button";
import { arrayMove } from "@dnd-kit/sortable";
import DraggableItemWrapper from "@/components/form/draggable-item-wrapper";
import DNDContexts from "@/components/form/dnd-contexts";

export default function Interests() {
  const templateId = useTemplateIdParam();

  return (
    <div className="space-y-2 rounded border p-4">
      <div className="flex flex-wrap gap-2">
        <Button asChild size="sm" variant="secondary">
          <Link href={`/templates/${templateId}/editor/skills`}>
            Previous (Skills)
          </Link>
        </Button>

        <div className="ml-auto flex flex-wrap justify-end gap-2">
          <SkipButton
            sectionName="interests"
            href={`/templates/${templateId}/editor/educations`}
          />

          <NextButton
            label="Next (Educations)"
            href={`/templates/${templateId}/editor/educations`}
            useData={useInterests}
            sectionName="interests"
          />
        </div>
      </div>

      <SectionHeading>Interests</SectionHeading>

      <p className="text-sm">
        <span className="font-bold">Note:</span> Empty field will also be added
        to your resume. So remove the fields you don&apos;t want to show by
        clicking on the trash icon.
      </p>

      <form className="space-y-2" onSubmit={(e) => e.preventDefault()}>
        <p className="text-sm font-bold text-accent">Add your Interests.</p>

        <InterestsGroup />
      </form>
    </div>
  );
}

function InterestsGroup() {
  const addInterest = useAddInterest();
  const interests = useInterests();
  const setInterests = useSetInterests();

  const setItems = (oldIndex: number, newIndex: number) => {
    setInterests(arrayMove(interests, oldIndex, newIndex));
  };

  return (
    <div className="space-y-4">
      <ul className="space-y-2">
        <DNDContexts
          items={interests.map((interest) => ({ id: interest.id }))}
          setItems={setItems}
        >
          {interests.map((interest) => (
            <Fragment key={interest.id}>
              <InterestEditor {...interest} />
            </Fragment>
          ))}
        </DNDContexts>
      </ul>
      <Button
        type="button"
        variant="accent"
        size="sm"
        onClick={() => addInterest()}
      >
        Add Interest
      </Button>
    </div>
  );
}

type InterestEditorProps = ReturnType<typeof useInterests>[number];

function InterestEditor({ id, name }: InterestEditorProps) {
  const setInterest = useSetInterest();
  const removeInterest = useRemoveInterest();

  return (
    <DraggableItemWrapper
      id={id}
      preview={<InterestPreview name={name} />}
      onRemoveClick={() => removeInterest(id)}
      removeSrOnlyLabel={`Remove ${name} interest`}
    >
      <div className="flex flex-wrap items-end gap-2">
        <FormInput
          label="Interest Name"
          placeholder="Enter your interest"
          useValue={() => name}
          useSetValue={() => (value) => setInterest({ id, name: value })}
        />
      </div>
    </DraggableItemWrapper>
  );
}

function InterestPreview({ name }: { name: string }) {
  return (
    <div className="flex min-h-full items-center gap-2 text-sm font-medium text-accent">
      <p className="capitalize">{name}</p>
    </div>
  );
}
