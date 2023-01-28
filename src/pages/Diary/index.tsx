import {
  addDays,
  addMonths,
  endOfWeek,
  format,
  lastDayOfDecade,
  startOfDay,
  startOfMonth,
  startOfWeek,
  subMonths,
} from "date-fns";
import { endOfMonth } from "date-fns";
import { useState } from "react";
import { Link } from "react-router-dom";

const Diary = () => {
  const today = new Date();
  const YEAR = today.getFullYear();
  const MONTH = today.getMonth() + 1;

  const monthSP = startOfMonth(today);
  const monthRP = endOfMonth(monthSP);

  const addWeek = (today: Date) => {
    let date = startOfWeek(startOfDay(today));

    return () => {
      const week = [...Array(7)].map((_, index) => addDays(date, index));
      date = addDays(week[6], 1);
      return week;
    };
  };
  const addMonth = (today: Date) => {
    let month = [];
    let date = today;

    const weekGen = addWeek(startOfMonth(date));
    const endDate = startOfDay(endOfMonth(date));
    month.push(weekGen());

    while (lastDayOfRange(month) < endDate) {
      month.push(weekGen());
    }
    const range = month;
    month = [];
    date = addDays(lastDayOfRange(range), 1);
    return range;
  };
  const lastDayOfRange = (range: any) => {
    return range[range.length - 1][6];
  };

  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(new Date());
  const data = addMonth(currentDate);

  const nextMonth = () => {
    setCurrentDate(addMonths(currentDate, 1));
  };
  const prevMonth = () => {
    setCurrentDate(subMonths(currentDate, 1));
  };
  return (
    <div>
      <div>
        {YEAR}년 {MONTH}월
      </div>
      {data.map((week, weekIdx) => (
        <div className="grid grid-cols-7" key={weekIdx}>
          {week.map((day, dayIdx) => (
            <div
              onClick={() => setSelectedDate(day)}
              className={`h-28 flex flex-col items-center border-b border-r`}
              key={dayIdx}
            >
              <Link
                to={format(currentDate, "yyyy-MM") + "-" + format(day, "dd")}
              >
                <div
                  className={`flex text-xs font-bold  h-6 w-6 justify-center items-center cursor-pointer`}
                >
                  {format(day, "dd")}
                </div>
              </Link>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Diary;
