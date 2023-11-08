export const formatTime = (from?: string, to?: string): string => {
  if (!from || !to) {
    return 'Неизвестное время';
  }

  const options: Intl.DateTimeFormatOptions = {
    timeStyle: 'short',
  };

  const startTime = new Date(from);
  const endTime = new Date(to);

  return `c ${startTime.toLocaleTimeString(
    'ru-RU',
    options
  )} до ${endTime.toLocaleTimeString('ru-RU', options)}`;
};
