// Intl.DateTimeFormatOptions
export type UseCalendarConfigLocale = {
  locales: Intl.LocalesArgument;
  month?: 'numeric' | '2-digit' | 'long' | 'short' | 'narrow' | undefined;
  year?: 'numeric' | '2-digit' | undefined;
  weekday?: 'long' | 'short' | 'narrow' | undefined;
};

export type UseCalendarConfigOptions = {
  startDay?: 0 | 1 | 2 | 3 | 4 | 5 | 6;
  calendar?: {
    offset?: number[] | 'year';
  };
  locale?: UseCalendarConfigLocale;
};

export type UseCalendarConfig = {
  date?: Date;
  onChange?(date: Date): void;
  options?: UseCalendarConfigOptions;
};
