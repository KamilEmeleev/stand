import type { HTMLAttributes } from 'react';

import type { Day } from './data.ts';

export type UseCalendarControlOffsetParams =
  | Date
  | { month?: number; year?: number; day?: number };

export type UseCalendarControls = {
  offsetButton(
    params: UseCalendarControlOffsetParams,
    props?: Pick<HTMLAttributes<HTMLButtonElement>, 'onClick'>
  ): Pick<HTMLAttributes<HTMLButtonElement>, 'onClick'>;
  dayButton(
    date: Day,
    props?: Pick<HTMLAttributes<HTMLButtonElement>, 'onClick'>
  ): Pick<HTMLAttributes<HTMLButtonElement>, 'onClick'>;
};
