import { FC } from 'react';

import { Typography } from '@ozen-ui/kit/Typography';
import clsx from 'clsx';

import s from './DateIcon.module.css';
import { formatDate } from './utils';

export type DateIconProps = {
  active?: boolean;
  date: string;
};

export const DateIcon: FC<DateIconProps> = ({ date, active }) => {
  const [day, month] = formatDate(date);

  return (
    <div className={clsx(s.dateIcon, [active && s.dateActive])}>
      <Typography align="center" variant="text-xl_1">
        {day}
      </Typography>
      <Typography align="center" variant="text-s">
        {month}
      </Typography>
    </div>
  );
};
