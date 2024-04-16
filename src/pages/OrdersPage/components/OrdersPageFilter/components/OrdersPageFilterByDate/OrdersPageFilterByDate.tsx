import { FC } from 'react';

import { DatePicker, type DatePickerOnChange } from '@ozen-ui/kit/DatePicker';
import { Stack } from '@ozen-ui/kit/Stack';

import { OrdersFilter } from '../../types.ts';

export const OrdersPageFilterByDate: FC<{
  value?: OrdersFilter['date'];
  setFilter?: (params: OrdersFilter) => void;
}> = ({ value, setFilter }) => {
  const handleChangeFrom: DatePickerOnChange = (from) => {
    setFilter?.({
      date: {
        ...value,
        from,
      },
    });
  };

  const handleChangeTo: DatePickerOnChange = (to) => {
    setFilter?.({
      date: {
        ...value,
        to,
      },
    });
  };

  return (
    <Stack gap="l" fullWidth direction={{ xs: 'column', s: 'row' }}>
      <DatePicker
        label="Дата (начало)"
        value={value?.from || null}
        maxDate={value?.to || undefined}
        onChange={handleChangeFrom}
        fullWidth
      />
      <DatePicker
        label="Дата (конец)"
        value={value?.to || null}
        minDate={value?.from || undefined}
        onChange={handleChangeTo}
        fullWidth
      />
    </Stack>
  );
};
