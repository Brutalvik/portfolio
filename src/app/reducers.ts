import { combineReducers } from "@reduxjs/toolkit";
import theme from "./reducers/theme";
import file from "./reducers/file";
import register from "./reducers/register";
import login from "./reducers/login";

export const rootReducers = combineReducers({
  theme: theme,
  file: file,
  register: register,
  login: login,
});
