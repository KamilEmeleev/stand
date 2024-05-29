import { useState } from 'react';

import { Card } from '@ozen-ui/kit/Card';
import { spacing } from '@ozen-ui/kit/MixSpacing';

import { useCalendar } from '../../utils';

import { CalendarPageContext } from './CalendarPageContext.ts';
import { CalendarBody, CalendarHeader } from './components';

export const CalendarPage = () => {
  const [date, setDate] = useState(new Date());

  const onChange = (date: Date) => {
    setDate(date);
  };

  return (
    <CalendarPageContext.Provider value={useCalendar({ date, onChange })}>
      <Card borderWidth="none" className={spacing({ p: 0 })}>
        <CalendarHeader />
        <CalendarBody />
      </Card>
    </CalendarPageContext.Provider>
  );
};
