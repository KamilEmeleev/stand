const now = new Date();

type CalendarEventColor = 'green' | 'red' | 'blue';

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

export const calendarEvents: CalendarEvents = [
  {
    id: 1,
    date: {
      from: new Date(now.getFullYear(), now.getMonth(), 1, 9, 30),
      to: new Date(now.getFullYear(), now.getMonth(), 1, 10),
    },
    title: 'Ежедневный митинг',
    color: 'green',
  },
  {
    id: 2,
    date: {
      from: new Date(now.getFullYear(), now.getMonth(), 2, 9, 30),
      to: new Date(now.getFullYear(), now.getMonth(), 2, 10),
    },
    title: 'Ежедневный митинг',
    color: 'green',
  },
  {
    id: 3,
    date: {
      from: new Date(now.getFullYear(), now.getMonth(), 3, 9, 30),
      to: new Date(now.getFullYear(), now.getMonth(), 3, 10),
    },
    title: 'Ежедневный митинг',
    color: 'green',
  },
  {
    id: 4,
    date: {
      from: new Date(now.getFullYear(), now.getMonth(), 15, 11),
      to: new Date(now.getFullYear(), now.getMonth(), 15, 12),
    },
    title: 'Встреча с заказчиком',
    color: 'red',
  },
];
