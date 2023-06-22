import { useContext } from 'react';

import { ToastsContext } from '@components/Toasts';

const useToasts = () => useContext(ToastsContext);

export default useToasts;
