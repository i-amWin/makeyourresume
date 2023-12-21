"use client";

import {
  useResetAccentColors,
  useSetAccentColors,
} from "@/store/custom-styles-store";
import { useState } from "react";
import { HexColorInput, HexColorPicker } from "react-colorful";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { TemplateId } from "@/lib/data";

const predefinedColors = ["#cd6060", "#00856d", "#006e85", "#730779"];

interface EditAccentColorsProps {
  templateId?: TemplateId;
}

export default function EditAccentColors({
  templateId,
}: EditAccentColorsProps) {
  const setAccentColors = useSetAccentColors();
  const resetAccentColors = useResetAccentColors();

  const [customColor, setCustomColor] = useState("#0fa560");

  return (
    <div className="flex flex-wrap items-center gap-2">
      <ul className="flex flex-wrap gap-2">
        <li>
          <button
            type="button"
            className="relative h-10 w-10 overflow-hidden rounded border-2 border-accent/30"
            onClick={() => resetAccentColors(templateId)}
          >
            <span className="sr-only">Reset Colors</span>
            <span className="absolute -left-[25%] inline-block h-[2px] w-14 rotate-45 bg-accent/30"></span>
          </button>
        </li>
        {predefinedColors.map((color) => (
          <li key={color}>
            <button
              type="button"
              className="h-10 w-10 rounded"
              style={{ backgroundColor: color }}
              onClick={() => setAccentColors(color, templateId)}
            >
              <span className="sr-only">Set {color} color</span>
            </button>
          </li>
        ))}
      </ul>

      <div className="flex items-center gap-2">
        <p className="text-base font-medium">Custom:</p>
        <div className="flex items-center gap-2 rounded border-2 border-accent/30 p-1">
          <Popover>
            <PopoverTrigger asChild>
              <button
                type="button"
                className="h-8 w-8 rounded"
                style={{ backgroundColor: customColor }}
              >
                <span className="sr-only">Select custom color</span>
              </button>
            </PopoverTrigger>
            <PopoverContent asChild className="p-0">
              <HexColorPicker
                color={customColor}
                onChange={(color) => {
                  setCustomColor(color);
                  setAccentColors(color);
                }}
              />
            </PopoverContent>
          </Popover>

          <div>
            <span className="font-bold">#</span>
            <HexColorInput
              className="w-20 p-1"
              color={customColor}
              onChange={(color) => {
                setCustomColor(color);
                setAccentColors(color);
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
