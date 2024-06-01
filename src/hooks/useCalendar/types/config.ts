// Intl.DateTimeFormatOptions
import { UseCalendarDayInteger } from './data.ts';

export type UseCalendarLocaleConfig = {
  locales: Intl.LocalesArgument;
  month?: 'numeric' | '2-digit' | 'long' | 'short' | 'narrow' | undefined;
  year?: 'numeric' | '2-digit' | undefined;
  weekday?: 'long' | 'short' | 'narrow' | undefined;
};

export type UseCalendarOptionsConfig = {
  startDay?: UseCalendarDayInteger;
  locale?: UseCalendarLocaleConfig;
  calendar?: {
    offset?: number[] | 'year';
  };
};

export interface UseCalendarExcludeConfig {
  day?: UseCalendarDayInteger[];
  date?: Date[];
}

export type UseCalendarConfig = {
  date?: Date;
  onChange?(date: Date): void;
  options?: UseCalendarOptionsConfig;
  exclude?: UseCalendarExcludeConfig;
};
