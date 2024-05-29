import { useState, type MouseEvent } from 'react';

import { createCalendars } from './create-calendars.ts';
import { createDays } from './create-days.ts';
import { createWeekdays } from './create-weekdays.ts';
import type { UseCalendarConfig, UseCalendarReturn } from './types.ts';
import { useCalendarState } from './useCalendarState.ts';
import { offset } from './utils.ts';

export function useCalendar(config?: UseCalendarConfig): UseCalendarReturn {
  const state = useCalendarState(config);
  const { date = new Date(), onChange } = state;

  const [offsetDate, setOffsetDate] = useState<Date>(date);

  const days = createDays(offsetDate, state);
  const weekDays = createWeekdays(days, state);
  const calendars = createCalendars(offsetDate, days, state);

  return {
    data: {
      date,
      calendars,
      weekDays,
    },
    controls: {
      offset: (params) => setOffsetDate(offset(offsetDate, params)),
      dayButton: (date, props) => {
        return {
          onClick: (e: MouseEvent<HTMLElement>) => {
            onChange?.(date.$date);
            props?.onClick?.(e);
          },
        };
      },
    },
  };
}
