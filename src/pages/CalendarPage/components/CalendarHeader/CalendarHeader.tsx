import {
  CalendarIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from '@ozen-ui/icons';
import { Button } from '@ozen-ui/kit/ButtonNext';
import { IconButton } from '@ozen-ui/kit/IconButtonNext';
import { Option, Select } from '@ozen-ui/kit/Select';
import { Stack } from '@ozen-ui/kit/Stack';
import { Typography } from '@ozen-ui/kit/Typography';

import { useCalendarContext } from '../../../../utils';

import s from './CalendarHeader.module.css';

export const CalendarHeader = () => {
  const {
    data: { calendars },
    controls: { offset },
  } = useCalendarContext();

  const { month, year } = calendars[0];

  return (
    <Stack
      align="center"
      justify="spaceBetween"
      className={s.calendarHeader}
      fullWidth
    >
      <Select defaultValue="Месяц" renderLeft={CalendarIcon}>
        <Option label="Месяц" value="Месяц" />
        <Option label="Год" value="Год" disabled />
      </Select>
      <Stack align="center" gap="l" justify="center">
        <IconButton
          color="secondary"
          variant="ghost"
          icon={ChevronLeftIcon}
          onClick={() => offset({ month: -1 })}
        />
        <Stack align="center" justify="center">
          <Typography variant="text-xl_1">{month}&nbsp;</Typography>
          <Typography variant="text-xl">{year}</Typography>
        </Stack>
        <IconButton
          color="secondary"
          variant="ghost"
          icon={ChevronRightIcon}
          onClick={() => offset({ month: 1 })}
        />
      </Stack>
      <Button onClick={() => offset(new Date())} color="secondary">
        Сегодня
      </Button>
    </Stack>
  );
};
