import { useAccentColor } from "@/store/custom-styles-store";
import {
  useAddress,
  useEmail,
  usePhone,
  useSocials,
} from "@/store/resume-data-store";
import { icons } from "@/lib/data";
import { LucideIcon } from "lucide-react";
import { isDoubleUnderscores } from "@/utils/is-double-underscores";
import { useGetSkippedSection } from "@/store/skipped-section-store";

export default function ContactAndSocialSection() {
  return (
    <div className="flex flex-col gap-[calc(var(--WIDTHPERCENTAGE)*7)]">
      <Email />
      <PhoneNumber />
      <Address />
      <Socials />
    </div>
  );
}

function Email() {
  const email = useEmail();

  if (isDoubleUnderscores(email)) return null;

  return (
    <ContactAndSocialText icon="mail" text={email || "john.doe@gmail.com"} />
  );
}

function PhoneNumber() {
  const phone = usePhone();

  if (isDoubleUnderscores(phone)) return null;

  return (
    <ContactAndSocialText icon="phone" text={phone || "+1 123-456-7890"} />
  );
}

function Address() {
  const address = useAddress();

  if (isDoubleUnderscores(address)) return null;

  return (
    <ContactAndSocialText
      icon="mapPin"
      text={address || "123 Main Street, Cityville, State, 12345"}
    />
  );
}

const defaultSocials = [
  {
    id: "social1",
    name: "linkedin",
    url: "https://www.linkedin.com/in/johndoe",
  },
  {
    id: "social2",
    name: "github",
    url: "https://github.com/johndoe",
  },
  {
    id: "social3",
    name: "twitter",
    url: "https://twitter.com/johndoe",
  },
];

function Socials() {
  const socials = useSocials();

  const shouldSkip = useGetSkippedSection("socials");

  if (shouldSkip) return null;

  return (
    <ul className="flex flex-col gap-[calc(var(--WIDTHPERCENTAGE)*7)]">
      {(socials.length === 0 ? defaultSocials : socials).map((social) => {
        if (isDoubleUnderscores(social.url)) return null;

        return (
          <li key={social.id}>
            <ContactAndSocialText icon={social.name} text={social.url} />
          </li>
        );
      })}
    </ul>
  );
}

function ContactAndSocialText({ icon, text }: { icon: string; text: string }) {
  const accentColor = useAccentColor("template-1");

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
