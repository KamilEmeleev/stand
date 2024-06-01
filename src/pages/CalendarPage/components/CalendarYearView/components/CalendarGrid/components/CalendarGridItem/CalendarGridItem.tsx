import { FC } from 'react';

import { ButtonBase } from '@ozen-ui/kit/ButtonBase';
import { Typography } from '@ozen-ui/kit/Typography';
import clsx from 'clsx';

import {
  type Day,
  useCalendarContext,
} from '../../../../../../../../hooks/useCalendar';
import { useCalendarPageContext } from '../../../../../../CalendarPageProvider.tsx';

import s from './CalendarGridItem.module.css';

export type CalendarGridItemProps = {
  day: Day;
};

export const CalendarGridItem: FC<CalendarGridItemProps> = ({ day }) => {
  const label = day.date;
  const now = day.now;
  const selected = day.selected;
  const disabled = !day.inCurrentMonth || day.disabled;

  const {
    controls: { dayButton },
  } = useCalendarContext();

  const { setDrawer } = useCalendarPageContext();

  return (
    <ButtonBase
      className={clsx(
        s.calendarGridItem,
        [disabled && s.disabled],
        [selected && s.selected],
        [now && s.now]
      )}
      {...(selected && { autoFocus: true })}
      {...dayButton(day, { onClick: setDrawer.on })}
    >
      <Typography variant="text-m">{label}</Typography>
    </ButtonBase>
  );
};
