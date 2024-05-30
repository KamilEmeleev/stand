import { useContext, createContext, useState } from 'react';
import type { FC, ReactNode } from 'react';

export type CalendarPageStepType = 'month' | 'year';

export type CalendarPageContextProps = {
  step?: CalendarPageStepType;
  goToStep: (step: CalendarPageStepType) => void;
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

  const goToStep = (step: CalendarPageStepType) => {
    setStep(step);
  };

  return (
    <CalendarPageContext.Provider value={{ step, goToStep }}>
      {children}
    </CalendarPageContext.Provider>
  );
};
