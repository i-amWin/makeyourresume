"use client";

import Link from "next/link";
import { useTemplateIdParam } from "@/hooks/useTemplateIdParam";
import {
  setProfile,
  selectProfile,
} from "@/redux/features/Resume Data/resumeDataSlice";

import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/form/section-heading";
import ImageInput from "@/components/form/image-input";
import { MemoizedTextInput } from "@/components/form/form-input";
import { MemoizedTextArea } from "@/components/form/form-textarea";
import { useCallback } from "react";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";

export default function Profile() {
  const templateId = useTemplateIdParam();
  const dispatch = useAppDispatch();

  const {
    firstName,
    lastName,
    professionalTitle,
    phone,
    email,
    address,
    about,
  } = useAppSelector(selectProfile);

  const setFirstName = useCallback(
    (value: string) => dispatch(setProfile({ fieldName: "firstName", value })),
    [dispatch],
  );

  const setLastName = useCallback(
    (value: string) => dispatch(setProfile({ fieldName: "lastName", value })),
    [dispatch],
  );

  const setProfessionalTitle = useCallback(
    (value: string) =>
      dispatch(setProfile({ fieldName: "professionalTitle", value })),
    [dispatch],
  );

  const setPhone = useCallback(
    (value: string) => dispatch(setProfile({ fieldName: "phone", value })),
    [dispatch],
  );

  const setEmail = useCallback(
    (value: string) => dispatch(setProfile({ fieldName: "email", value })),
    [dispatch],
  );

  const setAddress = useCallback(
    (value: string) => dispatch(setProfile({ fieldName: "address", value })),
    [dispatch],
  );

  const setAbout = useCallback(
    (value: string) => dispatch(setProfile({ fieldName: "about", value })),
    [dispatch],
  );

  return (
    <div className="space-y-2 rounded border p-4">
      <div className="flex flex-wrap gap-2">
        <Button asChild size="sm" variant="secondary">
          <Link href={`/templates`}>Go Back</Link>
        </Button>

        <Button asChild size="sm" className="ml-auto">
          <Link href={`/templates/${templateId}/editor/socials`}>
            Next (Socials)
          </Link>
        </Button>
      </div>

      <SectionHeading>Profile</SectionHeading>

      <div
        className="grid grid-cols-2 gap-4"
        onSubmit={(e) => e.preventDefault()}
      >
        <ImageInput className="col-span-2 row-span-2" />

        <MemoizedTextInput
          label="First Name"
          placeholder="Enter your first name"
          value={firstName}
          className="col-span-2 sm:col-span-1"
          setValue={setFirstName}
        />

        <MemoizedTextInput
          label="Last Name"
          placeholder="Enter your last name"
          value={lastName}
          className="col-span-2 sm:col-span-1"
          setValue={setLastName}
        />

        <MemoizedTextInput
          label="Profession Title"
          placeholder="Enter your profession title"
          className="col-span-2 sm:col-span-1"
          value={professionalTitle}
          setValue={setProfessionalTitle}
        />

        <MemoizedTextInput
          label="Phone Number"
          placeholder="Enter your phone number"
          value={phone}
          setValue={setPhone}
        />

        <MemoizedTextInput
          label="Email Address"
          placeholder="Enter your email address"
          className="col-span-2"
          value={email}
          setValue={setEmail}
        />

        <MemoizedTextInput
          label="Address"
          placeholder="Enter your address"
          className="col-span-2"
          value={address}
          setValue={setAddress}
        />

        <MemoizedTextArea
          label="About You"
          placeholder="Write a brief about yourself"
          className="col-span-2"
          value={about}
          setValue={setAbout}
        />
      </div>
    </div>
  );
}
