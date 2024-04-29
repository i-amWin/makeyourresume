import { Project } from "@/redux/features/Resume Data/resumeDataSlice";

type ProjectPreviewProps = Omit<Project, "id">;

export const ProjectPreview = ({
  projectName,
  projectDescription,
  liveLink,
  sourceLink,
  tags,
}: ProjectPreviewProps) => {
  return (
    <div className="flex min-h-full flex-col justify-center text-sm font-medium text-accent">
      <div className="flex gap-2">
        <p>{projectName}</p>
        {tags && <span>|</span>}
        <p>{tags}</p>
      </div>
      <div className="flex gap-2">
        <p className="break-all">{sourceLink}</p>
        {liveLink && <span>-</span>}
        <p className="break-all">{liveLink}</p>
      </div>
      <p className="line-clamp-1 text-accent/60">{projectDescription}</p>
    </div>
  );
};
