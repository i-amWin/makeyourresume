"use client";
import { useSkills } from "@/store/resume-data-store";
import Heading from "../components/heading";

const initialSkills = [
  {
    id: "skill1",
    name: "html5",
  },
  {
    id: "skill2",
    name: "css3",
  },
  {
    id: "skill3",
    name: "javascript",
  },
  {
    id: "skill4",
    name: "typescript",
  },
  {
    id: "skill5",
    name: "react",
  },
  {
    id: "skill6",
    name: "node.js",
  },
  {
    id: "skill7",
    name: "next js",
  },
  {
    id: "skill8",
    name: "tailwind css",
  },
  {
    id: "skill9",
    name: "sql",
  },
  {
    id: "skill10",
    name: "git & github",
  },
  {
    id: "skill11",
    name: "mongodb",
  },
];

export default function SkillsSection() {
  const skills = useSkills();
  return (
    <div>
      <Heading>Skills</Heading>
      <ul className="flex flex-wrap gap-[calc(var(--WIDTHPERCENTAGE)*6.5)]">
        {(skills.length === 0 ? initialSkills : skills).map((skill) => (
          <li
            key={skill.id}
            className="rounded border border-[rgba(var(--ACCENT-COLOR),.502)] bg-[rgba(var(--ACCENT-COLOR),.063)] px-[calc(var(--WIDTHPERCENTAGE)*6)] py-[calc(var(--WIDTHPERCENTAGE)*1.2)] text-[calc(var(--WIDTHPERCENTAGE)*9)] uppercase"
          >
            {skill.name}
          </li>
        ))}
      </ul>
    </div>
  );
}
