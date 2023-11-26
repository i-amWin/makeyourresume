import { templates } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";

export default function Templates() {
  return (
    <section className="py-16">
      <h2 className="text-center text-[clamp(1.5625rem,0.9643rem+2.9911vw,2.4rem)] font-bold">
        Select a Template
      </h2>
      <p className="mb-6 text-center text-[clamp(0.7538rem,0.5899rem+0.8192vw,0.9831rem)]">
        Select a template to get started.
      </p>
      <ul className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {templates.map((template) => {
          return (
            <li
              key={template.id}
              className="origin-bottom overflow-hidden rounded border-2 transition-transform hover:scale-105"
            >
              <Link href={`/templates/${template.id}/resume-form`}>
                <Image
                  src={template.image}
                  alt={template.name}
                  sizes="(min-width: 1040px) 182px, (min-width: 780px) calc(25vw - 23px), (min-width: 640px) calc(33.33vw - 24px), calc(50vw - 27px)"
                />
              </Link>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
