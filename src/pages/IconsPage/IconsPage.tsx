import { useState } from 'react';

import { type IconSize } from '@ozen-ui/icons';
import { Stack } from '@ozen-ui/kit/Stack';

import { IconsList, IconsSearch } from './components';

export type IconProps = {
  name: string;
  size: IconSize | IconSize[];
  componentName: string;
  colored: boolean;
  deprecated: boolean;
};

export type IconsProps = IconProps[];

export const IconsPage = () => {
  const [filteredIcons, setIcons] = useState<IconsProps>();

  return (
    <Stack direction="column" gap={{ xs: 'l', m: '2xl' }}>
      <IconsSearch onFilterIcons={(icons) => setIcons(icons)} />
      <IconsList icons={filteredIcons} />
    </Stack>
  );
};
