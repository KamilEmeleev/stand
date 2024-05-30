import { useState } from 'react';

import { mergeDeep } from '@ozen-ui/kit/__inner__/esm/utils/object/mergeDeep/mergeDeep';

import type { UseCalendarConfig } from './types';

export function useCalendarState(config?: UseCalendarConfig) {
  const [offsetDate, setOffsetDate] = useState<Date>(
    config?.date || new Date()
  );

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

  return {
    ...config,
    offsetDate,
    setOffsetDate,
    options,
  };
}
