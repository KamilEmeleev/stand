import { FC, ReactNode } from 'react';

import { Stack } from '@ozen-ui/kit/Stack';

import s from './ShowCase.module.css';

export type ShowCaseProps = {
  children: ReactNode;
};

export const ShowCase: FC<ShowCaseProps> = ({ children }) => {
  return (
    <Stack
      className={s.showCase}
      align="center"
      justify="center"
      direction="column"
      fullWidth
    >
      {children}
    </Stack>
  );
};
