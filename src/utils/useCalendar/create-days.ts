import type { UseCalendarConfig } from './types.ts';
import { compareDate, isToday } from './utils.ts';

export const createDays = (offsetDate: Date, state: UseCalendarConfig) => {
  const month = offsetDate.getMonth();
  const year = offsetDate.getFullYear();

  const { options: { startDay = 0 } = {}, date: selectedDate } = state;

  const date = new Date(year, month, 1);

  const start = (date.getDay() || 7) - startDay;

  return new Array(42).fill(null).map((_, index) => {
    const $date = new Date(year, month, index + 1 - start);

    return {
      $date,
      selected: compareDate(selectedDate, $date),
      date: $date.getDate(),
      now: isToday($date),
      inCurrentMonth: $date.getMonth() === month,
    };
  });
};
