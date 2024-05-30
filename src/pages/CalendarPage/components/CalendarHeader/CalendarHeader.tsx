import {
  CalendarIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from '@ozen-ui/icons';
import { capitalizeFirstLetter } from '@ozen-ui/kit/__inner__/esm/utils/capitalizeFirstLetter/capitalizeFirstLetter';
import { Button } from '@ozen-ui/kit/ButtonNext';
import { IconButton } from '@ozen-ui/kit/IconButtonNext';
import { Option, Select, type SelectProps } from '@ozen-ui/kit/Select';
import { Stack } from '@ozen-ui/kit/Stack';
import { Typography } from '@ozen-ui/kit/Typography';

import { useCalendarContext } from '../../../../utils';
import {
  CalendarPageStepType,
  useCalendarPageContext,
} from '../../CalendarPageProvider.tsx';

import s from './CalendarHeader.module.css';

export const CalendarHeader = () => {
  const {
    data: { calendars },
    controls: { offset },
  } = useCalendarContext();

  const { step, goToStep } = useCalendarPageContext();

  const { month, year } = calendars[0];

  const handleChange: SelectProps['onChange'] = (value) => {
    goToStep(value as CalendarPageStepType);
  };

  return (
    <Stack
      align="center"
      justify="spaceBetween"
      className={s.calendarHeader}
      fullWidth
    >
      <Stack gap="s">
        <Button
          onClick={() => offset(new Date())}
          color="secondary"
          variant="contained-additional"
        >
          Сегодня
        </Button>
        {step === 'month' && (
          <Stack gap="s">
            <Stack align="center" gap="0" justify="center">
              <IconButton
                color="secondary"
                variant="ghost"
                icon={ChevronLeftIcon}
                onClick={() => offset({ month: -1 })}
              />
              <IconButton
                color="secondary"
                variant="ghost"
                icon={ChevronRightIcon}
                onClick={() => offset({ month: 1 })}
              />
            </Stack>
            <Stack align="center" justify="center">
              <Typography variant="text-xl_1">
                {capitalizeFirstLetter(`${month}`)}&nbsp;
              </Typography>
              <Typography variant="text-xl">{year}</Typography>
            </Stack>
          </Stack>
        )}
        {step === 'year' && (
          <Stack gap="s">
            <Stack align="center" justify="center">
              <IconButton
                color="secondary"
                variant="ghost"
                icon={ChevronLeftIcon}
                onClick={() => offset({ year: -1 })}
              />

              <IconButton
                color="secondary"
                variant="ghost"
                icon={ChevronRightIcon}
                onClick={() => offset({ year: 1 })}
              />
            </Stack>
            <Stack align="center" justify="center">
              <Typography variant="text-xl">{year}</Typography>
            </Stack>
          </Stack>
        )}
      </Stack>
      <Select value={step} onChange={handleChange} renderLeft={CalendarIcon}>
        <Option label="Месяц" value="month" />
        <Option label="Год" value="year" />
      </Select>
    </Stack>
  );
};
