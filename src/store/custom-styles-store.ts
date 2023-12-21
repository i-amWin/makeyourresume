import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

import {
  TemplateId,
  accentColors,
  leftColumnGaps,
  rightColumnGaps,
} from "@/lib/data";

type CustomStylesState = {
  accentColors: Record<TemplateId, string>;
  leftColumnGaps: Record<TemplateId, number>;
  rightColumnGaps: Record<TemplateId, number>;
};

type CustomStylesActions = {
  setLeftColumnGap: (templateId: TemplateId, gap: number) => void;
  setRightColumnGap: (templateId: TemplateId, gap: number) => void;
  resetStyles: (templateId?: TemplateId) => void;
  setAccentColors: (color: string, templateId?: TemplateId) => void;
  resetAccentColors: (templateId?: TemplateId) => void;
};

const useCustomStylesStore = create<CustomStylesState & CustomStylesActions>()(
  immer((set) => ({
    accentColors,
    leftColumnGaps,
    rightColumnGaps,

    // Actions
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
        if (templateId) {
          state.leftColumnGaps[templateId] = leftColumnGaps[templateId];
          state.rightColumnGaps[templateId] = rightColumnGaps[templateId];
          state.accentColors[templateId] = accentColors[templateId];
          return;
        } else {
          Object.keys(state.leftColumnGaps).forEach((templateId) => {
            state.leftColumnGaps[templateId as TemplateId] =
              leftColumnGaps[templateId as TemplateId];
            state.rightColumnGaps[templateId as TemplateId] =
              rightColumnGaps[templateId as TemplateId];
            state.accentColors[templateId as TemplateId] =
              accentColors[templateId as TemplateId];
          });
        }
      });
    },
    setAccentColors(color, templateId) {
      set((state) => {
        if (templateId) {
          state.accentColors[templateId] = color;
        } else {
          Object.keys(state.accentColors).forEach((templateId) => {
            state.accentColors[templateId as TemplateId] = color;
          });
        }
      });
    },
    resetAccentColors(templateId) {
      set((state) => {
        if (templateId) {
          state.accentColors[templateId] = accentColors[templateId];
        } else {
          Object.keys(state.accentColors).forEach((templateId) => {
            state.accentColors[templateId as TemplateId] =
              accentColors[templateId as TemplateId];
          });
        }
      });
    },
  })),
);

export const useAccentColor = (templateId: TemplateId) => {
  return useCustomStylesStore((state) => state.accentColors[templateId]);
};

export const useLeftColumnGap = (templateId: TemplateId) => {
  return useCustomStylesStore((state) => state.leftColumnGaps[templateId]);
};

export const useRightColumnGap = (templateId: TemplateId) => {
  return useCustomStylesStore((state) => state.rightColumnGaps[templateId]);
};

export const useSetLeftColumnGap = () =>
  useCustomStylesStore((state) => state.setLeftColumnGap);

export const useSetRightColumnGap = () =>
  useCustomStylesStore((state) => state.setRightColumnGap);

export const useResetStyles = () =>
  useCustomStylesStore((state) => state.resetStyles);

export const useSetAccentColors = () =>
  useCustomStylesStore((state) => state.setAccentColors);

export const useResetAccentColors = () =>
  useCustomStylesStore((state) => state.resetAccentColors);
