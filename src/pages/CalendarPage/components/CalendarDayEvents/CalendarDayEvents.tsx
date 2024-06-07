import { FC } from 'react';

import { Tag } from '@ozen-ui/kit/TagNext';
import { Typography } from '@ozen-ui/kit/Typography';

import { calendarEvents } from '../../../../helpers';
import { Day } from '../../../../hooks/useCalendar';
import { compareDate, getTime } from '../../../../utils';

import s from './CalendarDayEvents.module.css';

export type CalendarDayEventsProps = {
  day: Day;
};

export const CalendarDayEvents: FC<CalendarDayEventsProps> = ({ day }) => {
  return (
    <div className={s.dayEvents}>
      {calendarEvents
        .filter(({ date }) => compareDate(date.from, day.$date))
        .map(({ date, title, color }, index) => {
          return (
            <Tag
              size="s"
              key={index}
              as="button"
              label={title}
              color={color}
              className={s.dayEvent}
              iconLeft={
                <Typography color="inherit" variant="text-s_1">
                  {getTime(date.from)}
                </Typography>
              }
              interactive
            />
          );
        })}
    </div>
  );
};
