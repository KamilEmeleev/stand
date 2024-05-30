import { useCalendarState } from '../useCalendarState.ts';

import { createDays } from './create-days.ts';

export const createWeekdays = (
  state: ReturnType<typeof useCalendarState>
): string[] => {
  const { options: { locale } = {}, offsetDate } = state;
  const days = createDays(offsetDate, state);

  return [0, 1, 2, 3, 4, 5, 6].map((day: number) => {
    const date = new Date(days[day].$date);

    return date.toLocaleDateString(locale?.locales, {
      weekday: locale?.weekday,
    });
  });
};
