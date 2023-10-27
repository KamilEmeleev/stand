import { generateUniqKey } from '@ozen-ui/kit/__inner__/cjs/utils/generateUniqKey';

import user_1 from '../assets/avatar-girl.avif';
import user_3 from '../assets/avatar-man-2.jpg';
import user_4 from '../assets/avatar-man-3.jpg';
import user_2 from '../assets/avatar-man.avif';
import emoji from '../assets/emoji.png';
import img from '../assets/river.jpg';
import { BerekeLogo } from '../icons';

import { User } from './user';

export interface ChatMessageAsset {
  format?: string;
  name?: string;
  size?: string | number;
  url?: string;
}

export interface ChatMessage {
  id: string | number;
  type: 'incoming' | 'outgoing';
  date: string;
  text?: string;
  emoji?: string;
  assets?: ChatMessageAsset[];
}

export interface Chat {
  id: string | number;
  user: User;
  messages?: ChatMessage[];
}

export const chats: Chat[] = [
  {
    id: generateUniqKey(),
    user: {
      name: 'Анастасия Петрова',
      online: true,
      avatar: {
        url: user_1,
      },
    },
    messages: [
      {
        id: generateUniqKey(),
        type: 'incoming',
        date: '8 октября',
        text: 'Привет!',
      },
      {
        id: generateUniqKey(),
        type: 'incoming',
        date: '8 октября',
        text: '💪 Подготовила дизайн-макет проекта Marketplaces. Отправила тебе его для ознакомления.',
      },
      {
        id: generateUniqKey(),
        type: 'incoming',
        date: '8 октября',
        assets: [
          {
            format: 'pdf',
            name: 'design_marketplaces.pdf',
            size: '256 КБ',
          },
        ],
      },
      {
        id: generateUniqKey(),
        type: 'outgoing',
        date: '9 октября',
        text: 'Привет!',
      },
      {
        id: generateUniqKey(),
        type: 'outgoing',
        date: '9 октября',
        text: 'Спасибо! Получила. В ближайшее время дам обратную связь.',
      },
      {
        id: generateUniqKey(),
        type: 'incoming',
        date: '9 октября',
        text: 'Спасибо, подруга! Буду ждать.',
      },
    ],
  },
  {
    id: generateUniqKey(),
    user: {
      name: 'Саят Ахметов',
      online: true,
      avatar: {
        url: user_2,
      },
    },
    messages: [
      {
        id: generateUniqKey(),
        type: 'incoming',
        text: 'Здравствуйте!',
        date: '9 октября',
      },
    ],
  },
  {
    id: generateUniqKey(),
    user: {
      name: 'Александр Ишков',
      online: true,
      avatar: {
        url: user_3,
      },
    },
    messages: [
      {
        id: generateUniqKey(),
        type: 'incoming',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias aliquam animi cumque distinctio est et facere maiores minima minus obcaecati, odit porro, quam, quod rem repudiandae tempore temporibus ut veniam.',
        date: '9 октября',
      },
    ],
  },
  {
    id: generateUniqKey(),
    user: {
      name: 'Арсен Насипов',
    },
    messages: [
      {
        id: generateUniqKey(),
        type: 'incoming',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias aliquam animi cumque distinctio est et facere maiores minima minus obcaecati, odit porro, quam, quod rem repudiandae tempore temporibus ut veniam.',
        date: '8 октября',
      },
    ],
  },
  {
    id: generateUniqKey(),
    user: {
      name: 'Рустем Гатиатулин',
      avatar: {
        url: user_4,
      },
    },
    messages: [
      {
        id: generateUniqKey(),
        type: 'incoming',
        text: 'Надо научиться чувствовать спейсинги)\n- Чувствуешь спейсинг?\n- Нет\n- А он есть…',
        date: '8 октября',
      },
      {
        id: generateUniqKey(),
        type: 'outgoing',
        text: '😂',
        emoji,
        date: '8 октября',
      },
    ],
  },
  {
    id: generateUniqKey(),
    user: {
      name: 'Bereke Bank',
      online: true,
      avatar: {
        icon: <BerekeLogo />,
      },
    },
    messages: [
      {
        id: generateUniqKey(),
        type: 'incoming',
        date: '7 октября',
        assets: [{ format: 'jpg', url: img, name: 'image' }],
      },
      {
        id: generateUniqKey(),
        type: 'incoming',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias aliquam animi cumque distinctio est et facere maiores minima minus obcaecati, odit porro, quam, quod rem repudiandae tempore temporibus ut veniam. ',
        date: '7 октября',
      },
    ],
  },
  {
    id: generateUniqKey(),
    user: {
      name: 'Ибрагимов Вагиз',
    },
    messages: [
      {
        id: generateUniqKey(),
        type: 'incoming',
        text: 'Погнали на обед?',
        date: '7 октября',
      },
      {
        id: generateUniqKey(),
        type: 'outgoing',
        text: 'Привет! Гоу! Куда пойдем?',
        date: '7 октября',
      },
    ],
  },
];
