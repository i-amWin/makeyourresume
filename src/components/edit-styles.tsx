"use client";

import { cn } from "@/utils/cn";

import { TemplateId } from "@/lib/data";

import { useTemplateIdParam } from "@/hooks/useTemplateIdParam";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";

import {
  resetStyles,
  selectLeftColumnGap,
  selectRightColumnGap,
  setLeftColumnGap,
  setRightColumnGap,
} from "@/redux/features/Custom Styles/customStyleSlice";

import { Button } from "./ui/button";
import { Slider } from "./ui/slider";
import { Label } from "./ui/label";
import EditAccentColors from "./edit-accent-colors";

interface EditStylesProps {
  className?: string;
}

export default function EditStyles({ className }: EditStylesProps) {
  const templateId = useTemplateIdParam() as TemplateId;

  const leftColumnGap = useAppSelector((state) =>
    selectLeftColumnGap(state, templateId),
  );
  const rightColumnGap = useAppSelector((state) =>
    selectRightColumnGap(state, templateId),
  );

  const dispatch = useAppDispatch();

  return (
    <div className={cn("flex flex-col gap-2 sm:gap-4", className)}>
      <EditAccentColors templateId={templateId} />

      <div className="space-y-2">
        <Label htmlFor="left-column-gap-slider">Left Column Gap</Label>
        <Slider
          id="left-column-gap-slider"
          value={[leftColumnGap]}
          max={100}
          min={5}
          onValueChange={(values) =>
            dispatch(setLeftColumnGap({ templateId, gap: values[0] }))
          }
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="right-column-gap-slider">Right Column Gap</Label>
        <Slider
          id="right-column-gap-slider"
          value={[rightColumnGap]}
          max={100}
          min={5}
          onValueChange={(values) =>
            dispatch(setRightColumnGap({ templateId, gap: values[0] }))
          }
        />
      </div>

      <Button
        className="ml-auto mt-2 sm:mt-4"
        variant="accent"
        onClick={() => dispatch(resetStyles({ templateId }))}
      >
        Reset Styles
      </Button>
    </div>
  );
}
