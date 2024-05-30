import { useState } from 'react';

import { Card } from '@ozen-ui/kit/Card';
import { spacing } from '@ozen-ui/kit/MixSpacing';

import { CalendarProvider } from '../../hooks/useCalendar';

import {
  CalendarPageProvider,
  useCalendarPageContext,
} from './CalendarPageProvider.tsx';
import { CalendarBody, CalendarHeader } from './components';

const CalendarConsumer = () => {
  const { step } = useCalendarPageContext();
  const [date, setDate] = useState(new Date());

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
      <Card borderWidth="none" className={spacing({ p: 0 })}>
        <CalendarHeader />
        <CalendarBody />
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
