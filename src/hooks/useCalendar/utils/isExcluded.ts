import { UseCalendarDayInteger, UseCalendarExcludeConfig } from '../types';

export const isExcluded = (date: Date, exclude?: UseCalendarExcludeConfig) => {
  if (!date || !exclude) return false;

  const { day: days, date: dates } = exclude;

  return (
    days?.includes(date.getDay() as UseCalendarDayInteger) ||
    dates?.map((d) => d.getTime()).includes(date.getTime())
  );
};
