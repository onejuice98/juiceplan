import React, { useEffect, useState } from "react";

const DDays = () => {
  const [days, setDays] = useState(0);
  useEffect(() => {
    const toDay: any = new Date();
    const dDay: any = new Date("2023-06-30 00:00:00");
    const gapNum = dDay - toDay;
    setDays(Math.ceil(gapNum / (1000 * 60 * 60 * 24)));
  }, []);
  const dDay: any = new Date("2023-06-30 00:00:00");

  const toDay = new Date();
  const toDayMonth = toDay.getMonth();
  const toDayYear = toDay.getFullYear();
  const toDayDate = toDay.getDate();
  const toDayDay = toDay.getDay();
  const DAYS = ["일", "월", "화", "수", "목", "금", "토"];
  /*
  const weeks = Math.floor(days / 7);
  if (toDay.getDay() > dDay.getDay()) {
    if (dDay.getDay() === 0) {
      console.log((weeks + 1) * 2 + 1);
    } else {
      console.log((weeks + 1) * 2);
    }
  } else {
    if (dDay.getDay() === 0) {
      console.log(weeks * 2 + 1);
    } else {
      console.log(weeks * 2);
    }
  }*/

  let weekend = 0;
  let weekday = 0;
  while (true) {
    let tempDate = toDay;
    if (tempDate.getTime() > dDay.getTime()) {
      break;
    } else {
      let tmp = tempDate.getDay();
      if (tmp == 0 || tmp == 6) {
        weekend++;
      } else {
        weekday++;
      }
      tempDate.setDate(toDay.getDate() + 1);
    }
  }
  return (
    <div className="font-mono font-bold text-sm">
      전역까지 D-{days} 평일 : {weekday} 주말 : {weekend}
    </div>
  );
};

export default DDays;
