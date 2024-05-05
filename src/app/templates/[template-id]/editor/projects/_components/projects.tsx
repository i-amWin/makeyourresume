import { arrayMove } from "@dnd-kit/sortable";

import { useAppDispatch, useAppSelector } from "@/redux/hooks";

import {
  addField,
  selectProjects,
  setFields,
} from "@/redux/features/Resume Data/resumeDataSlice";

import DNDContexts from "@/components/form/dnd-contexts";
import { ProjectEditor } from "./project-editor";
import { Button } from "@/components/ui/button";

export const Projects = () => {
  const dispatch = useAppDispatch();
  const projects = useAppSelector(selectProjects);

  const setItems = (oldIndex: number, newIndex: number) => {
    dispatch(
      setFields({
        fieldName: "projects",
        value: arrayMove(projects, oldIndex, newIndex),
      }),
    );
  };

  return (
    <div className="space-y-4">
      <ul className="space-y-2">
        <DNDContexts
          items={projects.map((project) => ({ id: project.id }))}
          setItems={setItems}
        >
          {projects.map((project) => (
            <ProjectEditor {...project} key={project.id} />
          ))}
        </DNDContexts>
      </ul>

      <Button
        type="button"
        variant="accent"
        onClick={() => dispatch(addField("projects"))}
      >
        Add Project
      </Button>
    </div>
  );
};
