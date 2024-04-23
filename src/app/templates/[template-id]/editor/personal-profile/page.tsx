"use client";

import { Fragment } from "react";
import Link from "next/link";

import { useTemplateIdParam } from "@/hooks/useTemplateIdParam";

import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/form/section-heading";
import { TextInput } from "@/components/form/form-input";
import SkipButton from "@/components/form/skip-button";
import NextButton from "@/components/form/next-button";
import { arrayMove } from "@dnd-kit/sortable";
import DraggableItemWrapper from "@/components/form/draggable-item-wrapper";
import DNDContexts from "@/components/form/dnd-contexts";
import {
  type PersonalProfile,
  addField,
  removeField,
  selectPersonalProfiles,
  setField,
  setFields,
} from "@/redux/features/Resume Data/resumeDataSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";

export default function PersonalProfile() {
  const templateId = useTemplateIdParam();

  return (
    <div className="space-y-2 rounded border p-4">
      <div className="flex flex-wrap gap-2">
        <Button asChild size="sm" variant="secondary">
          <Link href={`/templates/${templateId}/editor/work-experiences`}>
            Previous (Work Experiences)
          </Link>
        </Button>

        <div className="ml-auto flex flex-wrap justify-end gap-2">
          <SkipButton
            sectionName="personalProfile"
            href={`/templates/${templateId}/resume`}
          />

          <NextButton
            label="Download Resume"
            href={`/templates/${templateId}/resume`}
            selectFunction={selectPersonalProfiles}
            sectionName="personalProfile"
          />
        </div>
      </div>

      <SectionHeading>Personal Profile</SectionHeading>

      <p className="text-sm">
        <span className="font-bold">Note:</span> Empty field will also be added
        to your resume. So remove the fields you don&apos;t want to show by
        clicking on the trash icon.
      </p>

      <form className="space-y-2" onSubmit={(e) => e.preventDefault()}>
        <p className="text-sm font-bold text-accent">
          Add your Personal Profile.
        </p>

        <PersonalProfilesGroup />
      </form>
    </div>
  );
}

function PersonalProfilesGroup() {
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
            <Fragment key={personalProfile.id}>
              <PersonalProfileEditor {...personalProfile} />
            </Fragment>
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
}

type PersonalProfileEditorProps = PersonalProfile;
function PersonalProfileEditor({
  id,
  fieldName,
  fieldValue,
}: PersonalProfileEditorProps) {
  // const setPersonalProfile = useSetPersonalProfile();
  // const removePersonalProfile = useRemovePersonalProfile();

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
        <PersonalProfilePreview fieldName={fieldName} fieldValue={fieldValue} />
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
}

function PersonalProfilePreview({
  fieldName,
  fieldValue,
}: {
  fieldName: string;
  fieldValue: string;
}) {
  return (
    <div className="flex min-h-full items-center gap-2 text-sm font-medium text-accent">
      <p>{fieldName}</p>
      {fieldValue && <span>|</span>}
      <p>{fieldValue}</p>
    </div>
  );
}
