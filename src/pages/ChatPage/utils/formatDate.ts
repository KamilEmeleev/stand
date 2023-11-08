export const formatDate = (date?: string) => {
  if (!date) {
    return null;
  }

  const options: Intl.DateTimeFormatOptions = { day: 'numeric', month: 'long' };

  const d = new Date(date);

  return d.toLocaleDateString('ru-RU', options);
};
