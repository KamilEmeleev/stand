import { FC, HTMLAttributes } from 'react';

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from '@ozen-ui/kit/Table';
import { Typography } from '@ozen-ui/kit/Typography';

import { type Day, useCalendarContext } from '../../../../../../utils';
import { CalendarDayEvents } from '../../../CalendarDayEvents';
import { rowsDays } from '../../utils';

import s from './CalendarTable.module.css';
import { CalendarTableCell } from './components';

export type CalendarTableProps = {
  cellProps?: HTMLAttributes<HTMLTableCellElement>;
};

export const CalendarTable: FC<CalendarTableProps> = ({ cellProps }) => {
  const {
    data: { weekDays, calendars },
    controls: { dayButton },
  } = useCalendarContext();

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
              <CalendarTableCell
                day={day}
                key={String(day.$date)}
                {...dayButton(day, cellProps)}
              >
                <CalendarDayEvents day={day} />
              </CalendarTableCell>
            ))}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};
