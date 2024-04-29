import { WorkExperience } from "@/redux/features/Resume Data/resumeDataSlice";

type WorkExperiencePreviewProps = Omit<
  WorkExperience,
  "id" | "workResponsibilities"
>;

export const WorkExperiencePreview = ({
  companyName,
  jobTitle,
  location,
  joiningDate,
  leavingDate,
}: WorkExperiencePreviewProps) => {
  return (
    <div className="flex min-h-full flex-col justify-center text-sm font-medium text-accent">
      <div className="flex gap-2">
        <p>{companyName}</p>
        {jobTitle && <span>|</span>}
        <p>{jobTitle}</p>
      </div>
      <p>{location}</p>
      <div className="flex gap-2">
        <p>{joiningDate}</p>
        {leavingDate && <span>-</span>}
        <p>{leavingDate}</p>
      </div>
    </div>
  );
};
