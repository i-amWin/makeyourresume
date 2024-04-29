import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";

import SkippedSectionsReducer from "@/redux/features/Skipped Sections/skippedSectionSlice";
import CustomStyleReducer from "@/redux/features/Custom Styles/customStyleSlice";
import ResumeDataReducer from "@/redux/features/Resume Data/resumeDataSlice";

const persistConfig = {
  key: "root",
  storage,
};

const rootReducer = combineReducers({
  resumeData: ResumeDataReducer,
  skippedSections: SkippedSectionsReducer,
  customStyles: CustomStyleReducer,
});

const makeConfiguredStore = () =>
  configureStore({
    reducer: rootReducer,
  });

export const makeStore = () => {
  const isServer = typeof window === "undefined";

  if (isServer) {
    return makeConfiguredStore();
  }

  const persistedReducer = persistReducer(persistConfig, rootReducer);

  const store = configureStore({
    reducer: persistedReducer,
  });

  persistStore(store);

  return store;
};

export type AppStore = ReturnType<typeof makeStore>;

export type RootState = ReturnType<AppStore["getState"]>;

export type AppDispatch = AppStore["dispatch"];
