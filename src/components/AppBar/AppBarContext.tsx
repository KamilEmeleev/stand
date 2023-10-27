import { createContext, FC, ReactNode } from 'react';

import { useBoolean } from '@ozen-ui/kit/useBoolean';

// TODO: выгрузить типы из ozen-ui
export type UseBooleanControllers = {
  on: () => void;
  off: () => void;
  toggle: () => void;
};

export type UseBooleanReturnValue = [boolean, Partial<UseBooleanControllers>];

export type AppBarContext = [UseBooleanReturnValue, UseBooleanReturnValue];

export const AppBarContext = createContext<AppBarContext>([
  [false, {}],
  [false, {}],
]);

export const AppBarProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const openState = useBoolean(false);
  const expandState = useBoolean(false);

  return (
    <AppBarContext.Provider value={[openState, expandState]}>
      {children}
    </AppBarContext.Provider>
  );
};
