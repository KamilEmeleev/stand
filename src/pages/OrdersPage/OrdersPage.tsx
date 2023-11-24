import { useState, useEffect } from 'react';

import { Card } from '@ozen-ui/kit/Card';
import { Stack } from '@ozen-ui/kit/Stack';
import { useBoolean } from '@ozen-ui/kit/useBoolean';
import { useBreakpoints } from '@ozen-ui/kit/useBreakpoints';
import { useTimer } from '@ozen-ui/kit/useTimer';

import { orders, type Order, OrderStatus } from '../../helpers';

import {
  OrdersPageDrawer,
  OrdersPageFilter,
  OrdersPageTable,
} from './components';
import s from './OrdersPage.module.css';

export type OrdersDateFilter = 'newest' | 'oldest';
export type OrderStatusFilter = OrderStatus;

export type OrdersFilter = {
  status?: OrderStatusFilter;
  date?: OrdersDateFilter;
  value?: string;
};

export const OrdersPage = () => {
  const [filter, addFilter] = useState<OrdersFilter>({
    date: 'newest',
    value: '',
  });

  const [order, setOrder] = useState<Order>();
  const [open, { on, off }] = useBoolean(false);
  const [loading, { on: onLoading, off: offLoading }] = useBoolean(false);
  const { m } = useBreakpoints();
  const isMobile = !m;

  const setFilter = (params: OrdersFilter) => {
    addFilter({
      ...filter,
      ...params,
    });
  };

  const filteredOrders = orders
    .filter(({ status, id }) => {
      return (
        (status === filter?.status || !filter?.status) &&
        id.toLowerCase().includes(filter.value?.toLowerCase() || '')
      );
    })
    .sort((a, b) => {
      if (filter.date === 'newest') {
        return new Date(a.date).getTime() - new Date(b.date).getTime() > 0
          ? -1
          : 1;
      }

      return new Date(a.date).getTime() - new Date(b.date).getTime() > 0
        ? 1
        : -1;
    });

  const { startTimer } = useTimer({
    startTime: 0,
    endTime: 500,
    interval: 500,
    onTimerEnd: offLoading,
  });

  useEffect(() => {
    onLoading();
    startTimer();
  }, [order, onLoading, startTimer]);

  const handleClickOnRow = (id: string) => {
    setOrder(filteredOrders.find(({ id: idOrder }) => id === idOrder));
    on();
  };

  const handleClose = () => {
    off();
  };

  return (
    <Card
      as={Stack}
      direction="column"
      borderWidth="none"
      className={s.ordersPage}
      fullWidth
    >
      <Stack
        direction="column"
        className={s.container}
        style={{
          marginRight: open && !isMobile ? 480 : 0,
        }}
      >
        <OrdersPageDrawer
          order={order}
          open={open}
          onClose={handleClose}
          onExited={() => {
            setOrder(undefined);
          }}
          loading={loading}
        />
        <OrdersPageFilter filter={filter} setFilter={setFilter} />
        <OrdersPageTable
          handleClickOnRow={handleClickOnRow}
          orders={filteredOrders}
        />
      </Stack>
    </Card>
  );
};
