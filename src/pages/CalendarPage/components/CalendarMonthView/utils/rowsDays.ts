export function rowsDays<T = unknown>(days?: T[]) {
  if (!days) {
    return [];
  }

  const size = 7;
  const subarray = [];

  for (let i = 0; i < Math.ceil(days.length / size); i++) {
    subarray[i] = days.slice(i * size, i * size + size);
  }

  return subarray;
}
