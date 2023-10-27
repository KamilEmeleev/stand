import { ComponentProps, FC } from 'react';

import { spacing } from '@ozen-ui/kit/MixSpacing';
import { Typography } from '@ozen-ui/kit/Typography';
import clsx from 'clsx';

import s from './Footer.module.css';

export const Footer: FC<ComponentProps<'footer'>> = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={clsx(s.footer, spacing({ pb: 'xl', px: '4xl', pt: 0 }))}>
      <Typography color="tertiary">
        © {currentYear}, Made with ❤️ by Ozen-UI
      </Typography>
    </footer>
  );
};
