import { useWorkExperiences } from "@/store/resume-data-store";
import Heading from "../components/heading";
import { Circle, Square } from "lucide-react";

const initialWorkExperiences = [
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
  const workExperiences = useWorkExperiences();

  return (
    <div className="ml-[calc(var(--WIDTHPERCENTAGE)*24)]">
      <Heading bottomLine={true} mb={12}>
        Work Experience
      </Heading>

      <ul className="grid gap-[calc(var(--WIDTHPERCENTAGE)*9)] pr-[calc(var(--WIDTHPERCENTAGE)*25)]">
        {(workExperiences.length === 0
          ? initialWorkExperiences
          : workExperiences
        ).map((experience) => (
          <li
            key={experience.id}
            className="flex gap-[calc(var(--WIDTHPERCENTAGE)*10)] pl-[calc(var(--WIDTHPERCENTAGE)*9)]"
          >
            <Circle
              fill="currentColor"
              style={{
                color: "rgb(var(--ACCENT-COLOR))",
              }}
              size="calc(var(--WIDTHPERCENTAGE)*6)"
              className="mt-[calc(var(--WIDTHPERCENTAGE)*3.3)]"
            />

            <div className="grid flex-1">
              <h3 className="text-[calc(var(--WIDTHPERCENTAGE)*12)] font-bold leading-[1.1] text-[rgb(var(--ACCENT-COLOR))]">
                {experience.jobTitle}
              </h3>
              <p className="text-[calc(var(--WIDTHPERCENTAGE)*10)] font-semibold leading-snug">
                {experience.companyName}
              </p>
              <div className="flex justify-between">
                <p className="text-[calc(var(--WIDTHPERCENTAGE)*8)] italic leading-snug text-[rgb(var(--ACCENT-COLOR))]">
                  {experience.joiningDate + " - " + experience.leavingDate}
                </p>

                <p className="text-[calc(var(--WIDTHPERCENTAGE)*8)] italic leading-snug text-[rgb(var(--ACCENT-COLOR))]">
                  {experience.location}
                </p>
              </div>

              <ul>
                {experience.workResponsibilities.map(
                  ({ responsibility, id }) => (
                    <li
                      key={id}
                      className="flex gap-[calc(var(--WIDTHPERCENTAGE)*6)]"
                    >
                      <Square
                        style={{
                          color: "rgb(var(--ACCENT-COLOR))",
                        }}
                        className="mt-[calc(var(--WIDTHPERCENTAGE)*3.33)]"
                        size="calc(var(--WIDTHPERCENTAGE)*7)"
                      />
                      <p className="text-[calc(var(--WIDTHPERCENTAGE)*9)]">
                        {responsibility}
                      </p>
                    </li>
                  ),
                )}
              </ul>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
