export type Day = {
  $date: Date;
  date: number;
  now: boolean;
  selected: boolean;
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
  date: Date | null;
  calendars: Calendars;
  weekDays: WeekDays;
};
