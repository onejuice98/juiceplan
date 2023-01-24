import { useRecoilValue } from "recoil";
import Layout from "./components/layout/Layout";
import Profile from "./components/profile/Profile";
import { dDayListState, isErrorState, UserInput } from "./recoil/dDay";
import DDayList from "./components/dDay/DDayList";
import Skeleton from "./components/common/Skeleton";
import { useState } from "react";
import Toast from "./components/common/Toast";
import SetBtn from "./components/common/SetBtn";
import Divider from "./components/common/Divider";
import DDayBox from "./components/dDay/DDayBox";

function App() {
  const [open, setOpen] = useState(false);
  const dDayUserInputList = useRecoilValue<UserInput[]>(dDayListState);
  const isError = useRecoilValue<boolean>(isErrorState);
  const handleModal = () => setOpen((prev) => !prev);
  return (
    <>
      {isError && <Toast />}
      {open && <DDayList modalClose={handleModal} />}
      <Layout>
        <div className="flex flex-col mx-4 gap-3">
          <Profile />

          <Divider />

          <div className="flex justify-between items-center gap-2">
            <DDayBox
              dDayName={dDayUserInputList[0].dDayName}
              date={dDayUserInputList[0].date}
            />
            <SetBtn onClick={handleModal} isHover />
          </div>
          <Divider />

          <div className="flex flex-col gap-6">
            <Skeleton />
          </div>
        </div>
      </Layout>
    </>
  );
}

export default App;
