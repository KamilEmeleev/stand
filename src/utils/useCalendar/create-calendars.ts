import type { Days, UseCalendarConfig } from './types.ts';

export const createCalendars = (
  offsetDate: Date,
  days: Days,
  state: UseCalendarConfig
) => {
  const { options } = state;

  return [
    {
      month: offsetDate.toLocaleDateString(options?.locale.locales, {
        month: options?.locale.month,
      }),
      year: offsetDate.toLocaleDateString(options?.locale.locales, {
        year: options?.locale.year,
      }),
      days,
    },
  ];
};
