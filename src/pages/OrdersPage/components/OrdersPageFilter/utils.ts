export const dateInPeriod = ({
  date,
  min,
  max,
}: {
  date?: Date | null;
  min?: Date | null;
  max?: Date | null;
}) => {
  if (!date) {
    return true;
  }

  const minDate = new Date(min?.getTime() || 0).getTime();

  const maxDate = max
    ? new Date(max)?.setDate(max?.getDate() + 1)
    : new Date(9999, 0, 1).getTime();

  return date.getTime() >= minDate && date?.getTime() <= maxDate;
};
