import { useParams } from "next/navigation";

export const useTemplateIdParam = () => {
  const { "template-id": templateId } = useParams();

  if (typeof templateId === "string") return templateId;
  return "";
};
