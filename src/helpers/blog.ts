import { ReactElement } from 'react';

import user from '../assets/avatar-girl-2.jpeg';
import img1 from '../assets/cube.jpg';
import kamil from '../assets/kamil.jpg';
import img2 from '../assets/mountains.jpg';
import Example from '../pages/BlogPostDetailsPage/Example.mdx';
import MyPost from '../pages/BlogPostDetailsPage/MyPost.mdx';

import { User } from './user.ts';

export type BlogArticle = {
  id: string;
  title: string;
  minRead: number;
  subtitle?: string;
  stream: string[];
  creationDate: string;
  previewImg: string;
  author: User;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  markdown?: (params: any) => ReactElement | null | undefined;
};

export type BlogArticles = BlogArticle[];

export const blogs: BlogArticles = [
  {
    id: 'life_hack_override_css_selector',
    title: 'Как переопределить дефолтные стили компонента',
    subtitle: 'Лайфхак для повышение специфичности СSS-селектора.',
    stream: ['Программирование', 'ozen-ui', 'CSS'],
    minRead: 2,
    creationDate: '2024-09-19T09:11:53.887Z',
    previewImg: img1,
    author: {
      fullName: 'Камил Емелеев',
      name: 'Камил',
      avatar: {
        url: kamil,
      },
    },
    markdown: MyPost,
  },
  {
    id: 'example_article',
    title: 'Шаблон статьи',
    stream: ['Программирование'],
    minRead: 6,
    creationDate: '2024-07-21T09:11:53.887Z',
    previewImg: img2,
    subtitle: 'Короткое и интригующее описание статьи.',
    author: {
      fullName: 'Роза Миннулина',
      name: 'Роза',
      avatar: {
        url: user,
      },
    },
    markdown: Example,
  },
];
