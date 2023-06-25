import {
  forwardRef,
  ForwardRefRenderFunction,
  PropsWithChildren,
  useCallback,
  useImperativeHandle,
  useState
} from 'react';

import ToastComponent from './Toast';
import { MessageType, Toast, ToastHandle, ToastOptions } from './types';

const ToastProvider: ForwardRefRenderFunction<ToastHandle, PropsWithChildren> = (
  { children },
  ref
) => {
  const [queue, setQueue] = useState<Array<Toast>>([]);

  const currentToast = queue[0];

  const show = (type: MessageType, options: ToastOptions) =>
    setQueue(q => [...q, { type, ...options }]);

  const shift = () => setQueue(q => q.slice(1));

  const success = useCallback((options: ToastOptions) => show(MessageType.Success, options), []);

  const error = useCallback((options: ToastOptions) => show(MessageType.Danger, options), []);

  const warning = useCallback((options: ToastOptions) => show(MessageType.Warning, options), []);

  const info = useCallback((options: ToastOptions) => show(MessageType.Info, options), []);

  useImperativeHandle(
    ref,
    () => ({
      error,
      success,
      warning,
      info
    }),
    [error, success, warning, info]
  );

  return (
    <>
      {currentToast && <ToastComponent toast={currentToast} shift={shift} />}
      {children}
    </>
  );
};

export default forwardRef(ToastProvider);
