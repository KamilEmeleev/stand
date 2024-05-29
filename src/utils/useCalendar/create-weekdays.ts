import type { UseCalendarConfig, Days } from './types.ts';

export const createWeekdays = (
  days: Days,
  state: UseCalendarConfig
): string[] => {
  const { options: { locale } = {} } = state;

  return [0, 1, 2, 3, 4, 5, 6].map((day: number) => {
    const date = new Date(days[day].$date);

    return date.toLocaleDateString(locale?.locales, {
      weekday: locale?.weekday,
    });
  });
};
