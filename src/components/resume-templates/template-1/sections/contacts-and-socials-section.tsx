import { icons } from "@/lib/data";
import { LucideIcon } from "lucide-react";
import { isDoubleUnderscores } from "@/utils/is-double-underscores";
import { useAppSelector } from "@/redux/hooks";
import { selectSkippedSection } from "@/redux/features/Skipped Sections/skippedSectionSlice";
import { selectAccentColor } from "@/redux/features/Custom Styles/customStyleSlice";
import {
  selectProfile,
  selectSocials,
} from "@/redux/features/Resume Data/resumeDataSlice";
import { Show } from "@/components/control-flow/show";
import { For } from "@/components/control-flow/for";
import { dummyData } from "../../dummy-data";

export default function ContactAndSocialSection() {
  return (
    <div className="flex flex-col gap-[calc(var(--WIDTHPERCENTAGE)*7)]">
      <Contacts />
      <Socials />
    </div>
  );
}

function Contacts() {
  const { email, phone, address } = useAppSelector(selectProfile);

  return (
    <>
      <Show when={!isDoubleUnderscores(email)}>
        <ContactAndSocialText
          icon="mail"
          text={email || dummyData.profile.email}
        />
      </Show>
      <Show when={!isDoubleUnderscores(phone)}>
        <ContactAndSocialText
          icon="phone"
          text={phone || dummyData.profile.phone}
        />
      </Show>
      <Show when={!isDoubleUnderscores(address)}>
        <ContactAndSocialText
          icon="mapPin"
          text={address || dummyData.profile.address}
        />
      </Show>
    </>
  );
}

function Socials() {
  const socials = useAppSelector(selectSocials);

  const shouldSkip = useAppSelector((state) =>
    selectSkippedSection(state, "socials"),
  );

  if (shouldSkip) return null;

  return (
    <ul className="flex flex-col gap-[calc(var(--WIDTHPERCENTAGE)*7)]">
      <For each={socials.length === 0 ? dummyData.socials : socials}>
        {({ id, name, url }) => (
          <Show key={id} when={!isDoubleUnderscores(url)}>
            <li>
              <ContactAndSocialText icon={name} text={url} />
            </li>
          </Show>
        )}
      </For>
    </ul>
  );
}

function ContactAndSocialText({ icon, text }: { icon: string; text: string }) {
  const accentColor = useAppSelector((state) =>
    selectAccentColor(state, "template-1"),
  );

  let Icon: LucideIcon = icons[icon] || icons.other;

  return (
    <p className="flex flex-col gap-[calc(var(--WIDTHPERCENTAGE)*1)]">
      <span>
        <Icon
          className="h-[calc(var(--WIDTHPERCENTAGE)*12)] w-[calc(var(--WIDTHPERCENTAGE)*12)]"
          color={accentColor}
        />
      </span>
      <span className="break-all text-[calc(var(--WIDTHPERCENTAGE)*9)] leading-snug">
        {text}
      </span>
    </p>
  );
}
