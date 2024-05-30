import { FC } from 'react';

import { capitalizeFirstLetter } from '@ozen-ui/kit/__inner__/esm/utils/capitalizeFirstLetter/capitalizeFirstLetter';
import { Typography } from '@ozen-ui/kit/Typography';

import type { Calendar, WeekDays } from '../../../../../../hooks/useCalendar';

import s from './CalendarGrid.module.css';
import { CalendarGridItem } from './components';

export type CalendarGridProps = {
  calendar: Calendar;
  weekDays: WeekDays;
};

export const CalendarGrid: FC<CalendarGridProps> = ({ calendar, weekDays }) => {
  return (
    <div className={s.calendarGrid}>
      <div className={s.calendarGridHead}>
        <Typography variant="text-m_1">
          {capitalizeFirstLetter(`${calendar?.month}`)}
        </Typography>
      </div>
      <div className={s.calendarGridBody}>
        {weekDays.map((day) => (
          <Typography color="secondary">{day}</Typography>
        ))}
        {calendar?.days.map((day) => <CalendarGridItem day={day} />)}
      </div>
    </div>
  );
};
