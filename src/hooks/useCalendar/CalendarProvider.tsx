import { useContext, createContext } from 'react';
import type { FC, ReactNode } from 'react';

import { type UseCalendarConfig, type UseCalendar } from './index';
import { useCalendar } from './index';

export const CalendarContext = createContext<UseCalendar>({} as UseCalendar);

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
