import { useEffect, useState } from "react";
import JuiceFont from "../common/JuiceFont";

interface IDDAYS {
  dDayName: string;
  date: string;
}

const Dday = ({ dDayName, date }: IDDAYS) => {
  // 오늘을 표기하기 위한 today
  const today = new Date();
  const todayMonth = today.getMonth();
  const todayYear = today.getFullYear();
  const todayDate = today.getDate();
  const todayDay = today.getDay();
  const DAYS = ["일", "월", "화", "수", "목", "금", "토"];
  // D-day 계산
  const [days, setDays] = useState(0);
  useEffect(() => {
    const today = new Date();
    const dDay = new Date(`${date} 00:00:00`);
    const gapNum = dDay.getTime() - today.getTime();
    setDays((day) => Math.ceil(gapNum / (1000 * 60 * 60 * 24)));
  }, [date]);

  const weeks = Math.floor(days / 7);
  const lastWeekDays = days % 7;
  const lastWeek = [];
  for (let i = 0; i < 7; i++) lastWeek.push((today.getDay() + i) % 7);
  let weekend = weeks * 2;
  days !== 0 &&
    (weekend +=
      +lastWeek.slice(0, lastWeekDays).includes(0) +
      +lastWeek.slice(0, lastWeekDays).includes(6));

  return (
    <div>
      <JuiceFont isBold isSmall>
        {todayYear}.{todayMonth + 1}.{todayDate}.({DAYS[todayDay]})
      </JuiceFont>

      <JuiceFont isBold isSmall others="group relative cursor-pointer pt-4">
        {dDayName} D-{days}
        <JuiceFont
          isSmall
          others="pointer-events-none absolute translate-x-3/4 -translate-y-3/4 bg-emerald-300  whitespace-nowrap rounded-md px-2 py-1 opacity-0 transition duration-500 before:absolute before:-left-1 before:bottom-1/2  before:-translate-x-1/2 before:border-4 before:border-transparent before:border-r-emerald-300 before:content-[''] group-hover:opacity-100"
        >
          주말 : {weekend} 평일 : {days - weekend}
        </JuiceFont>
      </JuiceFont>
    </div>
  );
};

export default Dday;
