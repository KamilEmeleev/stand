export const currencyCodeType = ['eur', 'usd', 'cny', 'rub'] as const;

export type CurrencyCodeType = (typeof currencyCodeType)[number];

export interface ICurrency {
  date: string;
  kzt: Record<CurrencyCodeType, number>;
}
