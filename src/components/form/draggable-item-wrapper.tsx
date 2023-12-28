import { ChevronUp, GripVertical, Trash2 } from "lucide-react";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { useState } from "react";

interface DraggableItemWrapperProps {
  id: string;
  preview: React.ReactNode;
  children: React.ReactNode;
  onRemoveClick: () => void;
  removeSrOnlyLabel: string;
}

export default function DraggableItemWrapper({
  id,
  preview,
  children,
  onRemoveClick,
  removeSrOnlyLabel,
}: DraggableItemWrapperProps) {
  const { attributes, listeners, transform, transition, setNodeRef } =
    useSortable({ id });

  const [isShowing, setIsShowing] = useState(true);

  const style = {
    transition,
    transform: CSS.Transform.toString(transform),
  };

  return (
    <li ref={setNodeRef} style={style} className="space-y-2 rounded border p-3">
      <div className="flex  gap-2">
        <button
          className="mb-auto cursor-grab touch-none overflow-hidden text-accent/80 transition-colors hover:text-accent active:cursor-grabbing"
          type="button"
          {...attributes}
          {...listeners}
        >
          <GripVertical size={22} className="-ml-1" />
          <span className="sr-only">Drag to reorder</span>
        </button>

        <div className="flex-1">{preview}</div>

        <button
          type="button"
          className="mb-auto text-accent"
          onClick={() => setIsShowing((prev) => !prev)}
        >
          <ChevronUp
            size={24}
            className={`-translate-y-0.5 transition-transform ${
              isShowing ? "rotate-0" : "rotate-180"
            }`}
          />
        </button>
        <button
          type="button"
          className="mb-auto text-destructive"
          onClick={onRemoveClick}
        >
          <Trash2 size={18} />
          <span className="sr-only">{removeSrOnlyLabel}</span>
        </button>
      </div>
      {isShowing && children}
    </li>
  );
}
