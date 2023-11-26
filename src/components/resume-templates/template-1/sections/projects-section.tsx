"use client";

import { useProjects } from "@/store/resume-data-store";
import Heading from "../components/heading";
import { Circle } from "lucide-react";

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
  const projects = useProjects();

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
              fill="currentColor"
              style={{
                color: "rgb(var(--ACCENT-COLOR))",
              }}
              className="mt-[calc(var(--WIDTHPERCENTAGE)*3.3)] h-[calc(var(--WIDTHPERCENTAGE)*6)] w-[calc(var(--WIDTHPERCENTAGE)*6)]"
            />
            <div className="grid flex-1">
              <div className="flex items-center gap-[calc(var(--WIDTHPERCENTAGE)*1.5)] leading-[1.1] text-[rgb(var(--ACCENT-COLOR))]">
                <h3 className=" text-[calc(var(--WIDTHPERCENTAGE)*12)] font-semibold">
                  {project.projectName}
                </h3>
                <p className="text-[calc(var(--WIDTHPERCENTAGE)*9)]">
                  ({project.liveLink})
                </p>
              </div>
              <p className="text-[calc(var(--WIDTHPERCENTAGE)*9)] leading-snug">
                {project.projectDescription}
              </p>
              <p className="text-[calc(var(--WIDTHPERCENTAGE)*9)] leading-snug">
                <span className="font-medium">Source Code: </span>
                <span className="text-blue-500">{project.sourceLink}</span>
              </p>
              <p className="text-[calc(var(--WIDTHPERCENTAGE)*8)] leading-snug text-[rgb(var(--ACCENT-COLOR))]">
                {project.tags}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
