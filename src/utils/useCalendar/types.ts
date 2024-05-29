export type Day = {
  $date: Date;
  date: number;
  now: boolean;
  inCurrentMonth: boolean;
};

export type Days = Day[];

export type Calendar = {
  days: Days;
  year: number | string;
  month: number | string;
};

export type UseCalendarConfigLocale = {
  locales: Intl.LocalesArgument;
} & Pick<Intl.DateTimeFormatOptions, 'month' | 'year' | 'weekday'>;

export type UseCalendarConfigOptions = {
  startDay?: 0 | 1 | 2 | 3 | 4 | 5 | 6;
  locale: UseCalendarConfigLocale;
};

export type UseCalendarControlOffsetParams =
  | Date
  | { month?: number; year?: number; day?: number };

export type UseCalendarControlOffset = (
  params: UseCalendarControlOffsetParams
) => void;

export type UseCalendarControls = {
  offset: UseCalendarControlOffset;
  dayButton: (date: Day) => {
    onClick: () => void;
  };
};

// in
export type UseCalendarConfig = {
  date?: Date;
  onChange?: (date: Date) => void;
  options?: UseCalendarConfigOptions;
};

// out
export type UseCalendarReturn = {
  data: {
    calendars: Array<Calendar>;
    weekDays: Array<string | number>;
  };
  controls: UseCalendarControls;
};
