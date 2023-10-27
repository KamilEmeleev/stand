import {
  ChatMenuIcon,
  DashboardIcon,
  TemplatesIcon,
  UserIcon,
} from '@ozen-ui/icons';

import { MainPage, ProfilePage, ChatPage, SandboxPage } from './pages';

export const apps = [
  {
    title: 'Главная',
    link: '/',
    icon: DashboardIcon,
    component: MainPage,
    count: null,
  },
  {
    title: 'Профиль',
    link: '/profile',
    icon: UserIcon,
    component: ProfilePage,
    count: null,
  },
  {
    title: 'Онлайн чат',
    link: '/chat',
    icon: ChatMenuIcon,
    component: ChatPage,
    count: 3,
  },
  {
    title: 'Песочница',
    link: '/sandbox',
    icon: TemplatesIcon,
    component: SandboxPage,
    count: null,
  },
] as const;
