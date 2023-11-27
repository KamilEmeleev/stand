import { FC, ReactElement } from 'react';

import {
  ChatMenuIcon,
  DashboardIcon,
  GridIcon,
  TemplatesIcon,
  UserIcon,
  ShopIcon,
  PowerOutlineIcon,
} from '@ozen-ui/icons';

import {
  MainPage,
  ProfilePage,
  ChatPage,
  SandboxPage,
  OrdersPage,
} from '../pages';

export interface App {
  title: string;
  link?: string;
  count?: number;
  list?: App[];
  icon?: FC;
  component?: () => ReactElement;
}

export type Apps = App[];

export const apps: Apps = [
  {
    title: 'Главная',
    link: '/',
    icon: DashboardIcon,
    component: () => <MainPage />,
  },
  {
    title: 'Профиль',
    link: '/profile',
    icon: UserIcon,
    component: () => <ProfilePage />,
  },
  {
    title: 'Онлайн чат',
    link: '/chat',
    icon: ChatMenuIcon,
    component: () => <ChatPage />,
    count: 3,
  },
  {
    title: 'Уровень 0',
    icon: GridIcon,
    list: [
      {
        title: 'Уровень 1a',
      },
      {
        title: 'Уровень 1b',
      },
    ],
  },
  {
    title: 'Заказы',
    link: '/orders',
    icon: ShopIcon,
    component: () => <OrdersPage />,
  },
  {
    title: 'Песочница',
    link: '/sandbox',
    icon: TemplatesIcon,
    component: () => <SandboxPage />,
  },
  {
    title: ' Завершить сеанс',
    link: '/logout',
    icon: PowerOutlineIcon,
  },
];
