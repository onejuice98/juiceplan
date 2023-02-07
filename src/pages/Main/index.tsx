import { useRecoilValue } from "recoil";
import { useState } from "react";
import { dDayListState, isErrorState, UserInput } from "../../recoil/dDay";
import Toast from "../../components/common/Toast";
import DDayList from "../../components/dDay/DDayList";
import Layout from "../../components/layout/Layout";
import Profile from "../../components/profile/Profile";
import DDayBox from "../../components/dDay/DDayBox";
import SetBtn from "../../components/common/SetBtn";
import DiaryCard from "../../components/diary/DiaryCard";

const Main = () => {
  const [open, setOpen] = useState(false);
  const dDayUserInputList = useRecoilValue<UserInput[]>(dDayListState);
  const isError = useRecoilValue<boolean>(isErrorState);
  const handleModal = () => setOpen((prev) => !prev);

  return (
    <>
      {isError && <Toast />}
      {open && <DDayList modalClose={handleModal} />}
      <Layout>
        <div className="flex flex-col h-full">
          <div className="w-full grid grid-cols-2 p-2 my-2 gap-2">
            <Profile />
            <div className="flex w-full justify-between gap-2">
              <DDayBox
                dDayName={dDayUserInputList[0].dDayName}
                date={dDayUserInputList[0].date}
              />
              <SetBtn onClick={handleModal} isHover />
            </div>
          </div>

          <div className="flex flex-col p-8 bg-gray-500/[0.1] ">
            <DiaryCard />
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Main;
