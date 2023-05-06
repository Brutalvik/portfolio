import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import {
  fileDownloadStatus,
  fileDownloadSuccess,
  fileDownloadFailed,
} from "app/reducers/file";
import { FileDownloadParams } from "features/interfaces";

const URI = `${process.env.REACT_APP_URI}${process.env.REACT_APP_FILE_DOWNLOAD_URI}`;

export const fileDownload = createAsyncThunk(
  "download",
  async ({ id, dispatch }: FileDownloadParams) => {
    try {
      dispatch(fileDownloadStatus(true));
      const { data } = await axios.get(`${URI}${id}`, {
        responseType: "arraybuffer",
      });
      const url = URL.createObjectURL(
        new Blob([data], { type: "application/pdf" })
      );
      dispatch(fileDownloadSuccess(url));
      dispatch(fileDownloadStatus(false));
      return url;
    } catch (err) {
      dispatch(fileDownloadFailed({ error: true, message: "Download Failed" }));
      dispatch(fileDownloadStatus(false));
    }
  }
);
