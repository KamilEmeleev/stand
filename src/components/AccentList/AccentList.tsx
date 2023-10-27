import { ElementType, type FC } from 'react';

import { List, type ListBaseProps } from '@ozen-ui/kit/List';

import s from './AccentList.module.css';

export const AccentList: FC<ListBaseProps & { as?: ElementType }> = ({
  children,
  ...other
}) => {
  return (
    <List className={s.accentList} {...other}>
      {children}
    </List>
  );
};
