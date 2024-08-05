import { type FC } from 'react';

import { spacing } from '@ozen-ui/kit/MixSpacing';
import { Stack } from '@ozen-ui/kit/Stack';
import type { TagProps } from '@ozen-ui/kit/TagNext';
import { Tag } from '@ozen-ui/kit/TagNext';
import { Typography } from '@ozen-ui/kit/Typography';
import clsx from 'clsx';

export type StatusVariant = 'stable' | 'experimental' | 'deprecated';

export type StatusProp = {
  variant?: StatusVariant;
} & Partial<Omit<TagProps, 'variant'>>;

const variantMap: Record<
  StatusVariant,
  { color: TagProps['color']; label: string }
> = {
  stable: { color: 'action', label: 'Стабильный' },
  experimental: { color: 'info', label: 'Экспериментальный' },
  deprecated: { color: 'error', label: 'Устаревший' },
};

export const Status: FC<StatusProp> = ({
  variant = 'stable',
  children,
  ...other
}) => {
  return (
    <div className={clsx(spacing({ mb: 'l' }), 'unstyled')}>
      <Stack gap="xs" direction="column" align="start" fullWidth>
        <Tag
          size="s"
          color={variantMap[variant].color}
          label={variantMap[variant].label}
          {...other}
          interactive
        >
          {undefined}
        </Tag>
        {children && (
          <Typography color="tertiary" variant="text-s">
            {children}
          </Typography>
        )}
      </Stack>
    </div>
  );
};
