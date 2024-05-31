import { FC } from 'react';

import { Divider } from '@ozen-ui/kit/Divider';
import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  type DrawerProps,
  DrawerTitle,
} from '@ozen-ui/kit/Drawer';
import { Stack } from '@ozen-ui/kit/Stack';
import { Typography } from '@ozen-ui/kit/Typography';

import { useCalendarContext } from '../../../../hooks/useCalendar';
import { getTime } from '../../../../utils';

import s from './CalendarDrawer.module.css';

export const CalendarDrawer: FC<DrawerProps> = (props) => {
  const {
    data: { date, time },
  } = useCalendarContext();

  const d = date?.toLocaleString('ru-RU', {
    month: 'long',
    weekday: 'long',
    day: 'numeric',
  });

  return (
    <Drawer {...props} windowProps={{ className: s.drawer }}>
      <DrawerHeader>
        <DrawerTitle>{d}</DrawerTitle>
      </DrawerHeader>
      <DrawerBody>
        <Stack gap="l" direction="column" fullWidth>
          {time.map(({ $date }) => {
            const minutes = $date.getMinutes();

            return (
              <Stack gap="xl" fullWidth align="center" key={String($date)}>
                <Typography
                  color="secondary"
                  style={{ visibility: minutes ? 'hidden' : 'visible' }}
                >
                  {getTime($date)}
                </Typography>
                <Divider
                  color="secondary"
                  style={{
                    flexShrink: '1',
                    borderStyle: minutes ? 'dashed' : 'solid',
                  }}
                />
              </Stack>
            );
          })}
        </Stack>
      </DrawerBody>
    </Drawer>
  );
};
