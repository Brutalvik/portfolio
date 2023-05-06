import { combineReducers } from "@reduxjs/toolkit";
import theme from "./reducers/theme";
import file from "./reducers/file";

export const rootReducers = combineReducers({
  theme: theme,
  file: file,
});
