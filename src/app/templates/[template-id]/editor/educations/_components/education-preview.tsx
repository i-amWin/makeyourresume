import { Education } from "@/redux/features/Resume Data/resumeDataSlice";

type EducationPreviewProps = Omit<Education, "id">;

export const EducationPreview = ({
  courseName,
  collegeName,
  from,
  to,
}: EducationPreviewProps) => {
  return (
    <div className="flex min-h-full flex-col justify-center text-sm font-medium text-accent">
      <div className="flex gap-2">
        <p>{courseName}</p>
        {collegeName && <span>|</span>}
        <p>{collegeName}</p>
      </div>
      <div className="flex gap-2">
        <p>{from}</p>
        {to && <span>-</span>}
        <p>{to}</p>
      </div>
    </div>
  );
};
