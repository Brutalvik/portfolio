import { Dispatch } from "@reduxjs/toolkit";

export interface NameInterface {
  childName?: string;
  className?: any;
}

export interface FrameInterface {
  child?: any;
}

export interface TypingInterface {
  sequence?: any;
}

export interface FileDownloadParams {
  dispatch: Dispatch;
  id?: any;
}

export interface CustomInputInterface {
  formLabel?: string;
  tooltipLabel?: string;
  type?: string;
  size?: string;
  variant?: string;
  id?: string;
  errorMessage?: string;
}
