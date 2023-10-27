import type { FC } from 'react';

import { Typography, type TypographyProps } from '@ozen-ui/kit/Typography';

export type AppBarHeaderTitleProps = TypographyProps;

export const AppBarHeaderTitle: FC<AppBarHeaderTitleProps> = ({
  children,
  ...other
}) => {
  return (
    <Typography variant="text-m_1" color="accentPrimary" noWrap {...other}>
      {children}
    </Typography>
  );
};
