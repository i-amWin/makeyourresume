import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

import {
  TemplateId,
  accentColors,
  leftColumnGaps,
  rightColumnGaps,
} from "@/lib/data";
import { useTemplateIdParam } from "@/hooks/useTemplateIdParam";

type CustomStylesState = {
  accentColors: Record<string, string>;
  leftColumnGaps: Record<string, number>;
  rightColumnGaps: Record<string, number>;
};

type CustomStylesActions = {
  setAccentColor: (templateId: string, color: string) => void;
  setLeftColumnGap: (templateId: string, gap: number) => void;
  setRightColumnGap: (templateId: string, gap: number) => void;
  resetStyles: (TemplateId: string) => void;
};

const useCustomStylesStore = create<CustomStylesState & CustomStylesActions>()(
  immer((set) => ({
    accentColors,
    leftColumnGaps,
    rightColumnGaps,

    //
    setAccentColor: (templateId, color) => {
      set((state) => {
        state.accentColors[templateId] = color;
      });
    },
    setLeftColumnGap(templateId, gap) {
      set((state) => {
        state.leftColumnGaps[templateId] = gap;
      });
    },
    setRightColumnGap(templateId, gap) {
      set((state) => {
        state.rightColumnGaps[templateId] = gap;
      });
    },
    resetStyles(templateId) {
      set((state) => {
        state.accentColors[templateId] = accentColors[templateId];
        state.leftColumnGaps[templateId] = leftColumnGaps[templateId];
        state.rightColumnGaps[templateId] = rightColumnGaps[templateId];
      });
    },
  })),
);

export const useAccentColor = () => {
  const templateId = useTemplateIdParam();
  return useCustomStylesStore((state) => state.accentColors[templateId]);
};

export const useLeftColumnGap = () => {
  const templateId = useTemplateIdParam();
  return useCustomStylesStore((state) => state.leftColumnGaps[templateId]);
};

export const useRightColumnGap = () => {
  const templateId = useTemplateIdParam();
  return useCustomStylesStore((state) => state.rightColumnGaps[templateId]);
};

export const useSetAccentColor = () =>
  useCustomStylesStore((state) => state.setAccentColor);

export const useSetLeftColumnGap = () =>
  useCustomStylesStore((state) => state.setLeftColumnGap);

export const useSetRightColumnGap = () =>
  useCustomStylesStore((state) => state.setRightColumnGap);

export const useResetStyles = () =>
  useCustomStylesStore((state) => state.resetStyles);
