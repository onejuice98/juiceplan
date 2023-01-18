import React, { useEffect, useState } from "react";
import Holiday from "./holiday";

// Month 차이
const getMonthDiff = (d1: Date, d2: Date) => {
  const date1 = new Date(d1);
  const date2 = new Date(d2);

  const diffDate = date1.getTime() - date2.getTime();

  return Math.floor(Math.abs(diffDate / (1000 * 60 * 60 * 24 * 30)));
};

// Year 차이
const getYearDiff = (d1: Date, d2: Date) => {
  const date1 = new Date(d1);
  const date2 = new Date(d2);

  const diffDate = date1.getTime() - date2.getTime();

  return Math.floor(Math.abs(diffDate / (1000 * 60 * 60 * 24 * 365)));
};
const DDays = () => {
  const [days, setDays] = useState(0);
  const dDay: any = new Date("2023-06-30 00:00:00");
  const toDay: any = new Date();
  useEffect(() => {
    const gapNum = dDay - toDay;
    setDays(Math.ceil(gapNum / (1000 * 60 * 60 * 24)));
  }, []);

  let toDayMonth = toDay.getMonth();
  let toDayYear = toDay.getFullYear();
  const toDayDate = toDay.getDate();
  const toDayDay = toDay.getDay();
  const DAYS = ["일", "월", "화", "수", "목", "금", "토"];

  const weeks = Math.floor(days / 7);
  const lastWeeksDays = days % 7;
  const lastWeek = [];
  for (let i = 0; i < 7; i++) lastWeek.push((toDay.getDay() + i) % 7);
  let weekend = weeks * 2;
  // TS, +boolean => number

  days !== 0 &&
    (weekend +=
      +lastWeek.slice(0, lastWeeksDays).includes(0) +
      +lastWeek.slice(0, lastWeeksDays).includes(6));

  let diffDateList = [];
  for (let i = 0; i < getMonthDiff(toDay, dDay) + 1; i++) {
    if (toDayMonth + 1 === 13) {
      toDayYear += 1;
      toDayMonth = 0;
    }
    diffDateList.push([
      toDayYear.toString(),
      toDayMonth + 1 < 10
        ? "0" + (toDayMonth + 1).toString()
        : (toDayMonth + 1).toString(),
    ]);
    toDayMonth += 1;
    //console.log(Holiday(diffDateList[i][0][0], diffDateList[i][0][1]));
  }
  const holidays = Holiday("2023", "01");
  console.log(holidays);
  return (
    <div className="font-mono font-bold text-sm group relative cursor-pointer pt-4">
      전역까지 D-{days}
      <div className="font-mono text-sm pointer-events-none absolute translate-x-3/4 -translate-y-3/4 bg-emerald-300  whitespace-nowrap rounded-md px-2 py-1 opacity-0 transition duration-500 before:absolute before:-left-1 before:bottom-1/2  before:-translate-x-1/2 before:border-4 before:border-transparent before:border-r-emerald-300 before:content-[''] group-hover:opacity-100">
        주말 : {weekend} 평일 : {days - weekend}
      </div>
    </div>
  );
};

export default DDays;
