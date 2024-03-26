import { useProjects } from "@/store/resume-data-store";
import Heading from "../components/heading";
import { Circle } from "lucide-react";
import { isDoubleUnderscores } from "@/utils/is-double-underscores";
import { useAppSelector } from "@/redux/hooks";
import { selectSkippedSection } from "@/redux/features/Skipped Sections/skippedSectionSlice";
import { selectAccentColor } from "@/redux/features/Custom Styles/customStyleSlice";

const defaultProjects = [
  {
    id: "project-1",
    projectName: "E-commerce Platform",
    projectDescription:
      "Developed a responsive e-commerce platform with user authentication and payment gateway integration.",
    liveLink: "https://example.com",
    sourceLink: "https://github.com/johndoe/e-commerce-project",
    tags: "React, Node.js, MongoDB, Bootstrap",
  },
  {
    id: "project-2",
    projectName: "Task Manager App",
    projectDescription:
      "Built a task manager application to organize and track daily tasks with user-friendly interfaces.",
    liveLink: "https://example.com/task-manager",
    sourceLink: "https://github.com/johndoe/task-manager-app",
    tags: "JavaScript, Express, MongoDB, React",
  },
];

export default function ProjectsSection() {
  const accentColor = useAppSelector((state) =>
    selectAccentColor(state, "template-1"),
  );
  const projects = useProjects();

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
        {(projects.length === 0 ? defaultProjects : projects).map((project) => (
          <li
            key={project.id}
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
                {isDoubleUnderscores(project.projectName) ? null : (
                  <h3 className="text-[calc(var(--WIDTHPERCENTAGE)*12)] font-bold">
                    {project.projectName}
                  </h3>
                )}

                {isDoubleUnderscores(project.liveLink) ? null : (
                  <p className="text-[calc(var(--WIDTHPERCENTAGE)*9)]">
                    ({project.liveLink})
                  </p>
                )}
              </div>

              {isDoubleUnderscores(project.projectDescription) ? null : (
                <p className="text-[calc(var(--WIDTHPERCENTAGE)*9)] leading-snug">
                  {project.projectDescription}
                </p>
              )}

              {isDoubleUnderscores(project.sourceLink) ? null : (
                <p className="text-[calc(var(--WIDTHPERCENTAGE)*9)] leading-snug">
                  <span className="font-semibold">Source Code: </span>
                  <span className="text-blue-500">{project.sourceLink}</span>
                </p>
              )}

              {isDoubleUnderscores(project.tags) ? null : (
                <p
                  className="text-[calc(var(--WIDTHPERCENTAGE)*8)] italic leading-snug"
                  style={{
                    color: accentColor,
                  }}
                >
                  {project.tags}
                </p>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
