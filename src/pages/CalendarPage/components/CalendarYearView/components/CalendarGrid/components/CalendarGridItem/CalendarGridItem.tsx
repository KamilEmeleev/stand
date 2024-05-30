import { FC } from 'react';

import { ButtonBase } from '@ozen-ui/kit/ButtonBase';
import { Typography } from '@ozen-ui/kit/Typography';
import clsx from 'clsx';

import {
  type Day,
  useCalendarContext,
} from '../../../../../../../../hooks/useCalendar';

import s from './CalendarGridItem.module.css';

export type CalendarGridItemProps = {
  day: Day;
};

export const CalendarGridItem: FC<CalendarGridItemProps> = ({ day }) => {
  const label = day.date;
  const now = day.now;
  const selected = day.selected;
  const disabled = !day.inCurrentMonth;

  const {
    controls: { dayButton },
  } = useCalendarContext();

  return (
    <ButtonBase
      className={clsx(
        s.calendarGridItem,
        [disabled && s.disabled],
        [selected && s.selected],
        [now && s.now]
      )}
      {...dayButton(day)}
    >
      <Typography variant="text-m">{label}</Typography>
    </ButtonBase>
  );
};
