import {
  CalendarIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from '@ozen-ui/icons';
import { capitalizeFirstLetter } from '@ozen-ui/kit/__inner__/esm/utils/capitalizeFirstLetter/capitalizeFirstLetter';
import { Button } from '@ozen-ui/kit/ButtonNext';
import { Grid, GridItem } from '@ozen-ui/kit/Grid';
import { IconButton } from '@ozen-ui/kit/IconButtonNext';
import { Option, Select, type SelectProps } from '@ozen-ui/kit/Select';
import { Stack } from '@ozen-ui/kit/Stack';
import { Typography } from '@ozen-ui/kit/Typography';
import { useBreakpoints } from '@ozen-ui/kit/useBreakpoints';

import { useCalendarContext } from '../../../../hooks/useCalendar';
import {
  CalendarPageStepType,
  useCalendarPageContext,
} from '../../CalendarPageProvider.tsx';

import s from './CalendarHeader.module.css';

// TODO: add justify-self an align-self to GridItem
export const CalendarHeader = () => {
  const {
    data: { calendars },
    controls: { offsetButton },
  } = useCalendarContext();

  const { m } = useBreakpoints();
  const isMobile = !m;

  const { step, goToStep } = useCalendarPageContext();

  const { month, year } = calendars[0];

  const handleChange: SelectProps['onChange'] = (value) => {
    goToStep(value as CalendarPageStepType);
  };

  return (
    <Grid cols={6} className={s.calendarHeader} gap="s">
      <GridItem col={{ xs: 6, s: 3, m: 5 }} className={s.calendarHeaderItem}>
        <div className={s.calendarNavigation}>
          {step === 'month' && (
            <>
              {!isMobile && (
                <Button
                  color="secondary"
                  variant="contained-additional"
                  {...offsetButton(new Date())}
                >
                  Сегодня
                </Button>
              )}
              <IconButton
                color="secondary"
                variant="ghost"
                icon={ChevronLeftIcon}
                {...offsetButton({ month: -1 })}
              />
              <IconButton
                color="secondary"
                variant="ghost"
                icon={ChevronRightIcon}
                {...offsetButton({ month: 1 })}
              />
              <Stack align="center" justify="center">
                <Typography variant="text-xl_1">
                  {capitalizeFirstLetter(`${month}`)}&nbsp;
                </Typography>
                <Typography variant="text-xl">{year}</Typography>
              </Stack>
            </>
          )}
          {step === 'year' && (
            <>
              {!isMobile && (
                <Button
                  color="secondary"
                  variant="contained-additional"
                  {...offsetButton(new Date())}
                >
                  Сегодня
                </Button>
              )}
              <IconButton
                color="secondary"
                variant="ghost"
                icon={ChevronLeftIcon}
                {...offsetButton({ year: -1 })}
              />
              <IconButton
                variant="ghost"
                icon={ChevronRightIcon}
                {...offsetButton({ year: 1 })}
              />
              <Typography variant="text-xl">{year}</Typography>
            </>
          )}
        </div>
      </GridItem>
      <GridItem col={{ xs: 6, s: 3, m: 1 }}>
        <Select
          value={step}
          onChange={handleChange}
          renderLeft={CalendarIcon}
          fullWidth
        >
          <Option label="Месяц" value="month" />
          <Option label="Год" value="year" />
        </Select>
      </GridItem>
    </Grid>
  );
};
