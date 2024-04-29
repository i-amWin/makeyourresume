import DraggableItemWrapper from "@/components/form/draggable-item-wrapper";
import { TextInput } from "@/components/form/form-input";
import {
  WorkExperience,
  addWorkResponsibility,
  removeField,
  setField,
  setWorkResponsibilities,
} from "@/redux/features/Resume Data/resumeDataSlice";
import { useAppDispatch } from "@/redux/hooks";
import { arrayMove } from "@dnd-kit/sortable";
import { WorkExperiencePreview } from "./work-experience-preview";
import { Label } from "@radix-ui/react-label";
import DNDContexts from "@/components/form/dnd-contexts";
import { WorkResponsibilityEditor } from "./work-responsibility-editor";
import { Button } from "@/components/ui/button";
import { memo } from "react";

type WorkExperienceEditorProps = WorkExperience;

export const WorkExperienceEditor = memo(
  (workExperience: WorkExperienceEditorProps) => {
    const dispatch = useAppDispatch();

    const setItems = (oldIndex: number, newIndex: number) => {
      dispatch(
        setWorkResponsibilities({
          workExperienceId: workExperience.id,
          workResponsibilities: arrayMove(
            workExperience.workResponsibilities,
            oldIndex,
            newIndex,
          ),
        }),
      );
    };

    const removeWorkExperience = (id: string) => {
      dispatch(removeField({ fieldName: "workExperiences", id }));
    };

    const setWorkExperience = (workExperience: WorkExperience) => {
      dispatch(
        setField({
          fieldName: "workExperiences",
          value: workExperience,
        }),
      );
    };

    return (
      <DraggableItemWrapper
        id={workExperience.id}
        preview={<WorkExperiencePreview {...workExperience} />}
        onRemoveClick={() => removeWorkExperience(workExperience.id)}
        removeSrOnlyLabel={`Remove ${workExperience.companyName} from your resume`}
      >
        <div className="grid items-end gap-2">
          <TextInput
            label="Company Name"
            placeholder="Enter your company name"
            value={workExperience.companyName}
            setValue={(value) => {
              setWorkExperience({ ...workExperience, companyName: value });
            }}
          />

          <div className="grid grid-cols-2 gap-2">
            <TextInput
              label="Job Title"
              placeholder="Enter your job title"
              value={workExperience.jobTitle}
              setValue={(value) => {
                setWorkExperience({ ...workExperience, jobTitle: value });
              }}
              className="col-span-2 sm:col-span-1"
            />

            <TextInput
              label="Location"
              placeholder="Enter the job location"
              value={workExperience.location}
              setValue={(value) => {
                setWorkExperience({ ...workExperience, location: value });
              }}
              className="col-span-2 sm:col-span-1"
            />
          </div>

          <div className="grid grid-cols-2 gap-2">
            <TextInput
              label="Joining Date"
              placeholder="Enter the joining date"
              value={workExperience.joiningDate}
              setValue={(value) => {
                setWorkExperience({ ...workExperience, joiningDate: value });
              }}
              className="col-span-2 sm:col-span-1"
            />

            <TextInput
              label="Leaving Date"
              placeholder="Enter the leaving date"
              value={workExperience.leavingDate}
              setValue={(value) => {
                setWorkExperience({ ...workExperience, leavingDate: value });
              }}
              className="col-span-2 sm:col-span-1"
            />
          </div>

          <div className="space-y-4">
            <div className="space-y-1">
              <Label>Work Responsibilities</Label>
              <ul className="space-y-2">
                <DNDContexts
                  items={workExperience.workResponsibilities.map(
                    (workResponsibility) => ({ id: workResponsibility.id }),
                  )}
                  setItems={setItems}
                >
                  {workExperience.workResponsibilities.map(
                    (workResponsibility) => (
                      <WorkResponsibilityEditor
                        key={workResponsibility.id}
                        id={workExperience.id}
                        workResponsibility={workResponsibility}
                      />
                    ),
                  )}
                </DNDContexts>
              </ul>
            </div>

            <Button
              type="button"
              variant="accent"
              size="sm"
              onClick={() => dispatch(addWorkResponsibility(workExperience.id))}
            >
              Add Work Responsibility
            </Button>
          </div>
        </div>
      </DraggableItemWrapper>
    );
  },
);

WorkExperienceEditor.displayName = "WorkExperienceEditor";
