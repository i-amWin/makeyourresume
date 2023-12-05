"use client";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "./ui/button";
import { Palette } from "lucide-react";
import { HexColorPicker } from "react-colorful";
import {
  useAccentColor,
  useSetAccentColor,
  useLeftColumnGap,
  useSetLeftColumnGap,
  useRightColumnGap,
  useSetRightColumnGap,
  useResetStyles,
} from "@/store/custom-styles-store";
import { useTemplateIdParam } from "@/hooks/useTemplateIdParam";
import { Slider } from "./ui/slider";
import { Label } from "./ui/label";

export default function EditStyles() {
  const templateId = useTemplateIdParam();

  const accentColor = useAccentColor();
  const setAccentColor = useSetAccentColor();

  const leftColumnGap = useLeftColumnGap();
  const setLeftColumnGap = useSetLeftColumnGap();

  const rightColumnGap = useRightColumnGap();
  const setRightColumnGap = useSetRightColumnGap();

  const resetStyles = useResetStyles();

  const handleColorChange = (color: string) => {
    setAccentColor(templateId, color);
  };

  return (
    <Popover>
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
    </Popover>
  );
}
