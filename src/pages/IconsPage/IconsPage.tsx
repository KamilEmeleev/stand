import { useState } from 'react';

import { type IconSize } from '@ozen-ui/icons';
import { IconButton } from '@ozen-ui/kit/IconButtonNext';
import { Stack } from '@ozen-ui/kit/Stack';
import { Tooltip } from '@ozen-ui/kit/Tooltip';

import { Actions } from '../../components';
import { FigmaIcon } from '../../icons';

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
      <Actions>
        <Tooltip arrow={false} placement="top" size="xs" label="Макет">
          <IconButton
            icon={FigmaIcon}
            variant="floating"
            target="_blank"
            rounded
            as="a"
            href="https://www.figma.com/file/h2zzCj659L0pyzA9FamCuG/Assets-Core-%7C-%C3%96zen?type=design&node-id=6-41&mode=design&t=3S08bLKyB5RCy0g9-0"
          />
        </Tooltip>
      </Actions>
    </Stack>
  );
};
