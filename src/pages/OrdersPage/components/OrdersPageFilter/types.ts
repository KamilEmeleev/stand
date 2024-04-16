import { Dispatch, SetStateAction } from 'react';

import { Order, OrderStatus } from '../../../../helpers';

export type OrdersDateFilter = {
  to?: Date | null;
  from?: Date | null;
};

export type OrderStatusFilter = OrderStatus;

export type OrdersFilter = {
  number?: string;
  date?: OrdersDateFilter;
  status?: OrderStatusFilter;
};

export type OrdersSort = {
  date?: 'ASC' | 'DESC';
};

export type OrdersPageFilterProps = {
  orders: Order[];
  setOrders: Dispatch<SetStateAction<Order[]>>;
};
