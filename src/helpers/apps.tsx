import { FC, ReactElement } from 'react';

import {
  ChatMenuIcon,
  DashboardIcon,
  GridIcon,
  TemplatesIcon,
  UserIcon,
  ShopIcon,
  PowerOutlineIcon,
  ChatInfoIcon,
} from '@ozen-ui/icons';

import {
  MainPage,
  ProfilePage,
  ChatPage,
  SandboxPage,
  OrdersPage,
  HelpCenterPage,
} from '../pages';

export interface App {
  icon?: FC;
  list?: Omit<App, 'list'>[];
  title: string;
  link?: string;
  count?: number;
  disableHeader?: boolean;
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
    title: 'Центр помощи',
    link: '/help-center',
    icon: ChatInfoIcon,
    disableHeader: true,
    component: () => <HelpCenterPage />,
    list: [
      {
        title: 'Детали',
        link: '/help-center/details',
        component: () => <div>details</div>,
      },
    ],
  },
  {
    title: ' Завершить сеанс',
    link: '/logout',
    icon: PowerOutlineIcon,
  },
];
