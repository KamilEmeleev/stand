import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from '@ozen-ui/kit/Table';
import { Typography } from '@ozen-ui/kit/Typography';
import { useBoolean } from '@ozen-ui/kit/useBoolean';

import { type Day } from '../../../../utils';
import { useCalendarContext } from '../../../../utils';

import s from './CalendarMonthView.module.css';
import { CalendarMonthViewCell, CalendarMonthViewDrawer } from './components';
import { rowsDays } from './utils';

export const CalendarMonthView = () => {
  const {
    data: { weekDays, calendars },
    controls: { dayButton },
  } = useCalendarContext();

  const [open, { off, toggle }] = useBoolean(false);

  const { days } = calendars[0];

  return (
    <>
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
                <CalendarMonthViewCell
                  day={day}
                  key={String(day.$date)}
                  {...dayButton(day, { onClick: toggle })}
                />
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <CalendarMonthViewDrawer open={open} onClose={off} />
    </>
  );
};
