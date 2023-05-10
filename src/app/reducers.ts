import { combineReducers } from "@reduxjs/toolkit";
import theme from "./reducers/theme";
import file from "./reducers/file";
import register from "./reducers/register";

export const rootReducers = combineReducers({
  theme: theme,
  file: file,
  register: register,
});
