import user from '../assets/avatar-girl-2.jpeg';
import user_1 from '../assets/avatar-girl.avif';
import previewImg from '../assets/mountains.jpg';

export const articles = [
  {
    id: 'blog_article_1',
    title: 'Статья 1',
    stream: 'Программирование',
    minRead: 6,
    creationDate: '2024-07-21T09:11:53.887Z',
    previewImg,
    description:
      'Контент — это содержание. Простое заимствование из английского content — содержимое.',
    author: {
      fullName: 'Роза Миннулина',
      name: 'Роза',
      avatar: {
        url: user,
      },
    },
  },
  {
    id: 'blog_article_2',
    title: 'Статья 2',
    stream: 'Здоровье',
    creationDate: '2024-07-22T09:11:53.887Z',
    minRead: 2,
    previewImg,
    description:
      'Контент — это содержание. Простое заимствование из английского content — содержимое.',
    author: {
      fullName: 'Анастасия Петрова',
      name: 'Анастасия',
      online: true,
      avatar: {
        url: user_1,
      },
    },
  },
  {
    id: 'blog_article_3',
    title: 'Статья 3',
    stream: 'Дизайн',
    creationDate: '2024-07-23T09:11:53.887Z',
    minRead: 4,
    previewImg,
    description:
      'Контент — это содержание. Простое заимствование из английского content — содержимое.',
    author: {
      fullName: 'Роза Миннулина',
      name: 'Роза',
      avatar: {
        url: user,
      },
    },
  },
  {
    id: 'blog_article_4',
    title: 'Статья 4',
    stream: 'Питомцы',
    minRead: 4,
    creationDate: '2024-07-24T09:11:53.887Z',
    previewImg,
    description:
      'Контент — это содержание. Простое заимствование из английского content — содержимое.',
    author: {
      fullName: 'Роза Миннулина',
      name: 'Роза',
      avatar: {
        url: user,
      },
    },
  },
];
