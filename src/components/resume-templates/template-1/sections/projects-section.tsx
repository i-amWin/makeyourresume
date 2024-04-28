import Heading from "../components/heading";
import { Circle } from "lucide-react";
import { isDoubleUnderscores } from "@/utils/is-double-underscores";
import { useAppSelector } from "@/redux/hooks";
import { selectSkippedSection } from "@/redux/features/Skipped Sections/skippedSectionSlice";
import { selectAccentColor } from "@/redux/features/Custom Styles/customStyleSlice";
import { selectProjects } from "@/redux/features/Resume Data/resumeDataSlice";
import { For } from "@/components/control-flow/for";
import { dummyData } from "../../dummy-data";
import { Show } from "@/components/control-flow/show";

export default function ProjectsSection() {
  const accentColor = useAppSelector((state) =>
    selectAccentColor(state, "template-1"),
  );
  const projects = useAppSelector(selectProjects);

  const shouldSkip = useAppSelector((state) =>
    selectSkippedSection(state, "projects"),
  );

  if (shouldSkip) return null;

  return (
    <div className="ml-[calc(var(--WIDTHPERCENTAGE)*24)]">
      <Heading bottomLine={true} mb={12}>
        Projects
      </Heading>

      <ul className="flex flex-col gap-[calc(var(--WIDTHPERCENTAGE)*9)] pr-[calc(var(--WIDTHPERCENTAGE)*25)]">
        <For each={projects.length === 0 ? dummyData.projects : projects}>
          {({
            id,
            projectName,
            projectDescription,
            liveLink,
            sourceLink,
            tags,
          }) => (
            <li
              key={id}
              className="flex gap-[calc(var(--WIDTHPERCENTAGE)*10)] pl-[calc(var(--WIDTHPERCENTAGE)*9)]"
            >
              <Circle
                fill={accentColor}
                color={accentColor}
                className="mt-[calc(var(--WIDTHPERCENTAGE)*3.3)] h-[calc(var(--WIDTHPERCENTAGE)*6)] w-[calc(var(--WIDTHPERCENTAGE)*6)]"
              />
              <div className="grid flex-1">
                <div
                  className="flex items-center gap-[calc(var(--WIDTHPERCENTAGE)*1.5)] leading-[1.1]"
                  style={{
                    color: accentColor,
                  }}
                >
                  <Show when={!isDoubleUnderscores(projectName)}>
                    <h3 className="text-[calc(var(--WIDTHPERCENTAGE)*12)] font-bold">
                      {projectName}
                    </h3>
                  </Show>

                  <Show when={!isDoubleUnderscores(liveLink)}>
                    <p className="text-[calc(var(--WIDTHPERCENTAGE)*9)]">
                      ({liveLink})
                    </p>
                  </Show>
                </div>

                <Show when={!isDoubleUnderscores(projectDescription)}>
                  <p className="text-[calc(var(--WIDTHPERCENTAGE)*9)] leading-snug">
                    {projectDescription}
                  </p>
                </Show>

                <Show when={!isDoubleUnderscores(sourceLink)}>
                  <p className="text-[calc(var(--WIDTHPERCENTAGE)*9)] leading-snug">
                    <span className="font-semibold">Source Code: </span>
                    <span className="text-blue-500">{sourceLink}</span>
                  </p>
                </Show>

                <Show when={!isDoubleUnderscores(tags)}>
                  <p
                    className="text-[calc(var(--WIDTHPERCENTAGE)*8)] italic leading-snug"
                    style={{
                      color: accentColor,
                    }}
                  >
                    {tags}
                  </p>
                </Show>
              </div>
            </li>
          )}
        </For>
      </ul>
    </div>
  );
}
