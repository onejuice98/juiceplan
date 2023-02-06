import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import Divider from "../../components/common/Divider";
import GrayText from "../../components/common/GrayText";
import JuiceFont from "../../components/common/JuiceFont";
import { diaryContent, diaryContentType } from "../../recoil/diary";

const Diary = () => {
  const [isPlusButton, setIsPlusButton] = useState(false);
  const [date, setDate] = useState<string>("");
  const diary = useRecoilState<diaryContentType[]>(diaryContent);
  const navigate = useNavigate();
  return (
    <div className="h-full bg-gray-300/[0.4]">
      <div className="flex h-[100vh] gap-6 justify-center items-center">
        {diary[0].map((value) => (
          <div
            className="flex flex-col w-[calc(25vw-1px)] h-[calc(68vh)] rounded-lg bg-white shadow-lg p-4"
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
                <Link to={`/diary/${value.day}`}>
                  <JuiceFont isSmall isBold>
                    자세히
                  </JuiceFont>
                </Link>
              )}
            </div>
          </div>
        ))}
      </div>

      <button
        onClick={() => {
          setIsPlusButton((prev) => !prev);
        }}
        className="absolute flex justify-center items-center z-2 bottom-2 right-2 w-12 h-12 rounded-full bg-gradient-to-r from-green-200 to-green-500  text-white text-xl"
      >
        +
      </button>
      {isPlusButton && (
        <div className="absolute w-40 h-30 rounded-md bg-gray-400/[0.5] bottom-16 right-2">
          <form className="flex flex-col p-2 gap-2">
            <GrayText> 날짜 입력 </GrayText>
            <input
              type="date"
              required
              onChange={(event) => setDate(event.currentTarget.value)}
              className="border-none rounded-md shadow-sm h-6 w-full"
            />
            <button
              onClick={() => navigate(`/diary/${date}`)}
              className="w-full h-8 bg-green-200 rounded-md shadow-md hover:bg-green-400"
            >
              생성
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Diary;
