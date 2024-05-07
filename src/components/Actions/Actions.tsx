import { FC, ReactNode } from 'react';

import { Stack } from '@ozen-ui/kit/Stack';

import s from './Actions.module.css';

export type ActionsProps = {
  children: ReactNode;
};

export const Actions: FC<ActionsProps> = ({ children }) => {
  return (
    <Stack className={s.actions} direction="column" gap="m">
      {children}
    </Stack>
  );
};
