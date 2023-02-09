import { Link } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { diaryContent, diaryContentType } from "../../recoil/diary";
import Container from "../common/Container";
import Divider from "../common/Divider";
import Text from "../common/Text";
import BgImg from "./BgImg";

/**
 * MainPage 의 Card
 * @returns diary Page 에서 작성한 다이어리를 간략하게 카드로 보여준다.
 */
const DiaryCard = () => {
  const diary = useRecoilValue<diaryContentType[]>(diaryContent);
  return (
    <Container
      direction="col"
      justifyContent="center"
      alignItems="center"
      mdGrid
      className="gap-6 lg:grid-cols-3"
    >
      {diary.map((value) => (
        <div
          className="flex flex-col w-full h-[calc(68vh)] rounded-lg bg-white shadow-lg p-4"
          key={value.day}
        >
          <Text mono bold size="lg">
            {value.day}
          </Text>
          <Divider />

          <Text mono bold size="sm" className="my-2">
            {value.title}
          </Text>
          <BgImg src={value.template} className="shadow-lg" />
          <Container direction="col">
            {value.content.map(
              (context, idx) =>
                idx < 3 && (
                  <Text gray size="sm" key={context.id}>
                    {" "}
                    {context.context}
                  </Text>
                )
            )}

            <Link to={`/diary/display/${value.day}`}>
              <Text mono bold size="sm">
                자세히
              </Text>
            </Link>
          </Container>
        </div>
      ))}
    </Container>
  );
};

export default DiaryCard;
