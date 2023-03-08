import { useCalcDays } from "../../hooks/useCalcDays";
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
  // D-day 계산
  const { result, weekend } = useCalcDays(date);

  return (
    <div className="flex justify-between w-full h-full bg-gradient-to-b from-rose-100 to-teal-100 rounded-md shadow-md p-2">
      <Container direction="col" justifyContent="between">
        <Text bold mono>
          {isFirst === 0 && `⭐️ `}
          {dDayName}
        </Text>

        <Tooltip message={`주말 : ${weekend} 평일 : ${result - weekend}`}>
          <Text bold gray mono size="xs" pointer>
            {date} D{result > 0 ? result * -1 : `+${result * -1}`}
          </Text>
        </Tooltip>
      </Container>
      {isDelete && <button onClick={isDelete}>❌</button>}
    </div>
  );
};

export default DDayBox;
