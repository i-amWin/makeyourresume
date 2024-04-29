import DraggableItemWrapper from "@/components/form/draggable-item-wrapper";
import { Textarea } from "@/components/ui/textarea";
import {
  WorkResponsibility,
  removeWorkResponsibilityField,
  setWorkResponsibilityField,
} from "@/redux/features/Resume Data/resumeDataSlice";
import { useAppDispatch } from "@/redux/hooks";

type WorkResponsibilityEditorProps = {
  id: string;
  workResponsibility: WorkResponsibility;
};

export const WorkResponsibilityEditor = ({
  id,
  workResponsibility,
}: WorkResponsibilityEditorProps) => {
  const dispatch = useAppDispatch();

  const setWorkResponsibility = (
    id: string,
    newWorkResponsibility: WorkResponsibility,
  ) => {
    dispatch(
      setWorkResponsibilityField({
        workExperienceId: id,
        workResponsibility: newWorkResponsibility,
      }),
    );
  };

  const removeWorkResponsibility = (
    id: string,
    workResponsibilityId: string,
  ) => {
    console.log({ id, workResponsibilityId });
    dispatch(
      removeWorkResponsibilityField({
        workExperienceId: id,
        workResponsibilityId,
      }),
    );
  };

  return (
    <DraggableItemWrapper
      id={workResponsibility.id}
      preview={
        <div className="flex min-h-full items-center text-sm font-medium text-accent">
          <p>{workResponsibility.responsibility}</p>
        </div>
      }
      onRemoveClick={() => removeWorkResponsibility(id, workResponsibility.id)}
      removeSrOnlyLabel={`Remove ${workResponsibility.responsibility} from your resume`}
    >
      <Textarea
        placeholder="Enter your work responsibility"
        value={workResponsibility.responsibility}
        onChange={(e) =>
          setWorkResponsibility(id, {
            ...workResponsibility,
            responsibility: e.target.value,
          })
        }
      />
    </DraggableItemWrapper>
  );
};
