import type { UseCalendar, UseCalendarConfig } from './types';
import { useCalendarState } from './useCalendarState.ts';
import {
  createCalendars,
  createControls,
  createWeekdays,
  createTime,
} from './utils';

export function useCalendar(config?: UseCalendarConfig): UseCalendar {
  const state = useCalendarState(config);

  const date = state.date || new Date();
  const weekDays = createWeekdays(state);
  const time = createTime(state);
  const controls = createControls(state);
  const calendars = createCalendars(state);

  return {
    data: {
      time,
      date,
      calendars,
      weekDays,
    },
    controls,
  };
}
