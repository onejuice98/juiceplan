import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { dDayListState, UserInput } from "../../recoil/dDay";
import { AnimatePresence, Reorder, useDragControls } from "framer-motion";
import Divider from "../common/Divider";
import DDayInput from "./DDayInput";
import DDayBox from "./DDayBox";

interface ISetDday {
  modalClose: () => void;
}
const SetDday = ({ modalClose }: ISetDday) => {
  const [dDayList, setdDayList] = useRecoilState<UserInput[]>(dDayListState);
  const dragControls = useDragControls();

  const deleteItem = (name: string | undefined) => {
    dDayList.length !== 1 &&
      setdDayList(dDayList.filter((item) => item.dDayName !== name));
  };
  return (
    <div className="z-10 fixed top-0 left-0 w-[100vw] h-[100vh] bg-black/[0.75]">
      <div className="h-full flex justify-center py-12">
        <div className="w-[80%] h-fit z-10 bg-white opacity-1 rounded-lg flex flex-col justify-between">
          <div className="flex flex-col mt-4 mx-4 gap-3">
            <DDayInput />
            <Divider />

            <AnimatePresence>
              <Reorder.Group
                axis="y"
                values={dDayList}
                onReorder={setdDayList}
                className="h-full flex flex-col gap-5 last:mb-4"
              >
                {dDayList.map((value, idx) => (
                  <Reorder.Item
                    key={value.dDayName}
                    value={value}
                    dragControls={dragControls}
                    dragConstraints={{
                      top: -50,
                      bottom: 100,
                      left: 0,
                      right: 0,
                    }}
                  >
                    <DDayBox
                      dDayName={value.dDayName}
                      date={value.date}
                      isSetBtn
                      isFirst={idx}
                      isDelete={() => deleteItem(value.dDayName)}
                    />
                  </Reorder.Item>
                ))}
              </Reorder.Group>
            </AnimatePresence>
          </div>

          <div className="flex justify-end items-end bg-gray-100 rounded-b-lg">
            <button
              className="w-20 h-10 bg-red-500 text-white rounded-md shadow-lg m-4 font-mono font-medium hover:bg-red-700"
              onClick={modalClose}
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
