import { FC } from 'react';

import { SortDefaultIcon } from '@ozen-ui/icons';
import { Option, Select, type SelectProps } from '@ozen-ui/kit/Select';

import { OrdersSort } from '../../types.ts';

import s from './OrdersPageSortByDate.module.css';

export const OrdersPageSortByDate: FC<{
  value?: string;
  setSort: (params: OrdersSort) => void;
}> = ({ value, setSort }) => {
  const onChange: SelectProps['onChange'] = (value) => {
    setSort({ date: value as OrdersSort['date'] });
  };

  return (
    <Select
      value={value}
      onChange={onChange}
      className={s.select}
      label="Сортировать по дате"
      renderLeft={SortDefaultIcon}
      fullWidth
    >
      <Option value="ASC" label="Сначала новые" />
      <Option value="DESC" label="Сначала старые" />
    </Select>
  );
};
