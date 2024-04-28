import Heading from "../components/heading";
import { isDoubleUnderscores } from "@/utils/is-double-underscores";
import { useAppSelector } from "@/redux/hooks";
import { selectSkippedSection } from "@/redux/features/Skipped Sections/skippedSectionSlice";
import { selectAccentColor } from "@/redux/features/Custom Styles/customStyleSlice";
import { selectSkills } from "@/redux/features/Resume Data/resumeDataSlice";
import { For } from "@/components/control-flow/for";
import { Show } from "@/components/control-flow/show";
import { dummyData } from "../../dummy-data";

export default function SkillsSection() {
  const accentColor = useAppSelector((state) =>
    selectAccentColor(state, "template-1"),
  );
  const skills = useAppSelector(selectSkills);

  const shouldSkip = useAppSelector((state) =>
    selectSkippedSection(state, "skills"),
  );

  if (shouldSkip) return null;

  return (
    <div>
      <Heading>Skills</Heading>
      <ul className="flex flex-wrap gap-[calc(var(--WIDTHPERCENTAGE)*6.5)]">
        <For each={skills.length === 0 ? dummyData.skills : skills}>
          {({ id, name }) => (
            <Show key={id} when={!isDoubleUnderscores(name)}>
              <li
                className="rounded-[calc(var(--WIDTHPERCENTAGE)*3)] border-[calc(var(--WIDTHPERCENTAGE)*.9562)] px-[calc(var(--WIDTHPERCENTAGE)*6)] py-[calc(var(--WIDTHPERCENTAGE)*1.2)] text-[calc(var(--WIDTHPERCENTAGE)*9)] uppercase"
                style={{
                  borderColor: accentColor + "80",
                  backgroundColor: accentColor + "10",
                }}
              >
                {name}
              </li>
            </Show>
          )}
        </For>
      </ul>
    </div>
  );
}
