import { useCalendarPageContext } from '../../CalendarPageProvider.tsx';

import { CalendarTable } from './components';

export const CalendarMonthView = () => {
  const { setDrawer } = useCalendarPageContext();

  return <CalendarTable cellProps={{ onClick: setDrawer.on }} />;
};
