import type { FC, HTMLAttributes, ReactNode } from 'react';

import { TableCell } from '@ozen-ui/kit/Table';
import { Typography } from '@ozen-ui/kit/Typography';
import clsx from 'clsx';

import { type Day } from '../../../../../../../../hooks/useCalendar';

import s from './CalendarTableCell.module.css';

export type CalendarTableCellProps = {
  day: Day;
  children?: ReactNode;
} & HTMLAttributes<HTMLTableCellElement>;

export const CalendarTableCell: FC<CalendarTableCellProps> = ({
  day,
  children,
  ...other
}) => {
  const label = day.date;
  const now = day.now;
  const selected = day.selected;
  const disabled = !day.inCurrentMonth;
  const offDay = day.day === 0 || day.day === 6;

  return (
    <TableCell
      role="button"
      className={clsx(
        s.monthTableCell,
        [now && s.today],
        [selected && s.selected],
        [(disabled || offDay) && s.disabled]
      )}
      {...other}
    >
      <Typography
        align="right"
        {...(now && { color: 'action' })}
        {...((disabled || offDay) && { color: 'disabled' })}
        className={s.date}
      >
        <span>{label}</span>
      </Typography>
      {children}
    </TableCell>
  );
};
