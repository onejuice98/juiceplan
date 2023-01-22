import { useState } from "react";
import { useRecoilState } from "recoil";
import { dDayListState, UserInput } from "../../recoil/dDay";
import DayInput from "./DayInput";
import Dday from "./Dday";
import { AnimatePresence, Reorder, useDragControls } from "framer-motion";
import SetBtn from "./SetBtn";
import Toast from "./Toast";

const SetDday = () => {
  const [open, setOpen] = useState(false);
  const [dDayList, setdDayList] = useRecoilState<UserInput[]>(dDayListState);
  const handleModal = () => setOpen((prev) => !prev);
  const dragControls = useDragControls();

  return (
    <div>
      <SetBtn onClick={handleModal} isHover />
      {open && (
        <div className="z-10 absolute top-0 left-0 w-[100vw] h-[100vh] bg-black/[0.75] flex justify-center items-center">
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
                  >
                    {idx === 0 ? (
                      <Dday
                        dDayName={value.dDayName}
                        date={value.date}
                        isSetBtn
                        isFirst
                      />
                    ) : (
                      <Dday
                        dDayName={value.dDayName}
                        date={value.date}
                        isSetBtn
                      />
                    )}
                  </Reorder.Item>
                ))}
              </Reorder.Group>
            </AnimatePresence>
            <div className="flex justify-end items-end bg-gray-100 rounded-lg">
              <button
                className="w-20 h-10 bg-red-500 text-white rounded-md shadow-lg m-4 font-mono font-medium hover:bg-red-700"
                onClick={handleModal}
              >
                나가기
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SetDday;
