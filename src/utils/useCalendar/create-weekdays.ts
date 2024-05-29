import type { UseCalendarConfigOptions, Days } from './types.ts';

export const createWeekdays = (
  days: Days,
  options?: UseCalendarConfigOptions
): string[] => {
  const { locale } = options || {};

  return [0, 1, 2, 3, 4, 5, 6].map((day: number) => {
    const date = new Date(days[day].$date);

    console.log('memo');

    return date.toLocaleDateString(locale?.locales, {
      weekday: locale?.weekday,
    });
  });
};
