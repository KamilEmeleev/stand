import { ReactElement } from 'react';

import {
  BrApplePayColoredIcon,
  BrCardMastercardColoredIcon,
  BrCardVisaColoredIcon,
  BrGooglePayDarkColoredIcon,
} from '@ozen-ui/icons';

export enum TransactionType {
  success = 'success',
  declined = 'declined',
}

export type TransactionTypes = {
  [key in TransactionType]: ReactElement;
};

export enum PaymentMethodType {
  visa = 'visa',
  mastercard = 'mastercard',
  'google-pay' = 'google-pay',
  'apple-pay' = 'apple-pay',
}

export const paymentMethodsIcons = {
  [PaymentMethodType.visa]: BrCardVisaColoredIcon,
  [PaymentMethodType.mastercard]: BrCardMastercardColoredIcon,
  [PaymentMethodType['google-pay']]: BrGooglePayDarkColoredIcon,
  [PaymentMethodType['apple-pay']]: BrApplePayColoredIcon,
};

export const transactions = [
  {
    type: TransactionType.success,
    name: {
      first: 'Ord-01',
      second: 'Списание',
    },
    date: '27.08.2023',
    amount: -9500.0,
    paymentMethod: {
      type: PaymentMethodType.visa,
      name: 'Visa',
      number: '**** 4567',
    },
  },
  {
    type: TransactionType.success,
    name: {
      first: 'Ord-02',
      second: 'Списание',
    },
    date: '27.08.2023',
    amount: -16500.0,
    paymentMethod: {
      type: PaymentMethodType['apple-pay'],
      name: 'Apple Pay',
    },
  },
  {
    type: TransactionType.success,
    name: {
      first: 'Ord-03',
      second: 'Пополнение',
    },
    date: '03.05.2023',
    amount: 546400.0,
    paymentMethod: {
      type: PaymentMethodType['google-pay'],
      name: 'Google Pay',
    },
  },
  {
    type: TransactionType.declined,
    name: {
      first: 'Ord-04',
      second: 'Пополнение',
    },
    date: '06.04.2023',
    amount: 17450.0,
    paymentMethod: {
      type: PaymentMethodType.mastercard,
      name: 'Mastercard',
      number: '**** 9011',
    },
  },
];
