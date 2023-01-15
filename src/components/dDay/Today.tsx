import React from "react";

const toDay = () => {
  const toDay = new Date();
  const toDayMonth = toDay.getMonth();
  const toDayYear = toDay.getFullYear();
  const toDayDate = toDay.getDate();
  const toDayDay = toDay.getDay();
  const DAYS = ["일", "월", "화", "수", "목", "금", "토"];
  return (
    <div className="font-mono font-bold text-sm">
      {toDayYear}.{toDayMonth + 1}.{toDayDate}.({DAYS[toDayDay]})
    </div>
  );
};

export default toDay;
