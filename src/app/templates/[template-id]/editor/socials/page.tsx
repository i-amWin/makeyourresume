"use client";

import { Fragment } from "react";
import Link from "next/link";
import { Trash2 } from "lucide-react";

import { useTemplateIdParam } from "@/hooks/useTemplateIdParam";
import {
  useSocials,
  useAddSocial,
  useRemoveSocial,
  useSetSocial,
} from "@/store/resume-data-store";

import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/form/section-heading";
import FormInput from "@/components/form/form-input";
import SkipButton from "@/components/form/skip-button";
import NextButton from "@/components/form/next-button";
import FormSelect from "@/components/form/form-select";

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
            useData={useSocials}
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

      <form className="space-y-2">
        <p className="text-sm font-bold text-accent">
          Add your Socials Accounts.
        </p>

        <SocialsGroup />
      </form>
    </div>
  );
}

function SocialsGroup() {
  const addSocial = useAddSocial();
  const socials = useSocials();

  return (
    <div className="space-y-4">
      <ul className="space-y-2">
        {socials.map((social) => (
          <Fragment key={social.id}>
            <SocialEditor {...social} />
          </Fragment>
        ))}
      </ul>

      <Button
        type="button"
        variant="accent"
        size="sm"
        onClick={() => addSocial()}
      >
        Add Social
      </Button>
    </div>
  );
}

type SocialEditorProps = ReturnType<typeof useSocials>[number];

function SocialEditor({ id, name, url }: SocialEditorProps) {
  const setSocial = useSetSocial();
  const removeSocial = useRemoveSocial();

  return (
    <li className="flex flex-wrap items-end gap-2">
      <FormSelect
        label="Social Name"
        placeholder="Select an Option"
        defaultValue={name}
        onValueChange={(value) => setSocial({ id, url, name: value })}
      />

      <FormInput
        label="Social URL"
        placeholder="Enter your social link"
        useValue={() => url}
        useSetValue={() => (value) => setSocial({ id, name, url: value })}
        className=""
      />

      <Button
        size="icon"
        variant="destructive"
        onClick={() => removeSocial(id)}
      >
        <Trash2 />
        <span className="sr-only">
          Remove {name} social with url {url}
        </span>
      </Button>
    </li>
  );
}
