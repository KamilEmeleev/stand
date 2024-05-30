import { Grid, GridItem } from '@ozen-ui/kit/Grid';
import { spacing } from '@ozen-ui/kit/MixSpacing';

import { useCalendarContext } from '../../../../hooks/useCalendar';

import { CalendarGrid } from './components';

export const CalendarYearView = () => {
  const {
    data: { calendars, weekDays },
  } = useCalendarContext();

  return (
    <Grid
      cols={{ xs: 1, m: 3, l: 4 }}
      gap="l"
      style={{ overflow: 'auto' }}
      className={spacing({ p: 'xl' })}
    >
      {calendars.map((calendar) => (
        <GridItem>
          <CalendarGrid calendar={calendar} weekDays={weekDays} />
        </GridItem>
      ))}
    </Grid>
  );
};
