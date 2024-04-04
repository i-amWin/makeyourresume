import { configureStore } from "@reduxjs/toolkit";
import SkippedSectionsReducer from "@/redux/features/Skipped Sections/skippedSectionSlice";
import CustomStyleReducer from "@/redux/features/Custom Styles/customStyleSlice";
import ResumeDataReducer from "@/redux/features/Resume Data/resumeDataSlice";

export const makeStore = () =>
  configureStore({
    reducer: {
      resumeData: ResumeDataReducer,
      skippedSections: SkippedSectionsReducer,
      customStyles: CustomStyleReducer,
    },
  });

export type AppStore = ReturnType<typeof makeStore>;

export type RootState = ReturnType<AppStore["getState"]>;

export type AppDispatch = AppStore["dispatch"];
