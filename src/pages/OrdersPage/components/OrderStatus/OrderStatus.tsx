import { FC, ReactElement } from 'react';

import { Tag } from '@ozen-ui/kit/Tag';

import { type OrderStatus as OrderStatusType } from '../../../../helpers';

export type OrdersStatuses = { [key in OrderStatusType]: ReactElement };

const statuses: OrdersStatuses = {
  payed: <Tag as="span" variant="success" label="Оплачен" />,
  declined: <Tag as="span" variant="error" label="Отклонён" />,
  inProgress: <Tag as="span" variant="warning" label="В обработке" />,
};

export const OrderStatus: FC<{ status: OrderStatusType }> = ({ status }) => {
  return statuses[status];
};
