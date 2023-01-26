import { useRecoilValue } from "recoil";
import { useEffect, useState } from "react";
import axios from "axios";
import { dDayListState, isErrorState, UserInput } from "../../recoil/dDay";
import Toast from "../../components/common/Toast";
import DDayList from "../../components/dDay/DDayList";
import Layout from "../../components/layout/Layout";
import Profile from "../../components/profile/Profile";
import Divider from "../../components/common/Divider";
import DDayBox from "../../components/dDay/DDayBox";
import SetBtn from "../../components/common/SetBtn";
import Skeleton from "../../components/common/Skeleton";

const Main = () => {
  const [open, setOpen] = useState(false);
  const dDayUserInputList = useRecoilValue<UserInput[]>(dDayListState);
  const isError = useRecoilValue<boolean>(isErrorState);
  const handleModal = () => setOpen((prev) => !prev);
  const callApi = async () => {
    axios.get("/api").then((res) => console.log(res.data.test));
  };
  useEffect(() => {
    callApi();
  }, []);
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
};

export default Main;
