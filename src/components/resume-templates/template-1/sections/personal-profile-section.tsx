import Heading from "../components/heading";
import { Circle } from "lucide-react";
import { useAppSelector } from "@/redux/hooks";
import { selectSkippedSection } from "@/redux/features/Skipped Sections/skippedSectionSlice";
import { selectAccentColor } from "@/redux/features/Custom Styles/customStyleSlice";
import { selectPersonalProfiles } from "@/redux/features/Resume Data/resumeDataSlice";
import { For } from "@/components/control-flow/for";
import { dummyData } from "../../dummy-data";

export default function PersonalProfileSection() {
  const accentColor = useAppSelector((state) =>
    selectAccentColor(state, "template-1"),
  );
  const personalProfiles = useAppSelector(selectPersonalProfiles);

  const shouldSkip = useAppSelector((state) =>
    selectSkippedSection(state, "personalProfile"),
  );

  if (shouldSkip) return null;

  return (
    <div className="ml-[calc(var(--WIDTHPERCENTAGE)*24)]">
      <Heading bottomLine={true} mb={12}>
        Personal Profile
      </Heading>

      <ul className="w-fit space-y-px pr-[calc(var(--WIDTHPERCENTAGE)*25)]">
        <For
          each={
            personalProfiles.length === 0
              ? dummyData.personalProfiles
              : personalProfiles
          }
        >
          {({ id, fieldValue, fieldName }) => (
            <li
              key={id}
              className="flex gap-[calc(var(--WIDTHPERCENTAGE)*12)] pl-[calc(var(--WIDTHPERCENTAGE)*9)]"
            >
              <Circle
                fill={accentColor}
                color={accentColor}
                className="mt-[calc(var(--WIDTHPERCENTAGE)*3.3)] h-[calc(var(--WIDTHPERCENTAGE)*6)] w-[calc(var(--WIDTHPERCENTAGE)*6)]"
              />
              <p className="grid w-full grid-cols-3">
                <span
                  className="text-[calc(var(--WIDTHPERCENTAGE)*9)] font-semibold"
                  style={{
                    color: accentColor,
                  }}
                >
                  {fieldName}
                </span>
                <span className="col-span-2 flex text-[calc(var(--WIDTHPERCENTAGE)*9)]">
                  <span className="mx-[calc(var(--WIDTHPERCENTAGE)*4)] font-semibold">
                    :
                  </span>
                  {fieldValue}
                </span>
              </p>
            </li>
          )}
        </For>
      </ul>
    </div>
  );
}
