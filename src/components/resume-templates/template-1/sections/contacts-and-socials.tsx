import {
  useAddress,
  useEmail,
  usePhone,
  useSocials,
} from "@/store/resume-data-store";
import {
  Facebook,
  Github,
  Instagram,
  Linkedin,
  LucideIcon,
  Mail,
  MapPin,
  Paperclip,
  Phone,
  User2,
  Twitter,
} from "lucide-react";

export const icons = {
  mail: Mail,
  mapPin: MapPin,
  phone: Phone,
  linkedin: Linkedin,
  github: Github,
  portfolio: User2,
  facebook: Facebook,
  instagram: Instagram,
  twitter: Twitter,
  other: Paperclip,
} as const;

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

  return (
    <ContactAndSocialText icon="mail" text={email || "john.doe@gmail.com"} />
  );
}

function PhoneNumber() {
  const phone = usePhone();
  return (
    <ContactAndSocialText icon="phone" text={phone || "+1 123-456-7890"} />
  );
}

function Address() {
  const address = useAddress();

  return (
    <ContactAndSocialText
      icon="mapPin"
      text={address || "123 Main Street, Cityville, State, 12345"}
    />
  );
}

const initialSocials = [
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

  return (
    <ul className="flex flex-col gap-[calc(var(--WIDTHPERCENTAGE)*7)]">
      {(socials.length === 0 ? initialSocials : socials).map((social) => (
        <li key={social.id}>
          <ContactAndSocialText icon={social.name} text={social.url} />
        </li>
      ))}
    </ul>
  );
}

function ContactAndSocialText({ icon, text }: { icon: string; text: string }) {
  let Icon: LucideIcon;

  switch (icon) {
    case "mail":
      Icon = icons.mail;
      break;

    case "mapPin":
      Icon = icons.mapPin;
      break;

    case "phone":
      Icon = icons.phone;
      break;

    case "linkedin":
      Icon = icons.linkedin;
      break;

    case "github":
      Icon = icons.github;
      break;

    case "portfolio":
      Icon = icons.portfolio;
      break;

    case "facebook":
      Icon = icons.facebook;
      break;

    case "instagram":
      Icon = icons.instagram;
      break;

    case "twitter":
      Icon = icons.twitter;
      break;

    default:
      Icon = icons.other;
      break;
  }

  return (
    <p className="flex flex-col gap-[calc(var(--WIDTHPERCENTAGE)*1)]">
      <span>
        <Icon className="h-[calc(var(--WIDTHPERCENTAGE)*12)] w-[calc(var(--WIDTHPERCENTAGE)*12)] text-[--ACCENT-COLOR]" />
      </span>
      <span className="break-words text-[calc(var(--WIDTHPERCENTAGE)*9)] leading-snug text-black">
        {text}
      </span>
    </p>
  );
}
