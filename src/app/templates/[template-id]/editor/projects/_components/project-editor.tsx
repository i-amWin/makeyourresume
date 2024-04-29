import {
  Project,
  removeField,
  setField,
} from "@/redux/features/Resume Data/resumeDataSlice";
import { useAppDispatch } from "@/redux/hooks";
import { memo } from "react";
import { ProjectPreview } from "./project-preview";
import DraggableItemWrapper from "@/components/form/draggable-item-wrapper";
import { TextInput } from "@/components/form/form-input";
import { TextArea } from "@/components/form/form-textarea";

type ProjectEditorProps = Project;

export const ProjectEditor = memo((project: ProjectEditorProps) => {
  const dispatch = useAppDispatch();

  const setProject = (project: Project) => {
    dispatch(
      setField({
        fieldName: "projects",
        value: project,
      }),
    );
  };

  const removeProject = (id: string) => {
    dispatch(removeField({ fieldName: "projects", id }));
  };

  return (
    <DraggableItemWrapper
      id={project.id}
      preview={<ProjectPreview {...project} />}
      onRemoveClick={() => removeProject(project.id)}
      removeSrOnlyLabel={`Remove ${project.projectName} project from your resume`}
    >
      <div className="grid items-end gap-2">
        <TextInput
          label="Project Name"
          placeholder="Enter your project name"
          value={project.projectName}
          setValue={(value) => {
            setProject({ ...project, projectName: value });
          }}
        />

        <TextArea
          label="Project Description"
          placeholder="Enter your project description"
          value={project.projectDescription}
          setValue={(value) => {
            setProject({ ...project, projectDescription: value });
          }}
          rows={5}
        />

        <div className="grid grid-cols-2 gap-2">
          <TextInput
            label="Source Code Link"
            placeholder="Enter your source code link"
            value={project.sourceLink}
            setValue={(value) => {
              setProject({ ...project, sourceLink: value });
            }}
            className="col-span-2 sm:col-span-1"
          />

          <TextInput
            label="Live Demo Link"
            placeholder="Enter your live demo link"
            value={project.liveLink}
            setValue={(value) => {
              setProject({ ...project, liveLink: value });
            }}
            className="col-span-2 sm:col-span-1"
          />
        </div>

        <TextInput
          label="Tags"
          placeholder="Enter your project tags, eg: HTML, CSS, JS"
          value={project.tags}
          setValue={(value) => {
            setProject({ ...project, tags: value });
          }}
          className="flex-1"
        />
      </div>
    </DraggableItemWrapper>
  );
});

ProjectEditor.displayName = "ProjectEditor";
