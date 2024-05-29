import type { UseCalendarConfigOptions } from './types.ts';
import { isToday } from './utils.ts';

export type CreateDaysParams = {
  month: number;
  year: number;
};

export const createDays = (
  { month, year }: CreateDaysParams,
  options?: UseCalendarConfigOptions
) => {
  const { startDay = 0 } = options || {};
  const date = new Date(year, month, 1);

  const start = (date.getDay() || 7) - startDay;

  return new Array(42).fill(null).map((_, index) => {
    const $date = new Date(year, month, index + 1 - start);

    return {
      $date,
      date: date.getDate(),
      now: isToday(date),
      inCurrentMonth: date.getMonth() === month,
    };
  });
};
