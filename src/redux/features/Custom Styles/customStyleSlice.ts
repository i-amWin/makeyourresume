import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "@/redux/store";

import {
  type TemplateId,
  accentColors,
  leftColumnGaps,
  rightColumnGaps,
} from "@/lib/data";

const initialCustomStyleState = {
  accentColors: accentColors,
  leftColumnGaps: leftColumnGaps,
  rightColumnGaps: rightColumnGaps,
};

const customStyleSlice = createSlice({
  name: "customStyles",
  initialState: initialCustomStyleState,
  reducers: {
    setLeftColumnGap: (
      state,
      action: PayloadAction<{ templateId: TemplateId; gap: number }>,
    ) => {
      state.leftColumnGaps[action.payload.templateId] = action.payload.gap;
    },
    setRightColumnGap: (
      state,
      action: PayloadAction<{ templateId: TemplateId; gap: number }>,
    ) => {
      state.rightColumnGaps[action.payload.templateId] = action.payload.gap;
    },
    setAccentColors: (
      state,
      action: PayloadAction<{ color: string; templateId?: TemplateId }>,
    ) => {
      const { color, templateId } = action.payload;

      if (templateId) {
        state.accentColors[templateId] = color;
      } else {
        for (const key of Object.keys(state.accentColors)) {
          state.accentColors[key as TemplateId] = color;
        }
      }
    },
    resetAccentColors: (
      state,
      action: PayloadAction<{ templateId?: TemplateId }>,
    ) => {
      const { templateId } = action.payload;

      if (templateId) {
        state.accentColors[templateId] = accentColors[templateId];
      } else {
        for (const key of Object.keys(state.accentColors)) {
          state.accentColors[key as TemplateId] =
            accentColors[key as TemplateId];
        }
      }
    },
    resetStyles: (
      state,
      action: PayloadAction<{ templateId?: TemplateId }>,
    ) => {
      const { templateId } = action.payload;

      if (templateId) {
        state.leftColumnGaps[templateId] = leftColumnGaps[templateId];
        state.rightColumnGaps[templateId] = rightColumnGaps[templateId];
        state.accentColors[templateId] = accentColors[templateId];
      } else {
        for (const key of Object.keys(state.leftColumnGaps)) {
          state.leftColumnGaps[key as TemplateId] =
            leftColumnGaps[key as TemplateId];

          state.rightColumnGaps[key as TemplateId] =
            rightColumnGaps[key as TemplateId];

          state.accentColors[key as TemplateId] =
            accentColors[key as TemplateId];
        }
      }
    },
  },
});

export const {
  setLeftColumnGap,
  setRightColumnGap,
  setAccentColors,
  resetAccentColors,
  resetStyles,
} = customStyleSlice.actions;

export default customStyleSlice.reducer;

// Custom selector
export const selectAccentColor = (state: RootState, templateId: TemplateId) =>
  state.customStyles.accentColors[templateId];

export const selectLeftColumnGap = (state: RootState, templateId: TemplateId) =>
  state.customStyles.leftColumnGaps[templateId];

export const selectRightColumnGap = (
  state: RootState,
  templateId: TemplateId,
) => state.customStyles.rightColumnGaps[templateId];
