import React from "react";

const toDay = () => {
  const toDay = new Date();
  const toDayMonth = toDay.getMonth();
  const toDayYear = toDay.getFullYear();
  const toDayDate = toDay.getDate();
  const toDayDay = toDay.getDay();
  const DAYS = ["일", "월", "화", "수", "목", "금", "토"];
  return (
    <div className="flex justify-center items-center w-80 h-20 border-2 rounded-lg text-4xl shadow-md font-bold text-gray-600">
      {toDayMonth + 1}월 {toDayDate}일 {DAYS[toDayDay]}요일
    </div>
  );
};

export default toDay;
