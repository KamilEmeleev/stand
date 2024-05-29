import { useState } from 'react';

import { mergeDeep } from '@ozen-ui/kit/__inner__/esm/utils/object/mergeDeep/mergeDeep';

import { createDays } from './create-days.ts';
import { createWeekdays } from './create-weekdays.ts';
import type { UseCalendarConfig, UseCalendarReturn } from './types.ts';
import { offset } from './utils.ts';

export function useCalendar(config?: UseCalendarConfig): UseCalendarReturn {
  const date = config?.date || new Date();
  const [offsetDate, setOffsetDate] = useState<Date>(date);

  const month = offsetDate.getMonth();
  const year = offsetDate.getFullYear();

  const options = mergeDeep<UseCalendarConfig['options']>(
    {
      startDay: 1,
      locale: {
        locales: 'ru-RU',
        month: 'long',
        year: 'numeric',
        weekday: 'short',
      },
    },
    config?.options
  );

  const days = createDays({ month, year }, options);
  const weekDays = createWeekdays(days, options);

  return {
    data: {
      calendars: [
        {
          month: offsetDate.toLocaleDateString(options?.locale.locales, {
            month: 'long',
          }),
          year: offsetDate.toLocaleDateString(options?.locale.locales, {
            year: 'numeric',
          }),
          days,
        },
      ],
      weekDays,
    },
    controls: {
      offset: (params) => setOffsetDate(offset(offsetDate, params)),
      dayButton: (date) => {
        return {
          onClick: () => console.log(date),
        };
      },
    },
  };
}
