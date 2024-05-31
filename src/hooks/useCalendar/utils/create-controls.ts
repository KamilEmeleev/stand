import type { MouseEvent } from 'react';

import { UseCalendarControlOffsetParams, UseCalendarControls } from '../types';
import { useCalendarState } from '../useCalendarState.ts';

export function offset(
  date: Date,
  params: UseCalendarControlOffsetParams
): Date {
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
    offsetButton: (params, props) => {
      return {
        ...props,
        onClick: (e: MouseEvent<HTMLElement>) => {
          setOffsetDate(offset(offsetDate, params));
          props?.onClick?.(e);
        },
      };
    },
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
