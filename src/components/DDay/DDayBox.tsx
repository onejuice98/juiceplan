import { useEffect, useState } from "react";
import JuiceFont from "../common/JuiceFont";
import SetBtn from "../common/SetBtn";
import Tooltip from "../common/Tooltip";

interface IDDAYS {
  dDayName: string;
  date: string;
  isSetBtn?: boolean;
  isFirst?: number;
  isDelete?: () => void;
}

const DDayBox = ({ dDayName, date, isSetBtn, isFirst, isDelete }: IDDAYS) => {
  // 오늘을 표기하기 위한 today
  const today = new Date();
  // D-day 계산
  const [days, setDays] = useState<number>(0);
  useEffect(() => {
    const today = new Date();
    const dDay = new Date(`${date} 00:00:00`);
    const gapNum = dDay.getTime() - today.getTime();
    setDays(Math.ceil(gapNum / (1000 * 60 * 60 * 24)));
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
    <>
      <div className="flex justify-between w-full bg-gradient-to-r from-yellow-200 via-green-200 to-green-500 rounded-md shadow-md p-2 ">
        <div className="flex flex-col">
          <JuiceFont isBold others="mb-4">
            {isFirst === 0 && `⭐️ `}

            {dDayName}
          </JuiceFont>
          <Tooltip message={`주말 : ${weekend} 평일 : ${days - weekend}`}>
            <JuiceFont
              isBold
              isSmall
              others="w-fit cursor-pointer text-xs text-gray-700 "
            >
              {date} D{days > 0 ? days * -1 : `+${days * -1}`}
            </JuiceFont>
          </Tooltip>
        </div>
        {isSetBtn && (
          <div className="flex flex-col justify-around">
            <SetBtn />
            <button
              className="hover:bg-gray-100/[0.5] hover:rounded-lg duration-500"
              onClick={isDelete}
            >
              ❌
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default DDayBox;
