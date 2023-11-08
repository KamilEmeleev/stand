export interface CalendarEvent {
  id: string;
  date: {
    from: string;
    to: string;
  };
  title: string;
}

export type Calendar = CalendarEvent[];
export const calendar: Calendar = [
  {
    id: 'calendar1',
    date: {
      from: '2023-10-06T14:00:00.000Z',
      to: '2023-10-06T15:00:00.000Z',
    },
    title: 'Встреча с заказчиком',
  },
  {
    id: 'calendar2',
    date: {
      from: '2023-10-07T07:00:00.000Z',
      to: '2023-10-07T07:30:00.000Z',
    },
    title: 'Ежедневный митинг',
  },
  {
    id: 'calendar3',
    date: {
      from: '2023-10-08T07:00:00.000Z',
      to: '2023-10-08T07:30:00.000Z',
    },
    title: 'Ежедневный митинг',
  },
  {
    id: 'calendar4',
    date: {
      from: '2023-10-09T07:00:00.000Z',
      to: '2023-10-09T07:30:00.000Z',
    },
    title: 'Ежедневный митинг',
  },
];
