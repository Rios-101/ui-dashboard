/**
 * Auth slice — manages the authenticated user's profile in Redux.
 *
 * NOTE: The access token is stored in cookies (via cookies-next), NOT in Redux.
 * Redux only holds the user profile object for UI rendering purposes.
 */
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { User } from "@/src/types/user";

interface AuthState {
  user: User | null;
}

const initialState: AuthState = {
  user: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser(state, action: PayloadAction<User>) {
      state.user = action.payload;
    },
    logout(state) {
      state.user = null;
    },
  },
});

export const { setUser, logout } = authSlice.actions;
export default authSlice.reducer;
