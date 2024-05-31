import { useState } from 'react';

import { Card } from '@ozen-ui/kit/Card';
import { Stack } from '@ozen-ui/kit/Stack';
import { useBreakpoints } from '@ozen-ui/kit/useBreakpoints';

import { CalendarProvider } from '../../hooks/useCalendar';

import s from './CalendarPage.module.css';
import {
  CalendarPageProvider,
  useCalendarPageContext,
} from './CalendarPageProvider.tsx';
import { CalendarBody, CalendarHeader, CalendarDrawer } from './components';

const CalendarConsumer = () => {
  const { step, drawerOpen, setDrawer } = useCalendarPageContext();
  const [date, setDate] = useState(new Date());
  const { l } = useBreakpoints();
  const isMediumScreen = !l;

  const onChange = (date: Date) => {
    setDate(date);
  };

  return (
    <CalendarProvider
      config={{
        date,
        onChange,
        options: {
          calendar: {
            offset: step === 'year' ? 'year' : undefined,
          },
        },
      }}
    >
      <Card borderWidth="none" className={s.calendar}>
        <Stack
          direction="column"
          gap="0"
          className={s.calendarContainer}
          style={{
            marginRight: drawerOpen && !isMediumScreen ? 480 : 0,
          }}
        >
          <CalendarHeader />
          <CalendarBody />
          <CalendarDrawer
            open={drawerOpen}
            onClose={setDrawer.off}
            disablePortal
            disableClickOutside
            hideBackdrop
          />
        </Stack>
      </Card>
    </CalendarProvider>
  );
};

export const CalendarPage = () => {
  return (
    <CalendarPageProvider>
      <CalendarConsumer />
    </CalendarPageProvider>
  );
};
