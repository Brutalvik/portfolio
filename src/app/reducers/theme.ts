import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  darkMode: true,
  hamburgerIsOpen: false,
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
  },
});

export const { toggleTheme, toggleHamburger } = theme.actions;

export default theme.reducer;
