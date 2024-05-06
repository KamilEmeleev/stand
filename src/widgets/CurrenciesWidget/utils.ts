import { sum } from '../../utils';

export const getAmount = (value?: number) => {
  return value ? sum(1 / value) : '-';
};
