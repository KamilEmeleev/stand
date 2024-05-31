import { useCalendarState } from '../useCalendarState.ts';

import { createDays } from './create-days.ts';

export const createCalendars = (state: ReturnType<typeof useCalendarState>) => {
  const { options: { locale, calendar } = {}, offsetDate } = state;

  const offset = calendar?.offset;

  if (offset === 'year') {
    return new Array(12).fill(null).map((_, i) => {
      const d = new Date(offsetDate);
      d.setDate(1);
      d.setMonth(i);

      const days = createDays(d, state);

      return {
        month: d.toLocaleDateString(locale?.locales, {
          month: locale?.month,
        }),
        year: d.toLocaleDateString(locale?.locales, {
          year: locale?.year,
        }),
        days,
      };
    });
  } else {
    return [0, ...(offset || [])].map((value) => {
      const d = new Date(offsetDate);
      d.setMonth(d.getMonth() + value);

      const days = createDays(d, state);

      return {
        month: d.toLocaleDateString(locale?.locales, {
          month: locale?.month,
        }),
        year: d.toLocaleDateString(locale?.locales, {
          year: locale?.year,
        }),
        days,
      };
    });
  }
};
