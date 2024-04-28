import { Show } from "@/components/control-flow/show";
import { selectAccentColor } from "@/redux/features/Custom Styles/customStyleSlice";
import { selectProfile } from "@/redux/features/Resume Data/resumeDataSlice";
import { useAppSelector } from "@/redux/hooks";

import { isDoubleUnderscores } from "@/utils/is-double-underscores";
import { dummyData } from "../../dummy-data";

export default function AboutSection() {
  const accentColor = useAppSelector((state) =>
    selectAccentColor(state, "template-1"),
  );

  const { firstName, lastName, professionalTitle, about } =
    useAppSelector(selectProfile);

  return (
    <div
      className="px-[calc(var(--WIDTHPERCENTAGE)*15)] py-[calc(var(--WIDTHPERCENTAGE)*8)] text-white"
      style={{ backgroundColor: accentColor }}
    >
      {/* NAME */}
      <Show
        when={!isDoubleUnderscores(firstName) || !isDoubleUnderscores(lastName)}
      >
        <h1 className="text-[calc(var(--WIDTHPERCENTAGE)*22)] font-medium leading-none">
          <Show when={!isDoubleUnderscores(firstName)}>
            <span>{firstName || dummyData.profile.firstName}</span>
          </Show>{" "}
          <Show when={!isDoubleUnderscores(lastName)}>
            <span>{lastName || dummyData.profile.lastName}</span>
          </Show>
        </h1>
      </Show>

      {/* PROFESSIONAL TITLE */}
      <Show when={!isDoubleUnderscores(professionalTitle)}>
        <p className="relative mb-[calc(var(--WIDTHPERCENTAGE)*3)] w-fit pr-[calc(var(--WIDTHPERCENTAGE)*6)] text-[calc(var(--WIDTHPERCENTAGE)*12)] leading-tight after:absolute after:left-0 after:top-[105%] after:h-[calc(var(--WIDTHPERCENTAGE)*0.789)] after:w-full after:bg-white">
          {professionalTitle || dummyData.profile.professionalTitle}
        </p>
      </Show>

      {/* ABOUT */}
      <Show when={!isDoubleUnderscores(about)}>
        <p className="text-[calc(var(--WIDTHPERCENTAGE)*9)] leading-snug">
          {about || dummyData.profile.about}
        </p>
      </Show>
    </div>
  );
}
