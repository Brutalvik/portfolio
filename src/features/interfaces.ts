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
  value?: string;
  formLabel?: string;
  tooltipLabel?: string;
  type?: string;
  size?: string;
  variant?: string;
  id?: string;
  errorMessage?: string;
  onChange?: any;
  onBlur?: any;
  isInvalid?: any;
  touched?: boolean;
  name?: string;
}

export interface ProgressBarInterface {
  title: string;
  width: string;
}

export interface CircularProgressInterface {
  title: string;
  percentage: number;
}
