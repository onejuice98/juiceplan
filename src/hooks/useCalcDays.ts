export const useCalcDays = (date: string) => {
  // D-Day 계산
  const today = new Date();
  const dday = new Date(`${date}T00:00:00`);
  const result = Math.ceil(
    (dday.getTime() - today.getTime()) / (1000 * 60 * 60 * 24)
  );
  // 주말 계산
  const weeks = Math.floor(result / 7);
  const lastWeekDays = result % 7;
  const lastWeek = [];
  for (let i = 0; i < 7; i++) lastWeek.push((today.getDay() + i) % 7);
  let weekend = weeks * 2;
  result !== 0 &&
    (weekend +=
      +lastWeek.slice(0, lastWeekDays).includes(0) +
      +lastWeek.slice(0, lastWeekDays).includes(6));

  return { result, weekend };
};
