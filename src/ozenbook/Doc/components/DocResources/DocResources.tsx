import { FC } from 'react';

import { IconButton } from '@ozen-ui/kit/IconButtonNext';
import { Stack } from '@ozen-ui/kit/Stack';

import { FigmaIcon, GithubIcon } from '../../../../icons';

import s from './DocResources.module.css';

export type DocResourcesProps = {
  resources?: {
    github?: string;
    figma?: string;
  };
};

export const DocResources: FC<DocResourcesProps> = ({ resources }) => {
  if (!resources) return null;

  return (
    <Stack gap="s" className={s.docRes}>
      {!!resources.github && (
        <IconButton
          icon={GithubIcon}
          variant="contained"
          as="a"
          href={resources.github}
          compressed
          rounded
        />
      )}
      {!!resources.figma && (
        <IconButton
          icon={FigmaIcon}
          variant="contained"
          as="a"
          href={resources.figma}
          compressed
          rounded
        />
      )}
    </Stack>
  );
};
