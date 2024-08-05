import './Intro.css';

import * as React from 'react';
import type { FC } from 'react';

import { spacing } from '@ozen-ui/kit/MixSpacing';
import { Typography } from '@ozen-ui/kit/Typography';
import clsx from 'clsx';

export type IntroProps = {
  children?: React.ReactNode;
  label?: string | number | undefined;
};

export const Intro: FC<IntroProps> = ({ children, label }) => {
  return (
    <section className={clsx(spacing({ mt: 'xl' }), 'Intro unstyled')}>
      <Typography as="div" color="secondary" variant="text-m_1">
        {label || children}
      </Typography>
    </section>
  );
};
