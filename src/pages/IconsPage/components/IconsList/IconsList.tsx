import { useState, FC } from 'react';

import * as iconComponents from '@ozen-ui/icons';
import { Badge } from '@ozen-ui/kit/Badge';
import { Card } from '@ozen-ui/kit/Card';
import { Grid, GridItem } from '@ozen-ui/kit/Grid';
import { Stack } from '@ozen-ui/kit/Stack';
import { Typography } from '@ozen-ui/kit/Typography';
import { useBoolean } from '@ozen-ui/kit/useBoolean';
import { useBreakpoints } from '@ozen-ui/kit/useBreakpoints';

import { IconProps, IconsProps } from '../../IconsPage.tsx';
import { IconDetailDrawer } from '../IconDetailsDrawer';

import s from './IconList.module.css';

export const IconsList: FC<{ icons?: IconsProps }> = ({ icons }) => {
  const { m } = useBreakpoints();
  const isMobile = !m;

  const [open, { toggle, off }] = useBoolean(false);
  const [selectedIcon, setSelectedIcon] = useState<IconProps>();

  const handleOnClick = (icon: IconProps) => () => {
    toggle();
    setSelectedIcon(icon);
  };

  return (
    <Grid cols={{ xs: 2, s: 3, m: 4, l: 5 }} gap="l">
      {!icons?.length ? (
        <GridItem col={12}>
          <Typography>Ничего не найдено</Typography>
        </GridItem>
      ) : (
        icons?.map((icon) => {
          const { componentName, deprecated } = icon;

          const Icon =
            // eslint-disable-next-line import/namespace
            iconComponents[componentName as keyof typeof iconComponents] ||
            null;

          const isGhost = componentName.includes('GhostIcon');

          return (
            <GridItem key={componentName}>
              <Card
                gap="m"
                fullWidth
                as={Stack}
                interactive
                align="center"
                className={s.card}
                borderWidth="none"
                direction="column"
                onClick={handleOnClick(icon)}
                background={isGhost ? 'main-inverse' : 'main'}
              >
                <Icon />
                {deprecated && (
                  <Badge
                    size="xs"
                    color="errorLight"
                    className={s.badge}
                    content="Deprecated"
                  />
                )}
                <Typography
                  color="secondary"
                  variant={isMobile ? 'text-xs' : 'text-s'}
                >
                  {componentName}
                </Typography>
              </Card>
            </GridItem>
          );
        })
      )}
      <IconDetailDrawer icon={selectedIcon} open={open} onClose={off} />
    </Grid>
  );
};
