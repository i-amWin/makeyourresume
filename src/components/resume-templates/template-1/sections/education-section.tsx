import { Circle } from "lucide-react";

import { isDoubleHyphens } from "@/utils/is-double-hyphens";

import { useAppSelector } from "@/redux/hooks";

import { selectSkippedSection } from "@/redux/features/Skipped Sections/skippedSectionSlice";
import { selectAccentColor } from "@/redux/features/Custom Styles/customStyleSlice";
import { selectEducations } from "@/redux/features/Resume Data/resumeDataSlice";

import Heading from "../components/heading";
import { For } from "@/components/control-flow/for";
import { Show } from "@/components/control-flow/show";

import { dummyData } from "../../dummy-data";

export default function EducationSection() {
  const accentColor = useAppSelector((state) =>
    selectAccentColor(state, "template-1"),
  );
  const educations = useAppSelector(selectEducations);

  const shouldSkip = useAppSelector((state) =>
    selectSkippedSection(state, "educations"),
  );

  if (shouldSkip) return null;

  return (
    <div className="ml-[calc(var(--WIDTHPERCENTAGE)*24)]">
      <Heading bottomLine={true} mb={12}>
        Education
      </Heading>

      <ul className="flex flex-col gap-[calc(var(--WIDTHPERCENTAGE)*7)] pr-[calc(var(--WIDTHPERCENTAGE)*25)]">
        <For each={educations.length === 0 ? dummyData.educations : educations}>
          {({ id, courseName, collegeName, from, to }) => (
            <li
              key={id}
              className="flex gap-[calc(var(--WIDTHPERCENTAGE)*10)] pl-[calc(var(--WIDTHPERCENTAGE)*9)]"
            >
              <Circle
                fill={accentColor}
                color={accentColor}
                className="mt-[calc(var(--WIDTHPERCENTAGE)*3.3)] h-[calc(var(--WIDTHPERCENTAGE)*6)] w-[calc(var(--WIDTHPERCENTAGE)*6)]"
              />
              <div>
                <Show when={!isDoubleHyphens(courseName)}>
                  <h3
                    className="text-[calc(var(--WIDTHPERCENTAGE)*12)] font-bold leading-[1.1]"
                    style={{
                      color: accentColor,
                    }}
                  >
                    {courseName}
                  </h3>
                </Show>

                <Show when={!isDoubleHyphens(collegeName)}>
                  <p className="text-[calc(var(--WIDTHPERCENTAGE)*9)] italic leading-snug">
                    {collegeName}
                  </p>
                </Show>

                <Show when={!isDoubleHyphens(from) || !isDoubleHyphens(to)}>
                  <p
                    className="text-[calc(var(--WIDTHPERCENTAGE)*7)] italic"
                    style={{ color: accentColor }}
                  >
                    <Show when={!isDoubleHyphens(from)}>{from}</Show>
                    <Show when={!isDoubleHyphens(from) && !isDoubleHyphens(to)}>
                      {" - "}
                    </Show>
                    <Show when={!isDoubleHyphens(to)}>{to}</Show>
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
