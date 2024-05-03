import { FC, ReactElement } from 'react';

import {
  ChatMenuIcon,
  DashboardIcon,
  TemplatesIcon,
  UserCircleOutlineIcon,
  CartHandIcon,
  PowerOutlineIcon,
  QuestionCircleOutlineIcon,
  FlameIcon,
  BrOzenIcon,
} from '@ozen-ui/icons';
import { type ContainerBaseProps } from '@ozen-ui/kit/Container';

import {
  MainPage,
  ProfilePage,
  ChatPage,
  SandboxPage,
  OrdersPage,
  HelpCenterPage,
  HelpCenterDetailsPage,
  LiveCoding,
  IconsPage,
  GettingStartedPage,
} from '../pages';

export interface App {
  icon?: FC;
  title: string;
  link?: string;
  count?: number;
  containerProps?: Partial<ContainerBaseProps>;
  disableHeader?: boolean;
  component?: (params: unknown) => ReactElement;
}

const routes: { [key in string]: App } = {
  ozenbook: {
    title: 'Özenbook',
    icon: BrOzenIcon,
  },
  icons: {
    title: 'Витрина иконок',
    link: '/ozenbook/icons',
    containerProps: { maxWidth: 'm' },
    component: () => <IconsPage />,
  },
  'getting-started': {
    title: 'Начать работу',
    link: '/ozenbook/getting-started',
    containerProps: { maxWidth: 'm' },
    component: () => <GettingStartedPage />,
  },
  main: {
    title: 'Главная',
    link: '/',
    icon: DashboardIcon,
    component: () => <MainPage />,
  },
  profile: {
    title: 'Профиль',
    link: '/profile',
    icon: UserCircleOutlineIcon,
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
    icon: CartHandIcon,
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
  'help-center': {
    title: 'Центр помощи',
    link: '/help-center',
    icon: QuestionCircleOutlineIcon,
    disableHeader: true,
    containerProps: { maxWidth: 'm' },
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
    icon: FlameIcon,
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
    ['ozenbook', 'getting-started', 'icons'],
    'logout',
  ],
};
