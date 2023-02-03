import { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useRecoilValue } from "recoil";
import JuiceFont from "../../components/common/JuiceFont";
import CanvasInput from "../../components/diary/CanvasInput";
import DiaryInput from "../../components/diary/DiaryInput";
import LeftCanvas from "../../components/diary/LeftCanvas";
import SideBar from "../../components/diary/SideBar";
import { canvasHeight, canvasWidth } from "../../recoil/diary";

interface ICanvasProps {
  width: number;
  height: number;
}
const DayDiary = () => {
  const divRef = useRef<HTMLDivElement>(null);
  const { dayId } = useParams();
  const history = useNavigate();

  const width = useRecoilValue<number>(canvasWidth);
  const height = useRecoilValue<number>(canvasHeight);

  const [rightCanvanWidth, setRightCanvasWidth] = useState<number>(0);
  const [rightCanvasHeight, setRightCanvasHeight] = useState<number>(0);

  useEffect(() => {
    divRef.current && setRightCanvasHeight(divRef.current?.offsetHeight - 10);
    divRef.current && setRightCanvasWidth(divRef.current?.offsetWidth - 10);
  }, [divRef]);
  return (
    <div className="grid grid-cols-[240px_1fr] w-[100vw] h-[100vh]">
      <SideBar day={dayId} />
      <div className="bg-gray-100/[0.7]" ref={divRef}>
        <LeftCanvas
          leftWidth={width}
          leftHeight={height}
          rightWidth={rightCanvanWidth}
          rightHeight={rightCanvasHeight}
        />
      </div>
    </div>
  );
};

export default DayDiary;
