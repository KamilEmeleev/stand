import { sum } from '../utils';

export const orderStatusVariant = ['payed', 'declined', 'inProgress'] as const;

export type OrderStatus = (typeof orderStatusVariant)[number];

export type Order = {
  id: string;
  type: string;
  name: string;
  sender: string;
  detail?: string;
  date: string;
  amount: string;
  status: OrderStatus;
};

export const orders: Order[] = [
  {
    id: '90336',
    type: 'Внутренний',
    name: 'Велосипед «Десна 3000»',
    sender: 'ООО «Педали»',
    date: '2023-11-11T00:00:00.000Z',
    status: 'payed',
    amount: sum(100000),
    detail: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
  },
  {
    id: '90337',
    type: 'Международный',
    name: 'Часы T-Shock',
    sender: 'T-Shock Inc.',
    date: '2023-11-11T00:00:00.000Z',
    status: 'payed',
    amount: sum(15800),
    detail: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
  },
  {
    id: '90338',
    type: 'Внутренний',
    name: 'Смартфон Xi Galaxy M11',
    sender: 'Xi Kazakhstan',
    date: '2023-10-10T00:00:00.000Z',
    status: 'payed',
    amount: sum(216000),
    detail: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
  },
  {
    id: '90339',
    type: 'Международный',
    name: 'TF LeBron Ground',
    sender: 'TF Sneakers',
    date: '2023-10-09T00:00:00.000Z',
    status: 'payed',
    amount: sum(16500),
    detail: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
  },
  {
    id: '90340',
    type: 'Международный',
    name: 'Очки TayLan',
    sender: 'TayLan Glasses',
    date: '2023-10-05T00:00:00.000Z',
    status: 'payed',
    amount: sum(50000),
    detail: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
  },
  {
    id: '90341',
    type: 'Международный',
    name: 'Очки TayLan',
    sender: 'TayLan Glasses',
    date: '2023-10-05T00:00:00.000Z',
    status: 'inProgress',
    amount: sum(50000),
    detail: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
  },
  {
    id: '90342',
    type: 'Международный',
    name: 'Очки TayLan',
    sender: 'TayLan Glasses',
    date: '2023-10-05T00:00:00.000Z',
    status: 'declined',
    amount: sum(50000),
    detail: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
  },
  {
    id: '90343',
    type: 'Международный',
    name: 'Очки TayLan',
    sender: 'TayLan Glasses',
    date: '2023-10-05T00:00:00.000Z',
    status: 'declined',
    amount: sum(50000),
    detail: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
  },
  {
    id: '90344',
    type: 'Международный',
    name: 'Очки TayLan',
    sender: 'TayLan Glasses',
    date: '2023-10-05T00:00:00.000Z',
    status: 'declined',
    amount: sum(50000),
    detail: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
  },
];
