import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "@/redux/store";

const initialSkippedSectionState = {
  socials: false,
  skills: false,
  interests: false,
  educations: false,
  projects: false,
  workExperiences: false,
  personalProfile: false,
};

export type Section = keyof typeof initialSkippedSectionState;

const skippedSectionSlice = createSlice({
  name: "skippedSections",
  initialState: initialSkippedSectionState,
  reducers: {
    toggleSkippedSection: (
      state,
      action: PayloadAction<{ section: Section; value: boolean }>,
    ) => {
      state[action.payload.section] = action.payload.value;
    },
    resetSkippedSections: (state) => {
      for (const key of Object.keys(state)) {
        state[key as Section] = false;
      }
    },
  },
});

export const { toggleSkippedSection, resetSkippedSections } =
  skippedSectionSlice.actions;

export default skippedSectionSlice.reducer;

// Custom selector
export const selectSkippedSection = (state: RootState, section: Section) =>
  state.skippedSections[section];
