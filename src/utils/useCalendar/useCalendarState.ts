import { mergeDeep } from '@ozen-ui/kit/__inner__/esm/utils/object/mergeDeep/mergeDeep';

import type { UseCalendarConfig } from './types.ts';

export function useCalendarState(config?: UseCalendarConfig) {
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
    options,
  };
}
