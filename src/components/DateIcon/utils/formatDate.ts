export const formatDate = (date?: string) => {
  if (!date) {
    return [];
  }

  const options: Intl.DateTimeFormatOptions = {
    day: 'numeric',
    month: 'short',
  };

  const d = new Date(date);

  return d.toLocaleDateString('ru-RU', options).replace('.', '').split(' ');
};
