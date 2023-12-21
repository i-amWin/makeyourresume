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

export type TemplateId = "template-1";

type Templates = {
  id: TemplateId;
  name: string;
  accentColor: string;
  leftColumnGap: number;
  rightColumnGap: number;
}[];

const templates: Templates = [
  {
    id: "template-1",
    name: "Template 1",
    accentColor: "#cd6060",
    leftColumnGap: 15,
    rightColumnGap: 17,
  },
];

export const accentColors = templates.reduce(
  (acc, template) => {
    acc[template.id] = template.accentColor;
    return acc;
  },
  {} as Record<TemplateId, string>,
);

export const leftColumnGaps = templates.reduce(
  (acc, template) => {
    acc[template.id] = template.leftColumnGap;
    return acc;
  },
  {} as Record<TemplateId, number>,
);

export const rightColumnGaps = templates.reduce(
  (acc, template) => {
    acc[template.id] = template.rightColumnGap;
    return acc;
  },
  {} as Record<TemplateId, number>,
);

export const icons: Record<string, LucideIcon> = {
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
};

export const socialNames = Object.keys(icons).filter(
  (name) => !["mail", "mapPin", "phone"].includes(name),
);
