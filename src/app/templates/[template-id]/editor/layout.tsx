import PreviewTemplate from "@/components/preview-template";
import { getTemplateComponentById } from "@/lib/templateList";

export default function ResumeFormLayout({
  children,
  params: { "template-id": templateId },
}: {
  children: React.ReactNode;
  params: { "template-id": string };
}) {
  const Component = getTemplateComponentById(templateId);
  return (
    <section className="relative min-h-[100svh] py-20">
      <h1 className="text-4xl font-bold leading-[1.1]">
        Let<span className="text-primary">&apos;</span>s Start
      </h1>
      <p className="pb-3 text-sm">
        <span className="font-bold">Tip:</span> Just type double underscores (
        <span className="font-bold text-primary">--</span>) to skip a field.
      </p>

      <div className="grid grid-cols-2 gap-4">
        <div className="col-span-2 lg:col-span-1">{children}</div>
        <div className="hidden aspect-[596/842] overflow-hidden rounded border lg:block">
          {Component ? <Component /> : "Template not found"}
        </div>
        <PreviewTemplate
          className="fixed bottom-4 right-4 space-x-1 px-4 py-2.5 lg:hidden"
          templateComponent={Component ? <Component /> : "Template not found"}
        />
      </div>
    </section>
  );
}
