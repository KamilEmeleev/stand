import { FC } from 'react';

import ava from '../assets/avatar-user.png';

export interface User {
  name: string;
  online?: boolean;
  role?: string;
  avatar?: {
    icon?: FC;
    url?: string;
  };
}

export const user = {
  name: 'Айлин Ким',
  role: 'Продуктовый дизайнер',
  avatar: {
    url: ava,
  },
};
