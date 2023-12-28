"use client";

import { Fragment } from "react";
import Link from "next/link";

import { useTemplateIdParam } from "@/hooks/useTemplateIdParam";
import {
  useProjects,
  useAddProject,
  useRemoveProject,
  useSetProject,
  useSetProjects,
} from "@/store/resume-data-store";

import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/form/section-heading";
import FormInput from "@/components/form/form-input";
import FormTextArea from "@/components/form/form-textarea";
import SkipButton from "@/components/form/skip-button";
import NextButton from "@/components/form/next-button";
import { arrayMove } from "@dnd-kit/sortable";
import DraggableItemWrapper from "@/components/form/draggable-item-wrapper";
import DNDContexts from "@/components/form/dnd-contexts";

export default function Projects() {
  const templateId = useTemplateIdParam();

  return (
    <div className="space-y-2 rounded border p-4">
      <div className="flex flex-wrap gap-2">
        <Button asChild size="sm" variant="secondary">
          <Link href={`/templates/${templateId}/editor/educations`}>
            Previous (Educations)
          </Link>
        </Button>

        <div className="ml-auto flex flex-wrap justify-end gap-2">
          <SkipButton
            sectionName="projects"
            href={`/templates/${templateId}/editor/work-experiences`}
          />

          <NextButton
            label="Next (Work Experiences)"
            href={`/templates/${templateId}/editor/work-experiences`}
            useData={useProjects}
            sectionName="projects"
          />
        </div>
      </div>

      <SectionHeading>Projects</SectionHeading>

      <p className="text-sm">
        <span className="font-bold">Note:</span> Empty field will also be added
        to your resume. So remove the fields you don&apos;t want to show by
        clicking on the trash icon.
      </p>

      <form className="space-y-2" onSubmit={(e) => e.preventDefault()}>
        <p className="text-sm font-bold text-accent">Add your Projects.</p>

        <ProjectsGroup />
      </form>
    </div>
  );
}

function ProjectsGroup() {
  const addProject = useAddProject();
  const projects = useProjects();
  const setProjects = useSetProjects();

  const setItems = (oldIndex: number, newIndex: number) => {
    setProjects(arrayMove(projects, oldIndex, newIndex));
  };

  return (
    <div className="space-y-4">
      <ul className="space-y-2">
        <DNDContexts
          items={projects.map((project) => ({ id: project.id }))}
          setItems={setItems}
        >
          {projects.map((project) => (
            <Fragment key={project.id}>
              <ProjectEditor {...project} />
            </Fragment>
          ))}
        </DNDContexts>
      </ul>

      <Button
        type="button"
        variant="accent"
        size="sm"
        onClick={() => addProject()}
      >
        Add Project
      </Button>
    </div>
  );
}

type ProjectEditorProps = ReturnType<typeof useProjects>[number];

function ProjectEditor(project: ProjectEditorProps) {
  const setProject = useSetProject();
  const removeProject = useRemoveProject();

  return (
    <DraggableItemWrapper
      id={project.id}
      preview={<ProjectPreview {...project} />}
      onRemoveClick={() => removeProject(project.id)}
      removeSrOnlyLabel={`Remove ${project.projectName} project from your resume`}
    >
      <div className="grid items-end gap-2">
        <FormInput
          label="Project Name"
          placeholder="Enter your project name"
          useValue={() => project.projectName}
          useSetValue={() => (value) => {
            setProject({ ...project, projectName: value });
          }}
        />

        <FormTextArea
          label="Project Description"
          placeholder="Enter your project description"
          useValue={() => project.projectDescription}
          useSetValue={() => (value) => {
            setProject({ ...project, projectDescription: value });
          }}
          rows={5}
        />

        <div className="grid grid-cols-2 gap-2">
          <FormInput
            label="Source Code Link"
            placeholder="Enter your source code link"
            useValue={() => project.sourceLink}
            useSetValue={() => (value) => {
              setProject({ ...project, sourceLink: value });
            }}
            className="col-span-2 sm:col-span-1"
          />

          <FormInput
            label="Live Demo Link"
            placeholder="Enter your live demo link"
            useValue={() => project.liveLink}
            useSetValue={() => (value) => {
              setProject({ ...project, liveLink: value });
            }}
            className="col-span-2 sm:col-span-1"
          />
        </div>

        <FormInput
          label="Tags"
          placeholder="Enter your project tags, eg: HTML, CSS, JS"
          useValue={() => project.tags}
          useSetValue={() => (value) => {
            setProject({ ...project, tags: value });
          }}
          className="flex-1"
        />
      </div>
    </DraggableItemWrapper>
  );
}

function ProjectPreview({
  projectName,
  projectDescription,
  liveLink,
  sourceLink,
  tags,
}: ProjectEditorProps) {
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
      <p className="text-accent/60">{projectDescription}</p>
    </div>
  );
}
