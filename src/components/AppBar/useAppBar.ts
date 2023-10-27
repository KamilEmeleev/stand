import { useContext } from 'react';

import { AppBarContext } from './AppBarContext.tsx';

export const useAppBar = () => {
  return useContext(AppBarContext);
};
