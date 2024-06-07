import { FC, useState } from 'react';

import { Divider } from '@ozen-ui/kit/Divider';
import { spacing } from '@ozen-ui/kit/MixSpacing';
import { Stack } from '@ozen-ui/kit/Stack';
import { Tab, Tabs } from '@ozen-ui/kit/Tabs';
import { Tag } from '@ozen-ui/kit/TagNext';
import clsx from 'clsx';

import { Order, OrderStatus } from '../../../../../../helpers';
import { OrdersFilter } from '../../types';

import s from './OrdersPageFilterByStatus.module.css';

export const OrdersPageFilterByStatus: FC<{
  orders?: Order[];
  setFilter?: (params: OrdersFilter) => void;
}> = ({ setFilter }) => {
  const [value, setValue] = useState(0);

  const handleClick = (status?: OrderStatus) => () => {
    setFilter?.({ status });
  };

  return (
    <Stack direction="column">
      <Tabs
        value={value}
        onChange={(_, value) => setValue(value as number)}
        className={clsx(spacing({ px: 'xl', pb: 0, pt: 's' }), s.tabs)}
      >
        <Tab
          label="Все"
          onClick={handleClick(undefined)}
          iconRight={() => <Tag label="9" color="neutral" size="xs" />}
        />
        <Tab
          label="Оплаченные"
          onClick={handleClick('payed')}
          iconRight={() => <Tag label="5" color="success" size="xs" />}
        />
        <Tab
          label="Отмененные"
          onClick={handleClick('declined')}
          iconRight={() => <Tag label="3" color="error" size="xs" />}
        />
        <Tab
          label="В обработке"
          onClick={handleClick('inProgress')}
          iconRight={() => <Tag label="1" color="warning" size="xs" />}
        />
      </Tabs>
      <Divider color="secondary" className={s.divider} />
    </Stack>
  );
};
