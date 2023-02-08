import { Link } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { diaryContent, diaryContentType } from "../../recoil/diary";
import Container from "../common/Container";
import Divider from "../common/Divider";
import Text from "../common/Text";

/**
 * MainPage 의 Card
 * @returns diary Page 에서 작성한 다이어리를 간략하게 카드로 보여준다.
 */
const DiaryCard = () => {
  const diary = useRecoilValue<diaryContentType[]>(diaryContent);
  return (
    <div className="flex flex-col gap-6 justify-center items-center md:grid md:grid-cols-2 lg:grid-cols-3">
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

          <img
            src={value.template}
            alt={`${process.env.PUBLIC_URL}/public_assets/noImg.png`}
            className={`${
              value.template!.length < 10 && "hidden"
            } flex justify-center items-center overflow-hidden w-[inherit] h-[inhrerit] rounded-sm shadow-md`}
          />
          <Container direction="col" className="">
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
    </div>
  );
};

export default DiaryCard;
