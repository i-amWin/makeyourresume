import { useAccentColor } from "@/store/custom-styles-store";
import {
  useAbout,
  useFirstName,
  useLastName,
  useProfessionalTitle,
} from "@/store/resume-data-store";

export default function AboutSection() {
  const accentColor = useAccentColor();
  return (
    <div
      className="px-[calc(var(--WIDTHPERCENTAGE)*15)] py-[calc(var(--WIDTHPERCENTAGE)*8)] text-white"
      style={{ backgroundColor: accentColor }}
    >
      <Name />
      <ProfessionalTitle />
      <About />
    </div>
  );
}

function Name() {
  const firstName = useFirstName();
  const lastName = useLastName();

  return (
    <h1 className="text-[calc(var(--WIDTHPERCENTAGE)*22)] font-medium leading-none">
      {(firstName || "John") + " " + (lastName || "Doe")}
    </h1>
  );
}

function ProfessionalTitle() {
  const professionalTitle = useProfessionalTitle();

  return (
    <p className="relative mb-[calc(var(--WIDTHPERCENTAGE)*3)] w-fit pr-[calc(var(--WIDTHPERCENTAGE)*6)] text-[calc(var(--WIDTHPERCENTAGE)*12)] leading-tight after:absolute after:left-0 after:top-[105%] after:h-[calc(var(--WIDTHPERCENTAGE)*0.789)] after:w-full after:bg-white">
      {professionalTitle || "Web Developer"}
    </p>
  );
}

function About() {
  const about = useAbout();

  return (
    <p className="text-[calc(var(--WIDTHPERCENTAGE)*9)] leading-snug">
      {about ||
        "I am a passionate and dedicated web developer with experience in front-end and back-end technologies."}
    </p>
  );
}
