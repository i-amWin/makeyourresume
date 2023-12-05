import { StaticImageData } from "next/image";
import type { ForwardRefExoticComponent, RefAttributes } from "react";

import Template1Preview from "@/assets/template1.jpg";

import Template1 from "@/components/resume-templates/template-1";

export type TemplateId = "template-1";

type Templates = {
  id: TemplateId;
  name: string;
  previewImage: StaticImageData;
  component: ForwardRefExoticComponent<RefAttributes<HTMLDivElement>>;
  accentColor: string;
  leftColumnGap: number;
  rightColumnGap: number;
}[];

const templates: Templates = [
  {
    id: "template-1",
    name: "Template 1",
    previewImage: Template1Preview,
    component: Template1,
    accentColor: "#cd6060",
    leftColumnGap: 15,
    rightColumnGap: 17,
  },
];

export const templatesList = templates.map((template) => ({
  id: template.id,
  name: template.name,
  previewImage: template.previewImage,
}));

export const accentColors = templates.reduce(
  (acc, template) => {
    acc[template.id] = template.accentColor;
    return acc;
  },
  {} as Record<string, string>,
);

export const leftColumnGaps = templates.reduce(
  (acc, template) => {
    acc[template.id] = template.leftColumnGap;
    return acc;
  },
  {} as Record<string, number>,
);

export const rightColumnGaps = templates.reduce(
  (acc, template) => {
    acc[template.id] = template.rightColumnGap;
    return acc;
  },
  {} as Record<string, number>,
);

export const templateComponents = templates.reduce(
  (acc, template) => {
    acc[template.id] = template.component;
    return acc;
  },
  {} as Record<
    string,
    ForwardRefExoticComponent<RefAttributes<HTMLDivElement>>
  >,
);
