import { ReactElement } from 'react';

export enum TransactionType {
  success = 'success',
  declined = 'declined',
}

export type TransactionTypes = {
  [key in TransactionType]: ReactElement;
};

export const transactions = [
  {
    type: TransactionType.success,
    name: {
      first: 'Операция 1',
      second: 'Списание',
    },
    date: '27.08.2023',
    amount: -9500.0,
  },
  {
    type: TransactionType.success,
    name: {
      first: 'Операция 2',
      second: 'Списание',
    },
    date: '27.08.2023',
    amount: -16500.0,
  },
  {
    type: TransactionType.success,
    name: {
      first: 'Операция 3',
      second: 'Пополнение',
    },
    date: '03.05.2023',
    amount: 546400.0,
  },
  {
    type: TransactionType.declined,
    name: {
      first: 'Операция 4',
      second: 'Пополнение',
    },
    date: '06.04.2023',
    amount: 17450.0,
  },
];
