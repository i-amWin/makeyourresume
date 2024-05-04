import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "@/redux/store";

type User = {
  id: string;
  name: string;
  email: string;
  resumes: string[];
};

type AuthState = {
  user: User | null;
};

const initialState: AuthState = {
  user: null,
};

const authSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<User | null>) => {
      state.user = action.payload;
    },
  },
});

export const { setUser } = authSlice.actions;

export default authSlice.reducer;

export const selectUser = (state: RootState) => state.auth.user;
