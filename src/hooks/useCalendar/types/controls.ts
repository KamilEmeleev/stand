import type { HTMLAttributes } from 'react';

import type { Day } from './data.ts';

export type UseCalendarControlOffset = (
  params: Date | { month?: number; year?: number; day?: number }
) => void;

export type UseCalendarControls = {
  offset: UseCalendarControlOffset;
  dayButton: (
    date: Day,
    props?: HTMLAttributes<HTMLElement>
  ) => HTMLAttributes<HTMLElement>;
};
