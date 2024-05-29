import { FC } from 'react';

import { Typography } from '@ozen-ui/kit/Typography';
import clsx from 'clsx';

import { calendarEvents } from '../../../../helpers';
import { compareDate, Day, getTime } from '../../../../utils';

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
            <button
              key={index}
              className={clsx(s.dayEvent, s[color || 'green'])}
            >
              <Typography variant="text-s" align="left" noWrap>
                <Typography variant="text-s_1" as="span">
                  {getTime(date.from)}
                </Typography>
                &nbsp;{title}
              </Typography>
            </button>
          );
        })}
    </div>
  );
};
