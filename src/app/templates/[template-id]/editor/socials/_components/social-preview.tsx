import { Social } from "@/redux/features/Resume Data/resumeDataSlice";

type SocialPreviewProps = Omit<Social, "id">;

export const SocialPreview = ({ name, url }: SocialPreviewProps) => {
  return (
    <div className="flex min-h-full items-center gap-2 text-sm font-medium text-accent">
      <p className="capitalize">{name}</p>
      {url && <span>|</span>}
      <p className="break-all">{url}</p>
    </div>
  );
};
