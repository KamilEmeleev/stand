import { Grid, GridItem } from '@ozen-ui/kit/Grid';
import { spacing } from '@ozen-ui/kit/MixSpacing';

import { useCalendarContext } from '../../../../hooks/useCalendar';
import { useCalendarPageContext } from '../../CalendarPageProvider.tsx';

import { CalendarGrid } from './components';

export const CalendarYearView = () => {
  const {
    data: { calendars, weekDays },
  } = useCalendarContext();

  const { drawerOpen } = useCalendarPageContext();

  return (
    <Grid
      cols={{ xs: 1, s: 2, m: 3, l: drawerOpen ? 3 : 4 }}
      gap="l"
      style={{ overflow: 'auto' }}
      align="center"
      justify="center"
      className={spacing({ p: 'xl' })}
    >
      {calendars.map((calendar) => (
        <GridItem key={`${calendar.year}-${calendar.month}`}>
          <CalendarGrid calendar={calendar} weekDays={weekDays} />
        </GridItem>
      ))}
    </Grid>
  );
};
