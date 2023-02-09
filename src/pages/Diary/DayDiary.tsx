import { RefObject, useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { useRecoilValue } from "recoil";
import BgImg from "../../components/diary/BgImg";
import Editor from "../../components/diary/editor/Editor";
import MenuBar from "../../components/diary/MenuBar";
import Template from "../../components/diary/template/Template";
import { apply, resultTemplate } from "../../recoil/diary";

/**
 * Editor와 Template를 조작하며 Diary 작성할 수 있는 Page이다.
 * @returns Editor Page로 Editor, Template를 출력한다.
 */
const DayDiary = () => {
  const { dayId } = useParams();
  const isApply = useRecoilValue<boolean>(apply);
  const template = useRecoilValue<string | undefined>(resultTemplate);
  const divRef: RefObject<HTMLDivElement> = useRef<HTMLDivElement>(null);
  const [templateWidth, setTemplateWidth] = useState<number>(0);
  const [templateHeight, setTemplateHeight] = useState<number>(0);

  const handleResize = () => {
    divRef.current && setTemplateWidth(divRef.current?.offsetWidth);
    divRef.current && setTemplateHeight(divRef.current?.offsetHeight);
  };
  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div className="flex flex-col w-[100vw] h-[100vh] bg-gray-100/[0.7]">
      <MenuBar />
      <div className="flex divide-x-[1px] w-full h-full">
        <div className="w-[50vw]" ref={divRef}>
          <Template width={templateWidth} height={templateHeight} />
        </div>
        <div className="w-[calc(50vw-1px)] h-[calc(100vh-64px)]">
          {isApply && <BgImg absolute z src={template} />}
          <Editor day={dayId} />
        </div>
      </div>
    </div>
  );
};

export default DayDiary;
