"use client";

import { usePersonalProfiles } from "@/store/resume-data-store";
import Heading from "../components/heading";
import { Circle } from "lucide-react";

const defaultPersonalProfiles = [
  {
    id: "personal-profile-1",
    fieldName: "Language Known",
    fieldValue: "English, Spanish",
  },
  {
    id: "personal-profile-2",
    fieldName: "Certifications",
    fieldValue: "React Developers Certifications, Node.js Certification",
  },
];

export default function PersonalProfileSection() {
  const personalProfiles = usePersonalProfiles();

  return (
    <div className="ml-[calc(var(--WIDTHPERCENTAGE)*24)]">
      <Heading bottomLine={true} mb={12}>
        Personal Profile
      </Heading>

      <ul className="w-fit space-y-px pr-[calc(var(--WIDTHPERCENTAGE)*25)]">
        {(personalProfiles.length === 0
          ? defaultPersonalProfiles
          : personalProfiles
        ).map((personalProfile) => (
          <li
            key={personalProfile.id}
            className="flex w-4/5 gap-[calc(var(--WIDTHPERCENTAGE)*12)] pl-[calc(var(--WIDTHPERCENTAGE)*9)]"
          >
            <Circle
              fill="currentColor"
              style={{
                color: "rgb(var(--ACCENT-COLOR))",
              }}
              size="calc(var(--WIDTHPERCENTAGE)*6)"
              className="mt-[calc(var(--WIDTHPERCENTAGE)*3.3)]"
            />
            <p className="grid w-full grid-cols-3">
              <span className="text-[calc(var(--WIDTHPERCENTAGE)*9)] font-semibold">
                {personalProfile.fieldName}
              </span>
              <span className="col-span-2 flex text-[calc(var(--WIDTHPERCENTAGE)*9)]">
                <span className="mx-[calc(var(--WIDTHPERCENTAGE)*4)]">:</span>
                {personalProfile.fieldValue}
              </span>
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
