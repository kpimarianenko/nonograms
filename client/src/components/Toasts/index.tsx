import { createContext, PropsWithChildren, useCallback, useState } from 'react';

import ToastComponent from './Toast';
import { MessageType, Toast, ToastOptions, ToastsContextValue } from './types';

export const ToastsContext = createContext<ToastsContextValue>({
  success: () => {},
  danger: () => {},
  warning: () => {},
  info: () => {}
});

const ToastsProvider = ({ children }: PropsWithChildren) => {
  const [queue, setQueue] = useState<Array<Toast>>([]);

  const currentToast = queue[0];

  const show = (type: MessageType, options: ToastOptions) =>
    setQueue(q => [...q, { type, ...options }]);

  const shift = useCallback(() => setQueue(q => q.slice(1)), []);

  const success = (options: ToastOptions) => show(MessageType.Success, options);

  const danger = (options: ToastOptions) => show(MessageType.Danger, options);

  const warning = (options: ToastOptions) => show(MessageType.Warning, options);

  const info = (options: ToastOptions) => show(MessageType.Info, options);

  return (
    <ToastsContext.Provider value={{ success, danger, warning, info }}>
      {currentToast && <ToastComponent toast={currentToast} shift={shift} />}
      {children}
    </ToastsContext.Provider>
  );
};

export default ToastsProvider;
