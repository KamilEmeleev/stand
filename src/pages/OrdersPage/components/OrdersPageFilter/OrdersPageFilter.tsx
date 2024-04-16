import { FC, useEffect, useState, useMemo } from 'react';

import { Divider } from '@ozen-ui/kit/Divider';
import { Grid, GridItem } from '@ozen-ui/kit/Grid';
import { spacing } from '@ozen-ui/kit/MixSpacing';
import { Stack } from '@ozen-ui/kit/Stack';

import {
  OrdersPageFilterByDate,
  OrdersPageFilterByNumber,
  OrdersPageFilterByStatus,
  OrdersPageSortByDate,
} from './components';
import { OrdersFilter, OrdersPageFilterProps, OrdersSort } from './types.ts';
import { dateInPeriod } from './utils.ts';

export const OrdersPageFilter: FC<OrdersPageFilterProps> = ({
  orders,
  setOrders,
}) => {
  const [filter, addFilter] = useState<OrdersFilter>({
    number: '',
  });

  const [sort, addSort] = useState<OrdersSort>({ date: 'ASC' });

  const setFilter = (params: OrdersFilter) => {
    addFilter({
      ...filter,
      ...params,
    });
  };

  const setSort = (params: OrdersSort) => {
    addSort({
      ...sort,
      ...params,
    });
  };

  const filteredOrders = useMemo(() => {
    return orders
      .filter(({ status, id, date }) => {
        return (
          (status === filter?.status || !filter?.status) &&
          id.toLowerCase().includes(filter.number?.toLowerCase() || '') &&
          dateInPeriod({
            date: new Date(date),
            min: filter.date?.from,
            max: filter.date?.to,
          })
        );
      })
      .sort((a, b) => {
        if (sort.date === 'ASC') {
          return new Date(a.date).getTime() - new Date(b.date).getTime() > 0
            ? -1
            : 1;
        }

        return new Date(a.date).getTime() - new Date(b.date).getTime() > 0
          ? 1
          : -1;
      });
  }, [orders, filter, sort]);

  useEffect(() => {
    setOrders(filteredOrders);
  }, [filteredOrders, setOrders]);

  return (
    <Stack gap="xl" direction="column" fullWidth>
      <OrdersPageFilterByStatus orders={orders} setFilter={setFilter} />
      <Grid cols={12} gap="l" className={spacing({ px: 'xl' })}>
        <GridItem col={{ xs: 12, s: 12, m: 4 }}>
          <OrdersPageFilterByNumber
            value={filter.number}
            setFilter={setFilter}
          />
        </GridItem>
        <GridItem col={{ xs: 12, s: 7, m: 5 }}>
          <OrdersPageFilterByDate value={filter.date} setFilter={setFilter} />
        </GridItem>
        <GridItem col={{ xs: 12, s: 5, m: 3 }}>
          <OrdersPageSortByDate value={sort.date} setSort={setSort} />
        </GridItem>
      </Grid>
      <Divider color="secondary" />
    </Stack>
  );
};
