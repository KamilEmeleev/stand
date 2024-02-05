import type { ComponentPropsWithRef, ReactNode, FC } from 'react';

import { Stack } from '@ozen-ui/kit/Stack';

import './AppBarHeader.css';

export type AppBarHeaderProps = {
  children?: ReactNode;
} & ComponentPropsWithRef<'div'>;

export const AppBarHeader: FC<AppBarHeaderProps> = ({ children, ...other }) => {
  return (
    <Stack className="AppBarHeader" gap="s" align="center" {...other}>
      {children}
    </Stack>
  );
};
