export const sum = (amount: number) => {
  const formatter = new Intl.NumberFormat('ru-RU', {
    style: 'currency',
    currency: 'KZT',
    currencyDisplay: 'code',
    minimumFractionDigits: 2,
  });

  return formatter.format(amount).replace('KZT', '₸');
};
