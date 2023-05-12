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
  repeat?: number;
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

export interface ProgresSkillsInterface {
  id: number;
  title: string;
  width: string;
}

export interface CircularSkillsInterface {
  id: number;
  title: string;
  percentage: number;
}

export interface TimelineInterface {
  data: any;
}

export interface TimelineDataInterface {
  id: number;
  icon: any;
  date: string;
  position: string;
  location: string;
  content?: string;
}
9;
export interface InformationInterface {
  isopen: boolean;
  onclose: () => void;
  title?: string;
  content?: any;
  onclick?: () => void;
  secondaryOnClick?: () => void;
  buttonName?: string;
  btnColorScheme?: string;
  secondaryButtonName?: string;
  variant?: string;
  isDisabled?: boolean;
}

export interface IRecaptchaProps {
  onChange?: (response: string | null) => void;
}

export interface LoginDataInterface {
  firstName?: string;
  lastName?: string;
  id?: string;
  isLoggedin?: boolean;
}

export interface AlertDialogeInterface {
  onClose?: any;
  isOpen?: any;
  cancelRef?: any;
  header: string;
  body: string;
  onCancel?: any;
}
