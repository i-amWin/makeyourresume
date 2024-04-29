import { Circle, Square } from "lucide-react";

import { isDoubleHyphens } from "@/utils/is-double-hyphens";

import { useAppSelector } from "@/redux/hooks";

import { selectSkippedSection } from "@/redux/features/Skipped Sections/skippedSectionSlice";
import { selectAccentColor } from "@/redux/features/Custom Styles/customStyleSlice";
import { selectWorkExperiences } from "@/redux/features/Resume Data/resumeDataSlice";

import Heading from "../components/heading";
import { For } from "@/components/control-flow/for";
import { Show } from "@/components/control-flow/show";

import { dummyData } from "../../dummy-data";

export default function ExperienceSection() {
  const accentColor = useAppSelector((state) =>
    selectAccentColor(state, "template-1"),
  );
  const workExperiences = useAppSelector(selectWorkExperiences);

  const shouldSkip = useAppSelector((state) =>
    selectSkippedSection(state, "workExperiences"),
  );

  if (shouldSkip) return null;

  return (
    <div className="ml-[calc(var(--WIDTHPERCENTAGE)*24)]">
      <Heading bottomLine={true} mb={12}>
        Work Experience
      </Heading>

      <ul className="grid gap-[calc(var(--WIDTHPERCENTAGE)*9)] pr-[calc(var(--WIDTHPERCENTAGE)*25)]">
        <For
          each={
            workExperiences.length === 0
              ? dummyData.workExperiences
              : workExperiences
          }
        >
          {({
            id,
            jobTitle,
            companyName,
            joiningDate,
            leavingDate,
            location,
            workResponsibilities,
          }) => (
            <li
              key={id}
              className="flex gap-[calc(var(--WIDTHPERCENTAGE)*10)] pl-[calc(var(--WIDTHPERCENTAGE)*9)]"
            >
              <Circle
                color={accentColor}
                fill={accentColor}
                className="mt-[calc(var(--WIDTHPERCENTAGE)*3.3)] h-[calc(var(--WIDTHPERCENTAGE)*6)] w-[calc(var(--WIDTHPERCENTAGE)*6)]"
              />

              <div className="grid flex-1">
                <Show when={!isDoubleHyphens(jobTitle)}>
                  <h3
                    className="text-[calc(var(--WIDTHPERCENTAGE)*12)] font-bold leading-none"
                    style={{ color: accentColor }}
                  >
                    {jobTitle}
                  </h3>
                </Show>

                <Show when={!isDoubleHyphens(companyName)}>
                  <p className="text-[calc(var(--WIDTHPERCENTAGE)*10)] font-semibold leading-tight">
                    {companyName}
                  </p>
                </Show>

                <div className="flex justify-between">
                  <Show
                    when={
                      !isDoubleHyphens(joiningDate) ||
                      !isDoubleHyphens(leavingDate)
                    }
                  >
                    <p
                      className="text-[calc(var(--WIDTHPERCENTAGE)*8)] italic leading-tight"
                      style={{ color: accentColor }}
                    >
                      <Show when={!isDoubleHyphens(joiningDate)}>
                        {joiningDate}
                      </Show>
                      <Show
                        when={
                          !isDoubleHyphens(joiningDate) &&
                          !isDoubleHyphens(leavingDate)
                        }
                      >
                        {" - "}
                      </Show>
                      <Show when={!isDoubleHyphens(leavingDate)}>
                        {leavingDate}
                      </Show>
                    </p>
                  </Show>
                  <Show when={!isDoubleHyphens(location)}>
                    <p
                      className="text-[calc(var(--WIDTHPERCENTAGE)*8)] italic leading-tight"
                      style={{ color: accentColor }}
                    >
                      {location}
                    </p>
                  </Show>
                </div>

                <ul>
                  <For each={workResponsibilities}>
                    {({ id, responsibility }) => (
                      <Show key={id} when={!isDoubleHyphens(responsibility)}>
                        <li className="flex gap-[calc(var(--WIDTHPERCENTAGE)*6)]">
                          <Square
                            color={accentColor}
                            className="mt-[calc(var(--WIDTHPERCENTAGE)*3.3)] h-[calc(var(--WIDTHPERCENTAGE)*7)] w-[calc(var(--WIDTHPERCENTAGE)*7)]"
                          />
                          <p className="text-[calc(var(--WIDTHPERCENTAGE)*9)]">
                            {responsibility}
                          </p>
                        </li>
                      </Show>
                    )}
                  </For>
                </ul>
              </div>
            </li>
          )}
        </For>
      </ul>
    </div>
  );
}
