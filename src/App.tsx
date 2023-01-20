import { useRecoilValue } from "recoil";
import Layout from "components/layout/Layout";
import Profile from "components/profile/Profile";
import { dDayUserInputState, UserInput } from "./recoil/dDay";
import Dday from "components/dDay/Dday";
import SetDday from "components/dDay/SetDday";
import Horizon from "components/common/Horizon";
import Skeleton from "components/common/Skeleton";

function App() {
  const dDayUserInput = useRecoilValue<UserInput>(dDayUserInputState);
  return (
    <div>
      <Layout>
        <Profile />
        <Horizon />
        <div className="m-4 flex gap-2 justify-between items-center">
          <Dday dDayName={dDayUserInput.dDayName} date={dDayUserInput.date} />

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
