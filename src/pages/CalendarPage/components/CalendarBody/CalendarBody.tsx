import { useCalendarPageContext } from '../../CalendarPageProvider.tsx';
import { CalendarMonthView } from '../CalendarMonthView';
import { CalendarYearView } from '../CalendarYearView';

import s from './CalendarBody.module.css';

export const CalendarBody = () => {
  const { step } = useCalendarPageContext();

  let content = null;

  if (step === 'month') {
    content = <CalendarMonthView />;
  }

  if (step === 'year') {
    content = <CalendarYearView />;
  }

  return <div className={s.calendarBody}>{content}</div>;
};
