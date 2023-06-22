export enum MessageType {
  Success = 'success',
  Danger = 'danger',
  Warning = 'warning',
  Info = 'info'
}

export interface ToastOptions {
  duration?: number;
  title: string;
  subtitle?: string;
}

export interface Toast extends ToastOptions {
  type: MessageType;
}

export interface ToastsContextValue {
  success: (options: ToastOptions) => void;
  danger: (options: ToastOptions) => void;
  warning: (options: ToastOptions) => void;
  info: (options: ToastOptions) => void;
}
