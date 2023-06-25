import { RefObject } from 'react';

import { ToastHandle, ToastOptions } from '@components/Toasts/types';

export default class ToastService {
  static ref: RefObject<ToastHandle>;

  static init(ref: RefObject<ToastHandle>) {
    this.ref = ref;
  }

  static error(options: ToastOptions) {
    this.ref.current?.error(options);
  }

  static warning(options: ToastOptions) {
    this.ref.current?.warning(options);
  }

  static success(options: ToastOptions) {
    this.ref.current?.success(options);
  }

  static info(options: ToastOptions) {
    this.ref.current?.info(options);
  }
}
