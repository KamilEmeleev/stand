import { useContext, createContext } from 'react';

import { UseCalendarReturn } from '../../utils';

export type CalendarPageContextValue = UseCalendarReturn;

export const CalendarPageContext = createContext<CalendarPageContextValue>(
  {} as UseCalendarReturn
);

export const useCalendarPage = () => useContext(CalendarPageContext);
