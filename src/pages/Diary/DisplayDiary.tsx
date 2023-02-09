import { useParams } from "react-router-dom";
import { useRecoilState } from "recoil";
import Display from "../../components/diary/Display";
import { diaryContent, diaryContentType } from "../../recoil/diary";

/**
 * 다이어리 하나를 클릭 및 자세히 눌렀을 때 이동되는 페이지, 클릭해서 다운로드 가능하다.
 * @returns 클릭한 다이어리 만을 출력하는 Page
 */
const DisplayDiary = () => {
  const { dayId } = useParams();
  const diary = useRecoilState<diaryContentType[]>(diaryContent);
  const matchedDairy = diary[0].filter((item) => item.day === dayId)[0];
  return (
    <div className="flex justify-center items-center w-[100vw] h-[100vh] bg-gray-300/[0.3]">
      <Display
        day={dayId}
        title={matchedDairy.title}
        content={matchedDairy.content}
        template={matchedDairy.template}
      />
      <div className="absolute top-6 left-8 text-sm animate-pulse font-bold">
        Click 해서 다운로드!
      </div>
    </div>
  );
};

export default DisplayDiary;
