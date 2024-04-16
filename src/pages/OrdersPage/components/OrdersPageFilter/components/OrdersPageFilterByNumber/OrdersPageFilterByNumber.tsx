import { FC } from 'react';

import { CrossIcon, SearchIcon } from '@ozen-ui/icons';
import { IconButton } from '@ozen-ui/kit/IconButtonNext';
import { Input } from '@ozen-ui/kit/Input';

import { OrdersFilter } from '../../types.ts';

import s from './OrdersPageFilterByNumber.module.css';

export const OrdersPageFilterByNumber: FC<{
  value?: string;
  setFilter: (params: OrdersFilter) => void;
}> = ({ value, setFilter }) => {
  return (
    <Input
      value={value}
      className={s.input}
      renderLeft={SearchIcon}
      onChange={(event) => {
        setFilter({ number: event.target.value });
      }}
      renderRight={() =>
        value ? (
          <IconButton
            icon={CrossIcon}
            tabIndex={-1}
            variant="function"
            onClick={() => {
              setFilter({ number: '' });
            }}
          />
        ) : null
      }
      label="Поиск по номеру заказа"
      fullWidth
    />
  );
};
