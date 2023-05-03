import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import theme from "./reducers/theme";

export const store = configureStore({
  reducer: {
    theme: theme,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
