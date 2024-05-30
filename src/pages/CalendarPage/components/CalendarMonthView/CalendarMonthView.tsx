import { useBoolean } from '@ozen-ui/kit/useBoolean';

import { CalendarMonthViewDrawer, CalendarTable } from './components';

export const CalendarMonthView = () => {
  const [open, { off, toggle }] = useBoolean(false);

  return (
    <>
      <CalendarTable cellProps={{ onClick: toggle }} />
      <CalendarMonthViewDrawer open={open} onClose={off} />
    </>
  );
};
