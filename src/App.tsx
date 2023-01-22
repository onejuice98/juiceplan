import { useRecoilValue } from "recoil";
import Layout from "./components/layout/Layout";
import Profile from "./components/profile/Profile";
import { dDayListState, isErrorState, UserInput } from "./recoil/dDay";
import Dday from "./components/dDay/Dday";
import SetDday from "./components/dDay/SetDday";
import Horizon from "./components/common/Horizon";
import Skeleton from "./components/common/Skeleton";
import Toast from "./components/dDay/Toast";

function App() {
  const dDayUserInputList = useRecoilValue<UserInput[]>(dDayListState);
  const isError = useRecoilValue<boolean>(isErrorState);
  return (
    <div>
      {isError && <Toast />}
      <Layout>
        <Profile />
        <Horizon />
        <div className="flex justify-between mx-4 items-center gap-2">
          <Dday
            dDayName={dDayUserInputList[0].dDayName}
            date={dDayUserInputList[0].date}
          />
          <SetDday />
        </div>
        <Horizon />
        <div className="flex flex-col gap-6 mx-4 my-6">
          <Skeleton />
        </div>
      </Layout>
    </div>
  );
}

export default App;
