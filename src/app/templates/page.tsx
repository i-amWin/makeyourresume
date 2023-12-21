import EditAccentColors from "@/components/edit-accent-colors";
import Link from "next/link";
import { templatesList } from "@/lib/templateList";
import Reset from "@/components/reset";

export default function Templates() {
  return (
    <section className="py-20">
      <Reset />
      <div className="mb-4 flex flex-wrap items-center gap-4">
        <div>
          <h2 className="text-3xl/tight font-bold text-accent">
            Select a Template
          </h2>
          <p className="text-base">
            Please select a resume template to get started.
          </p>
        </div>
        <EditAccentColors />
      </div>
      <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {templatesList.map((template) => {
          return (
            <li
              key={template.id}
              className="aspect-[596/842] origin-bottom overflow-hidden rounded border-2 bg-muted/20 transition-transform hover:scale-[101%]"
            >
              <Link href={`/templates/${template.id}/editor/profile`}>
                <div aria-hidden>
                  <template.component />
                </div>
                <span className="sr-only">{template.name}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
