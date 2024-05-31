import type { TagVariant } from '@ozen-ui/kit/Tag';

import { daysInMonth } from '../utils';

const now = new Date();

type CalendarEventColor = TagVariant;

export interface CalendarEvent {
  id: string | number;
  date: {
    from: Date;
    to: Date;
  };
  title: string;
  color?: CalendarEventColor;
}

export type CalendarEvents = CalendarEvent[];

const generateEvents = () => {
  let added1 = false;
  let added2 = false;
  const res: CalendarEvents = [];
  const now = new Date();
  const nowY = now.getFullYear();
  const nowM = now.getMonth();

  const daysCount = daysInMonth(now);

  new Array(daysCount).fill(0).forEach((_, i) => {
    const d = new Date(nowY, nowM, i + 1);
    const day = d.getDay();
    const date = d.getDate();

    if (day !== 0 && day !== 6) {
      res.push({
        id: i + 1,
        date: {
          from: new Date(nowY, nowM, i + 1, 9, 30),
          to: new Date(nowY, nowM, i + 1, 10),
        },
        title: 'Ежедневный митинг',
        color: 'action',
      });
    }

    if (day === 2) {
      res.push({
        id: i + 1,
        date: {
          from: new Date(nowY, nowM, i + 1, 16),
          to: new Date(nowY, nowM, i + 1, 17),
        },
        title: '🇬🇧 English club',
        color: 'warning',
      });
    }

    if (day !== 0 && day !== 6 && date >= 8 && !added1) {
      added1 = true;

      res.push({
        id: i + 1,
        date: {
          from: new Date(nowY, nowM, i + 1, 11, 30),
          to: new Date(nowY, nowM, i + 1, 13),
        },
        title: 'Встреча с заказчиком',
        color: 'info',
      });
    }

    if (day === 5 && !added2) {
      added2 = true;

      res.push({
        id: i + 1,
        date: {
          from: new Date(nowY, nowM, i + 1, 19),
          to: new Date(nowY, nowM, i + 1, 23),
        },
        title: '🍹 Тусовка с кланом',
        color: 'error',
      });
    }
  });

  return res;
};

export const calendarEvents: CalendarEvents = [
  ...generateEvents(),
  {
    id: 101,
    date: {
      from: new Date(now.getFullYear(), 4, 30, 19, 30),
      to: new Date(now.getFullYear(), 4, 30, 23),
    },
    title: '🎉 ДР Рустема',
    color: 'error',
  },
];
