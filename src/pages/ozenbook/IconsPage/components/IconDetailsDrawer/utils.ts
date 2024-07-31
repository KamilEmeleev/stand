import { type IconSize } from '@ozen-ui/icons';
import { themeHelper } from '@ozen-ui/kit/ThemeProvider';
import { dedent } from 'ts-dedent';

export const filterColor = (
  color: typeof themeHelper.color,
  groupPrefix: string
) => {
  return color.filter((key) => key.includes(groupPrefix));
};

export const generateIconProps = ({
  multiSize,
  colored,
  size,
  color,
}: {
  multiSize: boolean;
  colored: boolean;
  size: IconSize;
  color: string;
}) => {
  const arrProps = [];

  if (multiSize) {
    arrProps.push(`size="${size}"`);
  }

  if (!colored) {
    arrProps.push(`color="var(${color})"`);
  }

  return arrProps.join(' ');
};

export const code = ({
  name,
  multiSize,
  colored,
  size,
  color,
}: {
  name: string;
  multiSize: boolean;
  colored: boolean;
  size: IconSize;
  color: string;
}) => dedent`
  import React from 'react';

  import { ${name} } from '@ozen-ui/icons';

  const Icon = () => (
    <${name} ${generateIconProps({ multiSize, colored, size, color })} />
  );
`;
