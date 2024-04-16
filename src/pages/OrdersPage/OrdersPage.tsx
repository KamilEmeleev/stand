import { useEffect, useState } from 'react';

import { Card } from '@ozen-ui/kit/Card';
import { Stack } from '@ozen-ui/kit/Stack';
import { useBoolean } from '@ozen-ui/kit/useBoolean';
import { useBreakpoints } from '@ozen-ui/kit/useBreakpoints';
import { useTimer } from '@ozen-ui/kit/useTimer';

import { type Order, orders } from '../../helpers';

import {
  OrdersPageDrawer,
  OrdersPageFilter,
  OrdersPageTable,
} from './components';
import s from './OrdersPage.module.css';

export const OrdersPage = () => {
  const [selectedOrder, setSelectedOrder] = useState<Order>();
  const [filteredOrders, setFilteredOrders] = useState<Order[]>(orders);
  const [open, setOpen] = useBoolean(false);
  const [loading, setLoading] = useBoolean(false);
  const { m } = useBreakpoints();
  const isMobile = !m;

  const { startTimer } = useTimer({
    startTime: 0,
    endTime: 500,
    interval: 500,
    onTimerEnd: setLoading.off,
  });

  useEffect(() => {
    setLoading.on();
    startTimer();
  }, [selectedOrder, startTimer]);

  const handleClickRow = (id: string) => {
    setSelectedOrder(filteredOrders.find((order) => id === order.id));
    setOpen.on();
  };

  const handleExited = () => {
    setSelectedOrder(undefined);
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
        <OrdersPageFilter orders={orders} setOrders={setFilteredOrders} />
        <OrdersPageTable
          orders={filteredOrders}
          handleClickOnRow={handleClickRow}
        />
        <OrdersPageDrawer
          open={open}
          loading={loading}
          order={selectedOrder}
          onClose={setOpen.off}
          onExited={handleExited}
        />
      </Stack>
    </Card>
  );
};
