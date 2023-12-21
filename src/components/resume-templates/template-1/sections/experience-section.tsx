import { useWorkExperiences } from "@/store/resume-data-store";
import Heading from "../components/heading";
import { Circle, Square } from "lucide-react";
import { useAccentColor } from "@/store/custom-styles-store";
import { useGetSkippedSection } from "@/store/skipped-section-store";
import { isDoubleUnderscores } from "@/utils/is-double-underscores";

const defaultWorkExperiences = [
  {
    id: "work-experience-1",
    companyName: "Tech Solutions Inc.",
    jobTitle: "Software Engineer",
    location: "Cityville, State",
    joiningDate: "2022-06-01",
    leavingDate: "2023-09-01",
    workResponsibilities: [
      {
        id: "work-responsibility-1-1",
        responsibility: "Developing and maintaining web applications",
      },
      {
        id: "work-responsibility-1-2",
        responsibility: "Collaborating with cross-functional teams",
      },
      {
        id: "work-responsibility-1-3",
        responsibility: "Troubleshooting and debugging issues",
      },
    ],
  },
  {
    id: "work-experience-2",
    companyName: "Code Innovators",
    jobTitle: "Junior Developer",
    location: "Cityville, State",
    joiningDate: "2021-01-15",
    leavingDate: "2022-05-30",
    workResponsibilities: [
      {
        id: "work-responsibility-2-1",
        responsibility: "Assisting in the development of new features",
      },
      {
        id: "work-responsibility-2-2",
        responsibility: "Conducting code reviews",
      },
      {
        id: "work-responsibility-2-3",
        responsibility: "Participating in agile development cycles",
      },
    ],
  },
];

export default function ExperienceSection() {
  const accentColor = useAccentColor("template-1");
  const workExperiences = useWorkExperiences();

  const shouldSkip = useGetSkippedSection("workExperiences");

  if (shouldSkip) return null;

  return (
    <div className="ml-[calc(var(--WIDTHPERCENTAGE)*24)]">
      <Heading bottomLine={true} mb={12}>
        Work Experience
      </Heading>

      <ul className="grid gap-[calc(var(--WIDTHPERCENTAGE)*9)] pr-[calc(var(--WIDTHPERCENTAGE)*25)]">
        {(workExperiences.length === 0
          ? defaultWorkExperiences
          : workExperiences
        ).map((experience) => (
          <li
            key={experience.id}
            className="flex gap-[calc(var(--WIDTHPERCENTAGE)*10)] pl-[calc(var(--WIDTHPERCENTAGE)*9)]"
          >
            <Circle
              color={accentColor}
              fill={accentColor}
              className="mt-[calc(var(--WIDTHPERCENTAGE)*3.3)] h-[calc(var(--WIDTHPERCENTAGE)*6)] w-[calc(var(--WIDTHPERCENTAGE)*6)]"
            />

            <div className="grid flex-1">
              {isDoubleUnderscores(experience.jobTitle) ? null : (
                <h3
                  className="text-[calc(var(--WIDTHPERCENTAGE)*12)] font-bold leading-none"
                  style={{ color: accentColor }}
                >
                  {experience.jobTitle}
                </h3>
              )}

              {isDoubleUnderscores(experience.companyName) ? null : (
                <p className="text-[calc(var(--WIDTHPERCENTAGE)*10)] font-semibold leading-tight">
                  {experience.companyName}
                </p>
              )}

              <div className="flex justify-between">
                {isDoubleUnderscores(experience.joiningDate) &&
                isDoubleUnderscores(experience.leavingDate) ? null : (
                  <p
                    className="text-[calc(var(--WIDTHPERCENTAGE)*8)] italic leading-tight"
                    style={{ color: accentColor }}
                  >
                    {experience.joiningDate + " - " + experience.leavingDate}
                  </p>
                )}

                {isDoubleUnderscores(experience.location) ? null : (
                  <p
                    className="text-[calc(var(--WIDTHPERCENTAGE)*8)] italic leading-tight"
                    style={{ color: accentColor }}
                  >
                    {experience.location}
                  </p>
                )}
              </div>

              <ul>
                {experience.workResponsibilities.map(
                  ({ responsibility, id }) => {
                    if (isDoubleUnderscores(responsibility)) return null;

                    return (
                      <li
                        key={id}
                        className="flex gap-[calc(var(--WIDTHPERCENTAGE)*6)]"
                      >
                        <Square
                          color={accentColor}
                          className="mt-[calc(var(--WIDTHPERCENTAGE)*3.3)] h-[calc(var(--WIDTHPERCENTAGE)*7)] w-[calc(var(--WIDTHPERCENTAGE)*7)]"
                        />
                        <p className="text-[calc(var(--WIDTHPERCENTAGE)*9)]">
                          {responsibility}
                        </p>
                      </li>
                    );
                  },
                )}
              </ul>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
