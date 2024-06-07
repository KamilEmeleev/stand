import { useState } from 'react';
import type { FC } from 'react';

import * as iconComponents from '@ozen-ui/icons';
import type { icons } from '@ozen-ui/icons/manifest.json';
import { Badge } from '@ozen-ui/kit/Badge';
import { Card } from '@ozen-ui/kit/Card';
import { Grid, GridItem } from '@ozen-ui/kit/Grid';
import { spacing } from '@ozen-ui/kit/MixSpacing';
import { Stack } from '@ozen-ui/kit/Stack';
import { Tooltip } from '@ozen-ui/kit/Tooltip';
import { Typography } from '@ozen-ui/kit/Typography';
import { useBoolean } from '@ozen-ui/kit/useBoolean';
import clsx from 'clsx';
import groupBy from 'lodash.groupby';

import { IconDetailDrawer } from '../IconDetailsDrawer';

import s from './IconList.module.css';

export const IconsList: FC<{ icons: typeof icons }> = ({ icons }) => {
  const iconsGroupByCategory = Object.entries(groupBy(icons, 'category'));

  const [open, { toggle, off }] = useBoolean(false);
  const [selectedIcon, setSelectedIcon] = useState<(typeof icons)[0]>();

  const handleOnClick = (icon: (typeof icons)[0]) => () => {
    toggle();
    setSelectedIcon(icon);
  };

  return (
    <>
      {iconsGroupByCategory.map(([key, icons]) => (
        <Card borderWidth="none" key={key}>
          <Stack
            align="center"
            gap="m"
            className={spacing({ mb: 'l' })}
            fullWidth
          >
            <Typography variant="heading-xl">{key}</Typography>
            <Badge content={icons.length} color="actionLight" />
          </Stack>
          <Grid cols={{ xs: 4, s: 6, m: 8 }} gap="l" align="center" key={key}>
            {!!icons.length &&
              icons.map((icon) => {
                const { componentName, deprecated } = icon;

                const ghost =
                  componentName.includes('GhostIcon') ||
                  componentName.includes('GhostColoredIcon');

                const Icon =
                  iconComponents[
                    // eslint-disable-next-line import/namespace
                    componentName as keyof typeof iconComponents
                  ] || null;

                return (
                  <GridItem key={componentName} className={s.item}>
                    <Tooltip
                      label={componentName}
                      placement="bottom"
                      delayEnter={300}
                      delayLeave={100}
                      disableInteractive
                    >
                      <button
                        className={clsx({
                          [s.btn]: true,
                          [s.deprecated]: deprecated,
                          [s.ghost]: ghost,
                        })}
                        onClick={handleOnClick(icon)}
                      >
                        <Icon />
                      </button>
                    </Tooltip>
                  </GridItem>
                );
              })}
          </Grid>
        </Card>
      ))}
      {!iconsGroupByCategory.length && (
        <Typography>Ничего не найдено</Typography>
      )}
      <IconDetailDrawer icon={selectedIcon} open={open} onClose={off} />
    </>
  );
};
