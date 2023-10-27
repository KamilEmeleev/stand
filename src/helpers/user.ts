import { ReactNode } from 'react';

import ava from '../assets/avatar-user.png';

export interface User {
  name: string;
  online?: boolean;
  role?: string;
  avatar?: {
    icon?: ReactNode;
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
