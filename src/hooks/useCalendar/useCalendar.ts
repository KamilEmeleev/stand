import type { UseCalendar, UseCalendarConfig } from './types';
import { useCalendarState } from './useCalendarState.ts';
import { createCalendars, createControls, createWeekdays } from './utils';

export function useCalendar(config?: UseCalendarConfig): UseCalendar {
  const state = useCalendarState(config);

  const date = state.date || new Date();
  const weekDays = createWeekdays(state);
  const calendars = createCalendars(state);
  const controls = createControls(state);

  return {
    data: {
      date,
      calendars,
      weekDays,
    },
    controls,
  };
}
