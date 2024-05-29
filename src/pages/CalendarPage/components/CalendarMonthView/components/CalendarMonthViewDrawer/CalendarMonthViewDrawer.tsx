import { FC } from 'react';

import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  type DrawerProps,
  DrawerTitle,
} from '@ozen-ui/kit/Drawer';

import { useCalendarPage } from '../../../../CalendarPageContext.ts';

export const CalendarMonthViewDrawer: FC<DrawerProps> = (props) => {
  const {
    data: { date },
  } = useCalendarPage();

  const d = date?.toLocaleString('ru-RU', {
    month: 'long',
    weekday: 'long',
    day: 'numeric',
  });

  return (
    <Drawer {...props}>
      <DrawerHeader>
        <DrawerTitle>{d}</DrawerTitle>
      </DrawerHeader>
      <DrawerBody>Расписание дня по часам</DrawerBody>
    </Drawer>
  );
};
