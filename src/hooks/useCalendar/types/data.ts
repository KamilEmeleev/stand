export type UseCalendarDayInteger = 0 | 1 | 2 | 3 | 4 | 5 | 6;

export type Time = {
  $date: Date;
};

export type Times = Time[];

export type Day = {
  $date: Date;
  date: number;
  day: number;
  now: boolean;
  selected: boolean;
  disabled: boolean;
  inCurrentMonth: boolean;
};

export type Calendar = {
  days: Days;
  year: number | string;
  month: number | string;
};

export type WeekDay = string | number;

export type WeekDays = WeekDay[];
export type Calendars = Calendar[];
export type Days = Day[];

export type UseCalendarData = {
  time: Times;
  date: Date | null;
  weekDays: WeekDays;
  calendars: Calendars;
};
