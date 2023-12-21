import { usePersonalProfiles } from "@/store/resume-data-store";
import Heading from "../components/heading";
import { Circle } from "lucide-react";
import { useAccentColor } from "@/store/custom-styles-store";
import { useGetSkippedSection } from "@/store/skipped-section-store";

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
  const accentColor = useAccentColor("template-1");
  const personalProfiles = usePersonalProfiles();

  const shouldSkip = useGetSkippedSection("personalProfile");

  if (shouldSkip) return null;

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
            className="flex gap-[calc(var(--WIDTHPERCENTAGE)*12)] pl-[calc(var(--WIDTHPERCENTAGE)*9)]"
          >
            <Circle
              fill={accentColor}
              color={accentColor}
              className="mt-[calc(var(--WIDTHPERCENTAGE)*3.3)] h-[calc(var(--WIDTHPERCENTAGE)*6)] w-[calc(var(--WIDTHPERCENTAGE)*6)]"
            />
            <p className="grid w-full grid-cols-3">
              <span
                className="text-[calc(var(--WIDTHPERCENTAGE)*9)] font-semibold"
                style={{
                  color: accentColor,
                }}
              >
                {personalProfile.fieldName}
              </span>
              <span className="col-span-2 flex text-[calc(var(--WIDTHPERCENTAGE)*9)]">
                <span className="mx-[calc(var(--WIDTHPERCENTAGE)*4)] font-semibold">
                  :
                </span>
                {personalProfile.fieldValue}
              </span>
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
