import { spacing } from '@ozen-ui/kit/MixSpacing';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from '@ozen-ui/kit/Table';
import { Typography } from '@ozen-ui/kit/Typography';
import clsx from 'clsx';

import { type Day } from '../../../../utils';
import { useCalendarPage } from '../../CalendarPageContext.ts';
import { CalendarDayEvents } from '../CalendarDayEvents';

import s from './CalendarMonthView.module.css';
import { rowsDays } from './utils';

export const CalendarMonthView = () => {
  const {
    data: { weekDays, calendars },
    controls: { dayButton },
  } = useCalendarPage();

  const { days } = calendars[0];

  return (
    <Table className={s.monthTable} divider="all" fullWidth compressed>
      <TableHead>
        <TableRow>
          {weekDays.map((weekDay) => (
            <TableCell align="left" key={weekDay}>
              <Typography variant="text-s_1" align="center" color="secondary">
                {`${weekDay}`.toUpperCase()}
              </Typography>
            </TableCell>
          ))}
        </TableRow>
      </TableHead>
      <TableBody>
        {rowsDays<Day>(days).map((row, index) => (
          <TableRow key={index}>
            {row.map((day) => (
              <TableCell
                {...dayButton(day)}
                key={`${day.$date}`}
                className={clsx(
                  s.monthTableCell,
                  [day.now && s.today],
                  [day.selected && s.selected]
                )}
              >
                <Typography
                  align="right"
                  {...(!day.inCurrentMonth && { color: 'disabled' })}
                  className={spacing({ mb: 's' })}
                >
                  {day.date}
                </Typography>
                <CalendarDayEvents day={day} />
              </TableCell>
            ))}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};
