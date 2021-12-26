
import { InjectionToken } from "@angular/core";
import { Observer } from "rxjs";

export type Toast<I> = {
  content: I;
  observer: Observer<Toast<I>>;
  config: NotifierConfiguration & ToastConfig;
}

export type ToastType = 'success' | 'warning' | 'error';

export type ToastConfig = {
  type: ToastType;
}

export type NotifierConfiguration = {
  autoClose: boolean;
  autoCloseTime: number;
}

export const TOAST_CONFIG = new InjectionToken<NotifierConfiguration>('TOAST_CONFIG');
