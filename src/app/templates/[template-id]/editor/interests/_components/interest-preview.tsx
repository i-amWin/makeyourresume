import { Interest } from "@/redux/features/Resume Data/resumeDataSlice";

type InterestPreviewProps = Omit<Interest, "id">;

export const InterestPreview = ({ name }: InterestPreviewProps) => {
  return (
    <div className="flex min-h-full items-center gap-2 text-sm font-medium text-accent">
      <p className="capitalize">{name}</p>
    </div>
  );
};
