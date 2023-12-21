"use client";

import Link from "next/link";

import { useTemplateIdParam } from "@/hooks/useTemplateIdParam";
import {
  useAbout,
  useAddress,
  useEmail,
  useFirstName,
  useLastName,
  usePhone,
  useProfessionalTitle,
  useSetAbout,
  useSetAddress,
  useSetEmail,
  useSetFirstName,
  useSetLastName,
  useSetPhone,
  useSetProfessionalTitle,
} from "@/store/resume-data-store";

import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/form/section-heading";
import ImageInput from "@/components/form/image-input";
import FormInput from "@/components/form/form-input";
import FormTextArea from "@/components/form/form-textarea";

export default function Profile() {
  const templateId = useTemplateIdParam();

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

      <form className="grid grid-cols-2 gap-4">
        <ImageInput className="col-span-2 row-span-2" />

        <FormInput
          label="First Name"
          placeholder="Enter your first name"
          useValue={useFirstName}
          useSetValue={useSetFirstName}
          className="col-span-2 sm:col-span-1"
        />

        <FormInput
          label="Last Name"
          placeholder="Enter your last name"
          useValue={useLastName}
          useSetValue={useSetLastName}
          className="col-span-2 sm:col-span-1"
        />

        <FormInput
          label="Profession Title"
          placeholder="Enter your profession title"
          useValue={useProfessionalTitle}
          useSetValue={useSetProfessionalTitle}
          className="col-span-2 sm:col-span-1"
        />

        <FormInput
          label="Phone Number"
          placeholder="Enter your phone number"
          useValue={usePhone}
          useSetValue={useSetPhone}
          className="col-span-2 sm:col-span-1"
        />

        <FormInput
          label="Email Address"
          placeholder="Enter your email address"
          useValue={useEmail}
          useSetValue={useSetEmail}
          className="col-span-2"
        />

        <FormInput
          label="Address"
          placeholder="Enter your address"
          useValue={useAddress}
          useSetValue={useSetAddress}
          className="col-span-2"
        />

        <FormTextArea
          label="About You"
          placeholder="Write a brief about yourself"
          useValue={useAbout}
          useSetValue={useSetAbout}
          className="col-span-2"
        />
      </form>
    </div>
  );
}
