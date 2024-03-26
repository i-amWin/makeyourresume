import { configureStore } from "@reduxjs/toolkit";

export const makeStore = () =>
  configureStore({
    reducer: {
      // TODO: Add reducers here
    },
  });

export type AppStore = ReturnType<typeof makeStore>;

export type RootState = ReturnType<AppStore["getState"]>;

export type AppDispatch = AppStore["dispatch"];
