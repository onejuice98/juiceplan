import { useRecoilState } from "recoil";
import { dDayListState, UserInput } from "../../recoil/dDay";
import { AnimatePresence, Reorder, useDragControls } from "framer-motion";
import Divider from "../common/Divider";
import DDayInput from "./DDayInput";
import DDayBox from "./DDayBox";
import Container from "../common/Container";
import Button from "../common/Button";

interface ISetDday {
  modalClose: () => void;
}
/**
 * Modal 형식으로 보여지고, 사용자가 Date 입력하여 추가 삭제 가능하며, Drag & drop 으로 최상단으로 올려 Main page에 표기되는 D-day 설정 가능하다.
 * @param modalClose ()=>void // Modal 닫기 버튼 onClick
 * @returns modal Componenet, D-dayList로 추가 및 제거 가능
 */
const SetDday = ({ modalClose }: ISetDday) => {
  const [dDayList, setdDayList] = useRecoilState<UserInput[]>(dDayListState);
  const dragControls = useDragControls();

  const deleteItem = (name: string | undefined) => {
    dDayList.length !== 1 &&
      setdDayList(dDayList.filter((item) => item.dday !== name));
  };
  return (
    <div className="z-20 fixed top-0 left-0 w-[100vw] h-[100vh] bg-black/[0.75]">
      <Container justifyContent="center" className="py-12">
        <Container
          direction="col"
          className="w-4/5 z-10 h-fit bg-white rounded-lg"
        >
          <Container direction="col" className="m-4 gap-3">
            <DDayInput />
            <Divider />

            <AnimatePresence>
              <Reorder.Group
                axis="y"
                values={dDayList}
                onReorder={setdDayList}
                className="h-full flex flex-col gap-5"
              >
                {dDayList.map((value, idx) => (
                  <Reorder.Item
                    key={value.dday}
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
                      dDayName={value.dday}
                      date={value.date}
                      isFirst={idx}
                      isDelete={() => deleteItem(value.dday)}
                    />
                  </Reorder.Item>
                ))}
              </Reorder.Group>
            </AnimatePresence>
          </Container>

          <Container
            justifyContent="end"
            alignItems="end"
            className="bg-gray-100 rounded-b-lg"
          >
            <Button
              white
              hover
              bgColor="red"
              weight="medium"
              className="w-20 h-10 m-4"
              onClick={modalClose}
            >
              나가기
            </Button>
          </Container>
        </Container>
      </Container>
    </div>
  );
};

export default SetDday;
