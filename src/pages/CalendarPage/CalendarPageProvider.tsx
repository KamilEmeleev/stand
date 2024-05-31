import { useContext, createContext, useState } from 'react';
import type { FC, ReactNode } from 'react';

import {
  useBoolean,
  type UseBooleanControllers,
} from '@ozen-ui/kit/useBoolean';

export type CalendarPageStepType = 'month' | 'year';

export type CalendarPageContextProps = {
  step?: CalendarPageStepType;
  drawerOpen?: boolean;
  goToStep: (step: CalendarPageStepType) => void;
  setDrawer: UseBooleanControllers;
};

export const CalendarPageContext = createContext<CalendarPageContextProps>(
  {} as CalendarPageContextProps
);

export const useCalendarPageContext = () => useContext(CalendarPageContext);

export type CalendarPageProviderProps = {
  children?: ReactNode;
};

export const CalendarPageProvider: FC<CalendarPageProviderProps> = ({
  children,
}) => {
  const [step, setStep] = useState<CalendarPageStepType>('month');
  const [drawerOpen, setDrawer] = useBoolean(false);

  const goToStep = (step: CalendarPageStepType) => {
    setStep(step);
  };

  return (
    <CalendarPageContext.Provider
      value={{ step, goToStep, drawerOpen, setDrawer }}
    >
      {children}
    </CalendarPageContext.Provider>
  );
};
