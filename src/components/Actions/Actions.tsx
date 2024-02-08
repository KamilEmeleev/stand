import { FC, ReactNode } from 'react';

import s from './Actions.module.css';

export type ActionsProps = {
  children: ReactNode;
};

export const Actions: FC<ActionsProps> = ({ children }) => {
  return <div className={s.actions}>{children}</div>;
};
