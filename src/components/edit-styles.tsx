"use client";
import { Button } from "./ui/button";
import {
  useLeftColumnGap,
  useSetLeftColumnGap,
  useRightColumnGap,
  useSetRightColumnGap,
  useResetStyles,
} from "@/store/custom-styles-store";
import { useTemplateIdParam } from "@/hooks/useTemplateIdParam";
import { Slider } from "./ui/slider";
import { Label } from "./ui/label";
import { TemplateId } from "@/lib/data";
import EditAccentColors from "./edit-accent-colors";
import { cn } from "@/utils/cn";

interface EditStylesProps {
  className?: string;
}

export default function EditStyles({ className }: EditStylesProps) {
  const templateId = useTemplateIdParam() as TemplateId;

  const leftColumnGap = useLeftColumnGap(templateId);
  const setLeftColumnGap = useSetLeftColumnGap();

  const rightColumnGap = useRightColumnGap(templateId);
  const setRightColumnGap = useSetRightColumnGap();

  const resetStyles = useResetStyles();

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
          onValueChange={(values) => setLeftColumnGap(templateId, values[0])}
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="right-column-gap-slider">Right Column Gap</Label>
        <Slider
          id="right-column-gap-slider"
          value={[rightColumnGap]}
          max={100}
          min={5}
          onValueChange={(values) => setRightColumnGap(templateId, values[0])}
        />
      </div>

      <Button
        className="ml-auto mt-2 sm:mt-4"
        variant="accent"
        onClick={() => resetStyles(templateId)}
      >
        Reset Styles
      </Button>
    </div>
  );
}

{
  /* <Popover>
<PopoverTrigger asChild>
  <Button
    className="space-x-2 hover:opacity-90"
    style={{
      backgroundColor: accentColor,
    }}
  >
    <span>Edit Styles</span> <Palette size={18} />
  </Button>
</PopoverTrigger>
<PopoverContent className="flex max-w-min flex-col gap-4">
  <div className="space-y-2">
    <Label htmlFor="accent-color-picker">Accent Color</Label>
    <HexColorPicker
      id="accent-color-picker"
      color={accentColor}
      onChange={handleColorChange}
    />
  </div>

  <div className="space-y-2">
    <Label htmlFor="left-column-gap-slider">Left Column Gap</Label>
    <Slider
      id="left-column-gap-slider"
      value={[leftColumnGap]}
      max={50}
      min={5}
      onValueChange={(values) => setLeftColumnGap(templateId, values[0])}
    />
  </div>

  <div className="space-y-2">
    <Label htmlFor="right-column-gap-slider">Right Column Gap</Label>
    <Slider
      id="right-column-gap-slider"
      value={[rightColumnGap]}
      max={50}
      min={5}
      onValueChange={(values) => setRightColumnGap(templateId, values[0])}
    />
  </div>

  <Button className="ml-auto" onClick={() => resetStyles(templateId)}>
    Reset Styles
  </Button>
</PopoverContent>
</Popover> */
}
