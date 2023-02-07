import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import BackSpace from "../../components/common/BackSpace";
import GrayText from "../../components/common/GrayText";
import Display from "../../components/diary/Display";
import { diaryContent, diaryContentType } from "../../recoil/diary";

const Diary = () => {
  const [isPlusButton, setIsPlusButton] = useState(false);
  const [date, setDate] = useState<string>("");
  const diary = useRecoilState<diaryContentType[]>(diaryContent);
  const navigate = useNavigate();
  return (
    <div className="flex flex-col w-full p-2 bg-gray-300/[0.3] gap-4">
      <div className="flex justify-between">
        <BackSpace isHome />
        <button
          onClick={() => {
            setIsPlusButton((prev) => !prev);
          }}
          className="flex justify-center items-center w-12 h-12 rounded-full bg-gradient-to-r from-green-200 to-green-500  text-white text-xl"
        >
          +
        </button>
      </div>

      <div className="flex w-full flex-col justify-center items-center gap-6 md:grid md:grid-cols-2">
        {diary[0].map((value) => (
          <Link key={value.day} to={`/diary/display/${value.day}`}>
            <Display
              day={value.day}
              title={value.title}
              content={value.content}
              template={value.template}
            />
          </Link>
        ))}
      </div>

      {isPlusButton && (
        <div className="fixed w-40 h-30 rounded-md bg-gray-400/[0.8] right-2 top-16">
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
