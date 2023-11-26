"use client";

import { useEducations } from "@/store/resume-data-store";
import Heading from "../components/heading";
import { Circle } from "lucide-react";

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
    from: "22018",
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
  const educations = useEducations();

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
                fill="currentColor"
                style={{
                  color: "rgb(var(--ACCENT-COLOR))",
                }}
                className="mt-[calc(var(--WIDTHPERCENTAGE)*3.3)] h-[calc(var(--WIDTHPERCENTAGE)*6)] w-[calc(var(--WIDTHPERCENTAGE)*6)]"
              />
              <div>
                <h3 className="text-[calc(var(--WIDTHPERCENTAGE)*12)] font-semibold leading-[1.1] text-[rgb(var(--ACCENT-COLOR))]">
                  {education.courseName}
                </h3>
                <p className="text-[calc(var(--WIDTHPERCENTAGE)*9)] italic leading-snug">
                  {education.collegeName}
                </p>
                <p className="text-[calc(var(--WIDTHPERCENTAGE)*7)] italic text-[rgb(var(--ACCENT-COLOR))]">
                  {education.from + " - " + education.to}
                </p>
              </div>
            </li>
          ),
        )}
      </ul>
    </div>
  );
}
