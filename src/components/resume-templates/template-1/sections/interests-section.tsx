import { LucideIcon, Heart } from "lucide-react";
import Heading from "../components/heading";
import { isDoubleUnderscores } from "@/utils/is-double-underscores";
import { useAppSelector } from "@/redux/hooks";
import { selectSkippedSection } from "@/redux/features/Skipped Sections/skippedSectionSlice";
import { selectAccentColor } from "@/redux/features/Custom Styles/customStyleSlice";
import { selectInterests } from "@/redux/features/Resume Data/resumeDataSlice";
import { For } from "@/components/control-flow/for";
import { dummyData } from "../../dummy-data";
import { Show } from "@/components/control-flow/show";

export default function InterestsSection() {
  const shouldSkip = useAppSelector((state) =>
    selectSkippedSection(state, "interests"),
  );
  const interests = useAppSelector(selectInterests);

  if (shouldSkip) return null;

  return (
    <div>
      <Heading>Interests</Heading>
      <ul className="flex flex-col gap-[calc(var(--WIDTHPERCENTAGE)*6)]">
        <For each={interests.length === 0 ? dummyData.interests : interests}>
          {({ id, name }) => (
            <Show key={id} when={!isDoubleUnderscores(name)}>
              <li>
                <InterestText text={name} />
              </li>
            </Show>
          )}
        </For>
      </ul>
    </div>
  );
}

function InterestText({ text }: { Icon?: LucideIcon; text: string }) {
  const accentColor = useAppSelector((state) =>
    selectAccentColor(state, "template-1"),
  );
  return (
    <p className="flex items-center gap-[calc(var(--WIDTHPERCENTAGE)*6)]">
      <Heart
        className="h-[calc(var(--WIDTHPERCENTAGE)*15)] w-[calc(var(--WIDTHPERCENTAGE)*15)]"
        color={accentColor}
      />
      <span className="text-[calc(var(--WIDTHPERCENTAGE)*9)] capitalize leading-snug">
        {text}
      </span>
    </p>
  );
}
