import { FC, ReactElement } from 'react';

import {
  ChatMenuIcon,
  DashboardIcon,
  GridIcon,
  TemplatesIcon,
  UserIcon,
  ShopIcon,
  PowerOutlineIcon,
  QuestionCircleOutlineIcon,
  TrendsIcon,
} from '@ozen-ui/icons';

import {
  MainPage,
  ProfilePage,
  ChatPage,
  SandboxPage,
  OrdersPage,
  HelpCenterPage,
  HelpCenterDetailsPage,
  LiveCoding,
} from '../pages';

export interface App {
  icon?: FC;
  title: string;
  link?: string;
  count?: number;
  disableHeader?: boolean;
  component?: (params: unknown) => ReactElement;
}

const routes: { [key in string]: App } = {
  main: {
    title: 'Главная',
    link: '/',
    icon: DashboardIcon,
    component: () => <MainPage />,
  },
  profile: {
    title: 'Профиль',
    link: '/profile',
    icon: UserIcon,
    component: () => <ProfilePage />,
  },
  chat: {
    title: 'Онлайн чат',
    link: '/chat',
    icon: ChatMenuIcon,
    component: () => <ChatPage />,
    count: 3,
  },
  orders: {
    title: 'Заказы',
    link: '/orders',
    icon: ShopIcon,
    component: () => <OrdersPage />,
  },
  sandbox: {
    title: 'Песочница',
    link: '/sandbox',
    icon: TemplatesIcon,
    component: () => <SandboxPage />,
  },
  logout: {
    title: 'Завершить сеанс',
    link: '/logout',
    icon: PowerOutlineIcon,
  },
  level0: {
    title: 'Уровень 0',
    icon: GridIcon,
  },
  level1a: {
    title: 'Уровень 1a',
  },
  level1b: {
    title: 'Уровень 1b',
  },
  'help-center': {
    title: 'Центр помощи',
    link: '/help-center',
    icon: QuestionCircleOutlineIcon,
    disableHeader: true,
    component: () => <HelpCenterPage />,
  },
  'help-center-details': {
    title: 'Ответ',
    link: '/help-center/:id',
    component: () => {
      return <HelpCenterDetailsPage />;
    },
  },
  'live-coding': {
    title: 'Live coding',
    icon: TrendsIcon,
    link: '/live-coding',
    component: () => {
      return <LiveCoding />;
    },
  },
};

export type Navigation = {
  routes: typeof routes;
  apps: Array<keyof typeof routes | (keyof typeof routes)[]>;
};

export const navigation: Navigation = {
  routes,
  apps: [
    'main',
    'profile',
    'chat',
    'orders',
    'help-center',
    'live-coding',
    'sandbox',
    ['level0', 'level1a', 'level1b'],
    'logout',
  ],
};
