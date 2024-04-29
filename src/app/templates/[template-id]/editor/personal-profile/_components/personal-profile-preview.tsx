import { PersonalProfile } from "@/redux/features/Resume Data/resumeDataSlice";

type PersonalProfilePreviewProps = Omit<PersonalProfile, "id">;

export const PersonalProfilePreview = ({
  fieldName,
  fieldValue,
}: PersonalProfilePreviewProps) => {
  return (
    <div className="flex min-h-full items-center gap-2 text-sm font-medium text-accent">
      <p>{fieldName}</p>
      {fieldValue && <span>|</span>}
      <p>{fieldValue}</p>
    </div>
  );
};
