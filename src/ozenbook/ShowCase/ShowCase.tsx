import { FC, ReactNode } from 'react';

import { Stack, type StackProps } from '@ozen-ui/kit/Stack';
import clsx from 'clsx';

import s from './ShowCase.module.css';

export type ShowCaseProps = {
  children: ReactNode;
} & StackProps;

export const ShowCase: FC<ShowCaseProps> = ({
  children,
  className,
  ...other
}) => {
  return (
    <Stack
      className={clsx(s.showCase, className)}
      align="center"
      justify="center"
      direction="column"
      fullWidth
      {...other}
    >
      {children}
    </Stack>
  );
};
