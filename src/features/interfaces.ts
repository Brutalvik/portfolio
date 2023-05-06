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
