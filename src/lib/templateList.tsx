import Template1 from "@/components/resume-templates/template-1";
import { ForwardRefExoticComponent, RefAttributes } from "react";

type TemplateList = {
  id: string;
  name: string;
  component: ForwardRefExoticComponent<RefAttributes<HTMLDivElement>>;
}[];

export const templatesList: TemplateList = [
  {
    id: "template-1",
    name: "Template 1",
    component: Template1,
  },
];

export const getTemplateComponentById = (id: string) => {
  return templatesList.find((template) => template.id === id)?.component;
};
