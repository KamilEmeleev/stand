import { FC, HTMLAttributes } from 'react';

import { spacing } from '@ozen-ui/kit/MixSpacing';
import { TableCell } from '@ozen-ui/kit/Table';
import { Typography } from '@ozen-ui/kit/Typography';
import clsx from 'clsx';

import { Day } from '../../../../../../utils';
import { CalendarDayEvents } from '../../../CalendarDayEvents';

import s from './CalendarMonthViewCell.module.css';

export type CalendarMonthViewCellProps = {
  day: Day;
} & HTMLAttributes<HTMLTableCellElement>;

export const CalendarMonthViewCell: FC<CalendarMonthViewCellProps> = ({
  day,
  ...other
}) => {
  const label = day.date;
  const now = day.now;
  const selected = day.selected;
  const disabled = !day.inCurrentMonth;

  return (
    <TableCell
      role="button"
      className={clsx(
        s.monthTableCell,
        [now && s.today],
        [selected && s.selected],
        [disabled && s.disabled]
      )}
      {...other}
    >
      <Typography
        align="right"
        {...(disabled && { color: 'disabled' })}
        className={spacing({ mb: 's' })}
      >
        {label}
      </Typography>
      <CalendarDayEvents day={day} />
    </TableCell>
  );
};
