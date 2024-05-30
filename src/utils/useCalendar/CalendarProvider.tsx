import { useContext, createContext } from 'react';
import type { FC, ReactNode } from 'react';

import {
  useCalendar,
  type UseCalendarConfig,
  type UseCalendarReturn,
} from '../index.ts';

export const CalendarContext = createContext<UseCalendarReturn>(
  {} as UseCalendarReturn
);

export const useCalendarContext = () => useContext(CalendarContext);

export type CalendarProviderProps = {
  children?: ReactNode;
  config?: UseCalendarConfig;
};

export const CalendarProvider: FC<CalendarProviderProps> = ({
  children,
  config,
}) => {
  return (
    <CalendarContext.Provider value={useCalendar(config)}>
      {children}
    </CalendarContext.Provider>
  );
};
