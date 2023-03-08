import { useRecoilValue } from "recoil";
import { useState } from "react";
import { dDayListState, isErrorState, UserInput } from "../../recoil/dDay";
import Toast from "./Toast";
import DDayList from "../../components/dDay/DDayList";
import Layout from "../../components/layout/Layout";
import Profile from "../../components/profile/Profile";
import DDayBox from "../../components/dDay/DDayBox";
import SetBtn from "../../components/common/SetBtn";
import DiaryCard from "../../components/diary/DiaryCard";
import Container from "../../components/common/Container";

/**
 * Main page "/" 가 되며, Layout은 header, content, footer 로 구성됨. (반응형 웹페이지)
 * diary page로 이동 가능
 * @returns Main Page, 프로필 D-day 표기, Diary 의 요약 Card를 표기
 */
const Main = () => {
  const [open, setOpen] = useState(false);
  const dday = useRecoilValue<UserInput[]>(dDayListState);
  const isError = useRecoilValue<boolean>(isErrorState);
  const handleModal = () => setOpen((prev) => !prev);

  return (
    <>
      {isError && <Toast />}
      {open && <DDayList modalClose={handleModal} />}
      <Layout>
        <Container direction="col" justifyContent="center">
          <div className="w-full grid grid-cols-2 p-2 my-2 gap-2">
            <Profile />
            <Container justifyContent="between">
              <DDayBox dDayName={dday[0].dday} date={dday[0].date} />
              <SetBtn onClick={handleModal} isHover />
            </Container>
          </div>

          <Container direction="col" className="p-8 bg-gray-500/[0.1]">
            <DiaryCard />
          </Container>
        </Container>
      </Layout>
    </>
  );
};

export default Main;
