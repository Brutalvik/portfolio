import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState = {
  darkMode: true,
  hamburgerIsOpen: false,
  registerModal: false,
  loginModal: false,
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
    toggleRegisterModal: (state, { payload }: PayloadAction<boolean>) => {
      state.registerModal = payload;
    },
    toggleLoginModal: (state, { payload }: PayloadAction<boolean>) => {
      state.loginModal = payload;
    },
  },
});

export const {
  toggleTheme,
  toggleHamburger,
  toggleRegisterModal,
  toggleLoginModal,
} = theme.actions;

export default theme.reducer;
