import { FC, ReactElement } from 'react';

import { Tag } from '@ozen-ui/kit/TagNext';

import { type OrderStatus as OrderStatusType } from '../../../../helpers';

export type OrdersStatuses = Record<OrderStatusType, ReactElement>;

const statuses: OrdersStatuses = {
  payed: <Tag as="span" color="success" label="Оплачен" size="s" />,
  declined: <Tag as="span" color="error" label="Отклонён" size="s" />,
  inProgress: <Tag as="span" color="warning" label="В обработке" size="s" />,
};

export const OrderStatus: FC<{ status: OrderStatusType }> = ({ status }) => {
  return statuses[status];
};
