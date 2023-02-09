import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import BackSpace from "../../components/common/BackSpace";
import Button from "../../components/common/Button";
import Container from "../../components/common/Container";
import Text from "../../components/common/Text";
import Display from "../../components/diary/Display";
import { diaryContent, diaryContentType } from "../../recoil/diary";

/**
 * Diary Main page로 반응형으로 되어있으며, 각종 diary 추가 및 자세한 diary로 이동 가능하다.
 * @returns Diary Main page, Diary 추가 기능, Main 이동기능, Display Diary 이동 기능, Diary list 출력 한다.
 */
const Diary = () => {
  const [isPlus, setIsPlus] = useState(false);
  const [date, setDate] = useState<string>("");
  const diary = useRecoilState<diaryContentType[]>(diaryContent);
  const navigate = useNavigate();
  return (
    <div className="flex flex-col p-2 bg-gray-300/[0.3] gap-4">
      <Container justifyContent="between" alignItems="center">
        <BackSpace isHome />
        <Button
          white
          hover
          bgColor="sky"
          weight="medium"
          className="w-32 h-12 p-2"
          onClick={() => {
            setIsPlus((prev) => !prev);
          }}
        >
          다이어리 쓰기
        </Button>
      </Container>

      <Container
        direction="col"
        justifyContent="center"
        alignItems="center"
        mdGrid
        className="w-full gap-6"
      >
        {diary[0].map((value) => (
          <Link key={value.day} to={`/juiceplan/diary/display/${value.day}`}>
            <Display
              day={value.day}
              title={value.title}
              content={value.content}
              template={value.template}
            />
          </Link>
        ))}
      </Container>

      {isPlus && (
        <div className="fixed w-40 h-30 rounded-md bg-gray-400/[0.8] right-2 top-16">
          <form className="flex flex-col p-2 gap-2">
            <Text gray size="sm">
              날짜 입력
            </Text>
            <input
              type="date"
              required
              onChange={(event) => setDate(event.currentTarget.value)}
              className="border-none rounded-md shadow-sm h-6 w-full"
            />
            <Button
              hover
              bgColor="green"
              className="w-full h-8"
              onClick={() => navigate(`/juiceplan/diary/${date}`)}
            >
              생성
            </Button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Diary;
