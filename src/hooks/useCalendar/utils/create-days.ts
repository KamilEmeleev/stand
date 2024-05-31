import { compareDate, isToday } from '../../../utils';
import type { UseCalendarConfig } from '../types';

export const createDays = (date: Date, state: UseCalendarConfig) => {
  const month = date.getMonth();
  const year = date.getFullYear();

  const { options: { startDay = 0 } = {}, date: selectedDate } = state;

  const d = new Date(year, month, 1);

  const start = (d.getDay() || 7) - startDay;

  return new Array(42).fill(null).map((_, index) => {
    const $date = new Date(year, month, index + 1 - start);

    return {
      $date,
      selected: compareDate(selectedDate, $date),
      date: $date.getDate(),
      day: $date.getDay(),
      now: isToday($date),
      inCurrentMonth: $date.getMonth() === month,
    };
  });
};
