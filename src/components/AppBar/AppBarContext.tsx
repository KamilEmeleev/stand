import { createContext, FC, ReactNode } from 'react';

import {
  useBoolean,
  type UseBooleanControllers,
} from '@ozen-ui/kit/useBoolean';

export type UseBooleanReturnValue = [boolean, Partial<UseBooleanControllers>];

export type AppBarContext = [UseBooleanReturnValue, UseBooleanReturnValue];

export const AppBarContext = createContext<AppBarContext>([
  [false, {}],
  [false, {}],
]);

export const AppBarProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const openState = useBoolean(false);
  const expandState = useBoolean(true);

  return (
    <AppBarContext.Provider value={[openState, expandState]}>
      {children}
    </AppBarContext.Provider>
  );
};
