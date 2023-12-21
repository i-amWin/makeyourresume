import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

type SkippedSectionState = {
  sections: {
    socials: boolean;
    skills: boolean;
    interests: boolean;
    educations: boolean;
    projects: boolean;
    workExperiences: boolean;
    personalProfile: boolean;
  };
};

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

type SkippedSectionActions = {
  setSkippedSection: (section: Section, value: boolean) => void;
  resetSkippedSections: () => void;
};

const useSkippedSectionStore = create<
  SkippedSectionState & SkippedSectionActions
>()(
  immer((set) => ({
    sections: initialSkippedSectionState,
    setSkippedSection(section, value) {
      set((state) => {
        state.sections[section] = value;
      });
    },
    resetSkippedSections() {
      set((state) => {
        state.sections = initialSkippedSectionState;
      });
    },
  })),
);

export const useGetSkippedSection = (section: Section) =>
  useSkippedSectionStore((s) => s.sections[section]);

export const useSetSkippedSection = () =>
  useSkippedSectionStore((s) => s.setSkippedSection);

export const useResetSkippedSections = () =>
  useSkippedSectionStore((s) => s.resetSkippedSections);
