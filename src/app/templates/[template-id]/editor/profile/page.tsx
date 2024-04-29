"use client";

import Link from "next/link";

import { useTemplateIdParam } from "@/hooks/useTemplateIdParam";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";

import {
  setProfile,
  selectProfile,
} from "@/redux/features/Resume Data/resumeDataSlice";

import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/form/section-heading";
import ImageInput from "@/components/form/image-input";
import { TextInput } from "@/components/form/form-input";
import { TextArea } from "@/components/form/form-textarea";

const ProfilePage = () => {
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

  const setFirstName = (value: string) =>
    dispatch(setProfile({ fieldName: "firstName", value }));

  const setLastName = (value: string) =>
    dispatch(setProfile({ fieldName: "lastName", value }));

  const setProfessionalTitle = (value: string) =>
    dispatch(setProfile({ fieldName: "professionalTitle", value }));

  const setPhone = (value: string) =>
    dispatch(setProfile({ fieldName: "phone", value }));

  const setEmail = (value: string) =>
    dispatch(setProfile({ fieldName: "email", value }));

  const setAddress = (value: string) =>
    dispatch(setProfile({ fieldName: "address", value }));

  const setAbout = (value: string) =>
    dispatch(setProfile({ fieldName: "about", value }));

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

        <TextInput
          label="First Name"
          placeholder="Enter your first name"
          value={firstName}
          className="col-span-2 sm:col-span-1"
          setValue={setFirstName}
        />

        <TextInput
          label="Last Name"
          placeholder="Enter your last name"
          value={lastName}
          className="col-span-2 sm:col-span-1"
          setValue={setLastName}
        />

        <TextInput
          label="Profession Title"
          placeholder="Enter your profession title"
          className="col-span-2 sm:col-span-1"
          value={professionalTitle}
          setValue={setProfessionalTitle}
        />

        <TextInput
          label="Phone Number"
          placeholder="Enter your phone number"
          value={phone}
          setValue={setPhone}
        />

        <TextInput
          label="Email Address"
          placeholder="Enter your email address"
          className="col-span-2"
          value={email}
          setValue={setEmail}
        />

        <TextInput
          label="Address"
          placeholder="Enter your address"
          className="col-span-2"
          value={address}
          setValue={setAddress}
        />

        <TextArea
          label="About You"
          placeholder="Write a brief about yourself"
          className="col-span-2"
          value={about}
          setValue={setAbout}
        />
      </div>
    </div>
  );
};

export default ProfilePage;
