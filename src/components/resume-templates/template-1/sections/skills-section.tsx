import { useSkills } from "@/store/resume-data-store";
import Heading from "../components/heading";
import { useAccentColor } from "@/store/custom-styles-store";
import { useGetSkippedSection } from "@/store/skipped-section-store";
import { isDoubleUnderscores } from "@/utils/is-double-underscores";

const defaultSkills = [
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
  const accentColor = useAccentColor("template-1");
  const skills = useSkills();

  const shouldSkip = useGetSkippedSection("skills");

  if (shouldSkip) return null;
  return (
    <div>
      <Heading>Skills</Heading>
      <ul className="flex flex-wrap gap-[calc(var(--WIDTHPERCENTAGE)*6.5)]">
        {(skills.length === 0 ? defaultSkills : skills).map((skill) => {
          if (isDoubleUnderscores(skill.name)) return null;

          return (
            <li
              key={skill.id}
              className="rounded-[calc(var(--WIDTHPERCENTAGE)*3)] border-[calc(var(--WIDTHPERCENTAGE)*.9562)] px-[calc(var(--WIDTHPERCENTAGE)*6)] py-[calc(var(--WIDTHPERCENTAGE)*1.2)] text-[calc(var(--WIDTHPERCENTAGE)*9)] uppercase"
              style={{
                borderColor: accentColor + "80",
                backgroundColor: accentColor + "10",
              }}
            >
              {skill.name}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
