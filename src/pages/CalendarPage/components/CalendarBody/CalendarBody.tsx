import { useCalendarPageContext } from '../../CalendarPageProvider.tsx';
import { CalendarMonthView } from '../CalendarMonthView';
import { CalendarYearView } from '../CalendarYearView';

export const CalendarBody = () => {
  const { step } = useCalendarPageContext();

  if (step === 'month') {
    return <CalendarMonthView />;
  }

  if (step === 'year') {
    return <CalendarYearView />;
  }

  return null;
};
