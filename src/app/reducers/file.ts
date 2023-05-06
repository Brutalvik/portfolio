import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState = {
  file: null,
  isDownloading: false,
  error: false,
  message: null,
};

const file = createSlice({
  name: "theme",
  initialState,
  reducers: {
    fileDownloadSuccess: (state, { payload }: PayloadAction<any>) => {
      state.file = payload;
    },
    fileDownloadStatus: (state, { payload }: PayloadAction<boolean>) => {
      state.isDownloading = payload;
    },
    fileDownloadFailed: (state, { payload }: PayloadAction<any>) => {
      state.error = payload.error;
      state.message = payload.message;
    },
  },
});

export const { fileDownloadSuccess, fileDownloadStatus, fileDownloadFailed } =
  file.actions;

export default file.reducer;
