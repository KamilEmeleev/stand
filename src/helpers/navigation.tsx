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
  CalendarIcon,
  ParagraphIcon,
  WidgetIcon,
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
  BlogPostDetailsPage,
  BlogWritePostPage,
  CalendarPage,
  BlogPage,
  MicrofrontendsPage,
} from '../pages';
import {
  ContributingPage,
  IconsPage,
  GettingStartedPage,
  ButtonPage,
} from '../pages/ozenbook';

import { blogs } from './blog.ts';

export interface App {
  icon?: FC;
  title?: string;
  path?: string;
  link?: string;
  count?: number;
  containerProps?: Partial<ContainerBaseProps>;
  disableHeader?: boolean;
  disableBreadcrumbs?: boolean;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  component?: (params: any) => ReactElement | null | undefined;
}

const routes: { [key in string]: App } = {
  ozenbook: {
    title: 'Özenbook',
    icon: BrOzenIcon,
  },
  icons: {
    title: 'Витрина иконок',
    link: '/ozenbook/icons',
    path: '/ozenbook/icons',
    containerProps: { maxWidth: 'm' },
    component: () => <IconsPage />,
  },
  blog: {
    title: 'Блог',
    link: '/blog',
    path: '/blog',
    icon: ParagraphIcon,
    component: () => <BlogPage />,
  },
  'blog-post-details': {
    title: 'Статья',
    path: '/blog/post/:id',
    component: ({ id }) => {
      const post = blogs.find((article) => article.id === id);

      return post && <BlogPostDetailsPage {...post} />;
    },
  },
  'blog-write-post': {
    title: 'Написать',
    path: '/blog/write-post',
    component: () => {
      return <BlogWritePostPage />;
    },
  },
  'getting-started': {
    title: 'Начать работу',
    link: '/ozenbook/getting-started',
    path: '/ozenbook/getting-started',
    disableHeader: true,
    containerProps: { maxWidth: 'l' },
    component: () => <GettingStartedPage />,
  },
  contributing: {
    title: 'Внести вклад',
    link: '/ozenbook/contributing',
    path: '/ozenbook/contributing',
    disableHeader: true,
    containerProps: { maxWidth: 'l' },
    component: () => <ContributingPage />,
  },
  button: {
    title: 'Button',
    link: '/ozenbook/button',
    path: '/ozenbook/button',
    disableHeader: true,
    containerProps: { maxWidth: 'l' },
    component: () => <ButtonPage />,
  },
  main: {
    title: 'Главная',
    link: '/',
    path: '/',
    icon: DashboardIcon,
    component: () => <MainPage />,
  },
  profile: {
    title: 'Профиль',
    link: '/profile',
    path: '/profile',
    icon: UserCircleOutlineIcon,
    component: () => <ProfilePage />,
  },
  chat: {
    title: 'Онлайн чат',
    link: '/chat',
    path: '/chat',
    icon: ChatMenuIcon,
    component: () => <ChatPage />,
    count: 3,
  },
  orders: {
    title: 'Заказы',
    link: '/orders',
    path: '/orders',
    icon: CartHandIcon,
    component: () => <OrdersPage />,
  },
  calendar: {
    title: 'Календарь',
    link: '/calendar',
    path: '/calendar',
    icon: CalendarIcon,
    component: () => <CalendarPage />,
  },
  sandbox: {
    title: 'Песочница',
    link: '/sandbox',
    path: '/sandbox',
    icon: TemplatesIcon,
    component: () => <SandboxPage />,
  },
  logout: {
    title: 'Завершить сеанс',
    link: '/logout',
    path: '/logout',
    icon: PowerOutlineIcon,
  },
  'help-center': {
    title: 'Центр помощи',
    link: '/help-center',
    path: '/help-center',
    icon: QuestionCircleOutlineIcon,
    disableHeader: true,
    containerProps: { maxWidth: 'm' },
    component: () => <HelpCenterPage />,
  },
  'help-center-details': {
    title: 'Детальная информация',
    path: '/help-center/:id',
    component: () => {
      return <HelpCenterDetailsPage />;
    },
  },
  'live-coding': {
    title: 'Live coding',
    icon: FlameIcon,
    link: '/live-coding',
    path: '/live-coding',
    component: () => {
      return <LiveCoding />;
    },
  },
  microfrontends: {
    title: 'Microfrontends',
    icon: WidgetIcon,
    link: '/microfrontends',
    path: '/microfrontends/*?',
    component: MicrofrontendsPage,
    disableBreadcrumbs: true,
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
    'blog',
    'chat',
    'orders',
    'calendar',
    'help-center',
    'live-coding',
    'microfrontends',
    'sandbox',
    ['ozenbook', 'getting-started', 'icons', 'contributing', 'button'],
    'logout',
  ],
};
