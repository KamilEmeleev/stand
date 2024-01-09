import { ElementType, type FC } from 'react';

import { List, type ListBaseProps } from '@ozen-ui/kit/List';
import clsx from 'clsx';

import s from './AccentList.module.css';

export const AccentList: FC<
  ListBaseProps & { as?: ElementType; className?: string }
> = ({ children, className, ...other }) => {
  return (
    <List className={clsx(s.accentList, className)} disablePadding {...other}>
      {children}
    </List>
  );
};
