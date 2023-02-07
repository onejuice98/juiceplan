import { Link } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { diaryContent, diaryContentType } from "../../recoil/diary";
import Divider from "../common/Divider";
import GrayText from "../common/GrayText";
import JuiceFont from "../common/JuiceFont";

const DiaryCard = () => {
  const diary = useRecoilValue<diaryContentType[]>(diaryContent);
  return (
    <div className="flex flex-col gap-6 justify-center items-center md:grid md:grid-cols-2 lg:grid-cols-3 bg-gray-300/[0.3]">
      {diary.map((value) => (
        <div
          className="flex flex-col w-full h-[calc(68vh)] rounded-lg bg-white shadow-lg p-4"
          key={value.day}
        >
          <JuiceFont isBig isBold>
            {value.day}
          </JuiceFont>
          <Divider />
          <JuiceFont isSmall isBold others="my-2">
            {value.title}
          </JuiceFont>
          <img
            src={value.template}
            className={`${
              !value.template && "hidden"
            } flex justify-center items-center overflow-hidden w-[inherit] h-[inhrerit] rounded-sm shadow-md`}
          />
          <div className="flex flex-col mt-2 px-2">
            {value.content.map(
              (context, idx) =>
                idx < 3 && (
                  <GrayText key={context.id}>{context.context}</GrayText>
                )
            )}
            {value.content && (
              <Link to={`/diary/display/${value.day}`}>
                <JuiceFont isSmall isBold>
                  자세히
                </JuiceFont>
              </Link>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default DiaryCard;
