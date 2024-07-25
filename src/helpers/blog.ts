import user from '../assets/avatar-girl-2.jpeg';
import user_1 from '../assets/avatar-girl.avif';
import previewImg from '../assets/mountains.jpg';

const text =
  'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam aperiam architecto atque beatae consectetur, consequatur deleniti doloremque doloribus eaque explicabo hic inventore ipsa labore minima natus nihil odio quas rem sapiente tempora veritatis vero voluptates voluptatum! Accusantium adipisci, aliquid amet animi asperiores autem consectetur consequatur cum deleniti doloribus error exercitationem fugiat illo impedit inventore laboriosam maiores nihil non odio omnis porro quam quas quidem reiciendis saepe similique tempore tenetur totam veniam voluptatem! Corporis error expedita, magnam nisi officiis quo quos sapiente totam unde voluptatem! Aspernatur id obcaecati odit possimus. A accusantium blanditiis deserunt esse nihil qui, sed sit veritatis vitae?';

export const articles = [
  {
    id: 'blog_article_1',
    title: 'Статья 1',
    stream: 'Программирование',
    minRead: 6,
    creationDate: '2024-07-21T09:11:53.887Z',
    previewImg,
    subtitle:
      'Контент — это содержание. Простое заимствование из английского content — содержимое.',
    author: {
      fullName: 'Роза Миннулина',
      name: 'Роза',
      avatar: {
        url: user,
      },
    },
    text,
  },
  {
    id: 'blog_article_2',
    title: 'Статья 2',
    stream: 'Здоровье',
    creationDate: '2024-07-22T09:11:53.887Z',
    minRead: 2,
    previewImg,
    subtitle:
      'Контент — это содержание. Простое заимствование из английского content — содержимое.',
    author: {
      fullName: 'Анастасия Петрова',
      name: 'Анастасия',
      online: true,
      avatar: {
        url: user_1,
      },
    },
    text,
  },
  {
    id: 'blog_article_3',
    title: 'Статья 3',
    stream: 'Дизайн',
    creationDate: '2024-07-23T09:11:53.887Z',
    minRead: 4,
    previewImg,
    subtitle:
      'Контент — это содержание. Простое заимствование из английского content — содержимое.',
    author: {
      fullName: 'Роза Миннулина',
      name: 'Роза',
      avatar: {
        url: user,
      },
    },
    text,
  },
  {
    id: 'blog_article_4',
    title: 'Статья 4',
    stream: 'Питомцы',
    minRead: 4,
    creationDate: '2024-07-24T09:11:53.887Z',
    previewImg,
    subtitle:
      'Контент — это содержание. Простое заимствование из английского content — содержимое.',
    author: {
      fullName: 'Роза Миннулина',
      name: 'Роза',
      avatar: {
        url: user,
      },
    },
    text,
  },
];
