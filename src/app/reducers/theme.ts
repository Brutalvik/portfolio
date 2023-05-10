import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState = {
  darkMode: true,
  hamburgerIsOpen: false,
  registerModal: false,
};

const theme = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.darkMode = !state.darkMode;
    },
    toggleHamburger: (state) => {
      state.hamburgerIsOpen = !state.hamburgerIsOpen;
    },
    toggleRegiserModal: (state, { payload }: PayloadAction<boolean>) => {
      state.registerModal = payload;
    },
  },
});

export const { toggleTheme, toggleHamburger, toggleRegiserModal } =
  theme.actions;

export default theme.reducer;
