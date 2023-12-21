import { useEducations } from "@/store/resume-data-store";
import Heading from "../components/heading";
import { Circle } from "lucide-react";
import { useAccentColor } from "@/store/custom-styles-store";
import { useGetSkippedSection } from "@/store/skipped-section-store";
import { isDoubleUnderscores } from "@/utils/is-double-underscores";

const defaultEducations = [
  {
    id: "education-1",
    courseName: "Master of Web Development",
    collegeName: "Digital University",
    from: "2022",
    to: "2024(Expected)",
  },
  {
    id: "education-2",
    courseName: "Bachelor of Science in Computer Science",
    collegeName: "University of Technology",
    from: "2018",
    to: "2022",
  },
  {
    id: "education-3",
    courseName: "Diploma in Software Engineering",
    collegeName: "Tech Institute",
    from: "2016",
    to: "2018",
  },
];

export default function EducationSection() {
  const accentColor = useAccentColor("template-1");
  const educations = useEducations();

  const shouldSkip = useGetSkippedSection("educations");

  if (shouldSkip) return null;

  return (
    <div className="ml-[calc(var(--WIDTHPERCENTAGE)*24)]">
      <Heading bottomLine={true} mb={12}>
        Education
      </Heading>

      <ul className="flex flex-col gap-[calc(var(--WIDTHPERCENTAGE)*7)] pr-[calc(var(--WIDTHPERCENTAGE)*25)]">
        {(educations.length === 0 ? defaultEducations : educations).map(
          (education) => (
            <li
              key={education.id}
              className="flex gap-[calc(var(--WIDTHPERCENTAGE)*10)] pl-[calc(var(--WIDTHPERCENTAGE)*9)]"
            >
              <Circle
                fill={accentColor}
                color={accentColor}
                className="mt-[calc(var(--WIDTHPERCENTAGE)*3.3)] h-[calc(var(--WIDTHPERCENTAGE)*6)] w-[calc(var(--WIDTHPERCENTAGE)*6)]"
              />
              <div>
                {isDoubleUnderscores(education.courseName) ? null : (
                  <h3
                    className="text-[calc(var(--WIDTHPERCENTAGE)*12)] font-bold leading-[1.1]"
                    style={{
                      color: accentColor,
                    }}
                  >
                    {education.courseName}
                  </h3>
                )}

                {isDoubleUnderscores(education.collegeName) ? null : (
                  <p className="text-[calc(var(--WIDTHPERCENTAGE)*9)] italic leading-snug">
                    {education.collegeName}
                  </p>
                )}

                {isDoubleUnderscores(education.from) &&
                isDoubleUnderscores(education.to) ? null : (
                  <p
                    className="text-[calc(var(--WIDTHPERCENTAGE)*7)] italic"
                    style={{ color: accentColor }}
                  >
                    {education.from + " - " + education.to}
                  </p>
                )}
              </div>
            </li>
          ),
        )}
      </ul>
    </div>
  );
}
