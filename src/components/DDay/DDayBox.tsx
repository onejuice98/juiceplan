import { useEffect, useState } from "react";
import Container from "../common/Container";
import Text from "../common/Text";
import Tooltip from "./Tooltip";

interface IDDAYS {
  dDayName: string;
  date: string;
  isFirst?: number;
  isDelete?: () => void;
}

/**
 * Main Page와 Modal 에서 표기를 위한 Componenet
 * @param dDayName string, D-Day의 title
 * @param date string, D-Day의 기준일
 * @param isDelete ()=>void, onClick에 들어가며, D-Day 지우기 위함.
 * @returns D-Day Component, D-day 이름, 날짜, D-day, 삭제버튼
 */
const DDayBox = ({ dDayName, date, isFirst, isDelete }: IDDAYS) => {
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

  // 주말 계산 로직
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
      <div className="flex justify-between w-full h-full bg-gradient-to-b from-rose-100 to-teal-100 rounded-md shadow-md p-2">
        <Container direction="col" justifyContent="between">
          <Text bold mono>
            {isFirst === 0 && `⭐️ `}
            {dDayName}
          </Text>

          <Tooltip message={`주말 : ${weekend} 평일 : ${days - weekend}`}>
            <Text bold gray mono size="xs" pointer>
              {date} D{days > 0 ? days * -1 : `+${days * -1}`}
            </Text>
          </Tooltip>
        </Container>
        {isDelete && <button onClick={isDelete}>❌</button>}
      </div>
    </>
  );
};

export default DDayBox;
