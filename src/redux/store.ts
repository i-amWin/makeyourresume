import { configureStore } from "@reduxjs/toolkit";
import SkippedSectionsReducer from "@/redux/features/Skipped Sections/skippedSectionSlice";

export const makeStore = () =>
  configureStore({
    reducer: {
      skippedSections: SkippedSectionsReducer,
    },
  });

export type AppStore = ReturnType<typeof makeStore>;

export type RootState = ReturnType<AppStore["getState"]>;

export type AppDispatch = AppStore["dispatch"];
