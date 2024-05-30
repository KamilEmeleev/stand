import { createDays } from './create-days.ts';
import type { UseCalendarConfig } from './types.ts';

export const createCalendars = (offsetDate: Date, state: UseCalendarConfig) => {
  const { options: { locale, calendar } = {} } = state;

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
