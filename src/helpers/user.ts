import { FC } from 'react';

import ava from '../assets/avatar-user.png';

export interface User {
  fullName: string;
  name: string;
  online?: boolean;
  role?: string;
  avatar?: {
    icon?: FC;
    url?: string;
  };
}

export const user = {
  fullName: 'Айлин Ким',
  name: 'Aйлин',
  role: 'Продуктовый дизайнер',
  avatar: {
    url: ava,
  },
};
