import type { MouseEvent } from 'react';

import type { UseCalendarControls } from '../types';
import { useCalendarState } from '../useCalendarState.ts';

type OffsetFuncParams = Date | { month?: number; year?: number; day?: number };

export function offset(date: Date, params: OffsetFuncParams): Date {
  if (params instanceof Date) {
    return params;
  } else {
    const { month = 0, year = 0, day = 0 } = params;

    return new Date(
      date.getFullYear() + year,
      date.getMonth() + month,
      date.getDate() + day
    );
  }
}

export const createControls = (
  state: ReturnType<typeof useCalendarState>
): UseCalendarControls => {
  const { offsetDate, setOffsetDate, onChange } = state;

  return {
    offset: (params) => setOffsetDate(offset(offsetDate, params)),
    dayButton: (date, props) => {
      return {
        ...props,
        onClick: (e: MouseEvent<HTMLElement>) => {
          onChange?.(date.$date);
          props?.onClick?.(e);
        },
      };
    },
  };
};
