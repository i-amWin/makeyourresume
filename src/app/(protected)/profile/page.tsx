"use client";
import { Separator } from "@/components/ui/separator";
import { selectUser } from "@/redux/features/user/userSlice";
import { useAppSelector } from "@/redux/hooks";
import { For } from "@/components/control-flow/for";
import { templatesList } from "@/lib/templateList";
import Link from "next/link";

export default function ProfilePage() {
  const user = useAppSelector(selectUser)!;

  return (
    <section className="space-y-6 py-20">
      <h1 className="text-4xl font-bold">
        <span className="text-2xl">Hello, </span>
        <span className="text-primary">{user?.name}</span>
      </h1>

      <Separator />

      <div>
        <h2 className="text-2xl font-bold text-neutral-600">
          Your previous resumes
        </h2>

        <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          <For each={user?.resumes}>
            {(templateId) => {
              const Template = templatesList.find(
                (t) => t.id === templateId,
              )?.component;

              if (!Template) {
                return null;
              }

              return (
                <li
                  key={templateId}
                  className="origin-bottom overflow-hidden rounded border-2 bg-muted/20 transition-transform hover:scale-[101%]"
                >
                  <Link href={`/templates/${templateId}/editor/profile`}>
                    <Template />
                  </Link>
                </li>
              );
            }}
          </For>
        </ul>
      </div>
    </section>
  );
}
