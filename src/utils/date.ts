export function daysInMonth({ year, month }: { month: number; year: number }) {
  const now = new Date(year, month);

  return new Date(now.getFullYear(), now.getMonth() + 1, 0).getDate();
}

export function compareDate(d1?: Date, d2?: Date) {
  if (!d1 || !d2) {
    return false;
  }

  const date1 = new Date(d1.getFullYear(), d1.getMonth(), d1.getDate());
  const date2 = new Date(d2.getFullYear(), d2.getMonth(), d2.getDate());

  return date1.getTime() === date2.getTime();
}

export function isToday(day: Date) {
  const now = new Date();

  return compareDate(now, day);
}

export function getTime(date: Date) {
  return `${date.getHours()}:${String(date.getMinutes()).padStart(2, '0')}`;
}
