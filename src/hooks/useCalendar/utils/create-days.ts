import { compareDate, isToday } from '../../../utils';
import type { UseCalendarConfig } from '../types';

import { isExcluded } from './isExcluded.ts';

export const createDays = (date: Date, state: UseCalendarConfig) => {
  const month = date.getMonth();
  const year = date.getFullYear();

  const { options: { startDay = 0 } = {}, date: selectedDate, exclude } = state;

  const d = new Date(year, month, 1);

  const start = (d.getDay() || 7) - startDay;

  return new Array(42).fill(null).map((_, index) => {
    const $date = new Date(year, month, index + 1 - start);

    const disabled = isExcluded($date, exclude);

    return {
      $date,
      disabled,
      day: $date.getDay(),
      now: isToday($date),
      date: $date.getDate(),
      selected: compareDate(selectedDate, $date),
      inCurrentMonth: $date.getMonth() === month,
    };
  });
};
