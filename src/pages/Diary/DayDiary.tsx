import { useNavigate, useParams } from "react-router-dom";
import { useRecoilValue } from "recoil";
import JuiceFont from "../../components/common/JuiceFont";
import DiaryInput from "../../components/diary/DiaryInput";
import { diaryText } from "../../recoil/diary";

const DayDiary = () => {
  const { dayId } = useParams();
  const history = useNavigate();
  const list = useRecoilValue<string[]>(diaryText);

  return (
    <div className="grid grid-cols-[240px_1fr] w-[100vw] h-[100vh]">
      <div className="flex flex-col w-60 h-full bg-emerald-300 p-2 gap-4">
        <div className="w-full h-fit flex items-center justify-between">
          <button
            className="w-10 h-10 border-[1px] border-gray-400 rounded-md shadow-md hover:bg-gray-200 hover:rounded-md duration-500 text-lg"
            onClick={() => history(-1)}
          >
            👈
          </button>
          <JuiceFont isBold>{dayId}</JuiceFont>
        </div>
        <DiaryInput />
        <button className="bg-violet-500 p-2 rounded-md shadow-md text-white">
          네모 넣기
        </button>
        <div></div>
      </div>
      <div className="bg-gray-100/[0.7] p-4">
        <canvas></canvas>
        {list.map((value, idx) => (
          <div key={idx}> {value} </div>
        ))}
      </div>
    </div>
  );
};

export default DayDiary;
