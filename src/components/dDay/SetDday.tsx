import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { dDayListState, UserInput } from "../../recoil/dDay";
import DayInput from "./DayInput";
import Dday from "./Dday";
import { AnimatePresence, Reorder, useDragControls } from "framer-motion";

interface ISetDday {
  onClick: () => void;
}
const SetDday = ({ onClick }: ISetDday) => {
  const [dDayList, setdDayList] = useRecoilState<UserInput[]>(dDayListState);
  const dragControls = useDragControls();
  useEffect(() => {
    document.body.style.cssText = `
      position: fixed; 
      top: -${window.scrollY}px;
      overflow-y: scroll;
      width: 100%;`;
    return () => {
      const scrollY = document.body.style.top;
      document.body.style.cssText = "";
      window.scrollTo(0, parseInt(scrollY || "0", 10) * -1);
    };
  }, []);

  return (
    <div className="z-10 absolute top-0 left-0 w-[100vw] h-[100vh] bg-black/[0.75] overflow-hidden">
      <div className="h-full flex justify-center items-center">
        <div className="relative w-[80%] h-[80%] z-10 bg-white opacity-1 rounded-lg flex flex-col justify-between">
          <DayInput />
          <AnimatePresence>
            <Reorder.Group
              axis="y"
              values={dDayList}
              onReorder={setdDayList}
              className="h-full"
            >
              {dDayList.map((value, idx) => (
                <Reorder.Item
                  key={value.dDayName}
                  value={value}
                  className="mx-4 mb-4 relative"
                  dragControls={dragControls}
                  dragConstraints={{
                    top: -50,
                    bottom: 100,
                    left: 0,
                    right: 0,
                  }}
                  drag={true}
                  dragDirectionLock
                >
                  {idx === 0 ? (
                    <Dday
                      dDayName={value.dDayName}
                      date={value.date}
                      isSetBtn
                      isFirst
                      isDelete={value.dDayName}
                    />
                  ) : (
                    <Dday
                      dDayName={value.dDayName}
                      date={value.date}
                      isSetBtn
                      isDelete={value.dDayName}
                    />
                  )}
                </Reorder.Item>
              ))}
            </Reorder.Group>
          </AnimatePresence>
          <div className="flex justify-end items-end bg-gray-100 rounded-lg">
            <button
              className="w-20 h-10 bg-red-500 text-white rounded-md shadow-lg m-4 font-mono font-medium hover:bg-red-700"
              onClick={onClick}
            >
              나가기
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SetDday;
