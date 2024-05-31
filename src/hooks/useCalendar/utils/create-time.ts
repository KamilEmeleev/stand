import { useCalendarState } from '../useCalendarState.ts';

export const createTime = (state: ReturnType<typeof useCalendarState>) => {
  const interval = 30;
  const segments = (24 * 60) / interval;
  const { date } = state;

  if (!date) {
    return [];
  }

  return Array(segments)
    .fill(0)
    .map((_, i) => {
      const $date = new Date(
        date?.getFullYear(),
        date?.getMonth(),
        date?.getDate(),
        0,
        i * interval
      );

      return {
        $date,
      };
    });
};
