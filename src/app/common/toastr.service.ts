import { InjectionToken } from "@angular/core";

declare let toastr: any

export const TOASTR_TOKEN = new InjectionToken<Toastr>('toastr')

export interface Toastr {
  success (msg: string, title?: string): void;
  info (msg: string, title?: string): void;
  warning (msg: string, title?: string): void;
  error (msg: string, title?: string): void;
}
