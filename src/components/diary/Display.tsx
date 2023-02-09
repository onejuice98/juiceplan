import { motion } from "framer-motion";
import { diaryItemType } from "../../recoil/diary";
import domtoimage from "dom-to-image";
import { saveAs } from "file-saver";
import { RefObject, useRef } from "react";
import Container from "../common/Container";
import Text from "../common/Text";
import BgImg from "./BgImg";
interface IDisplay {
  template?: string;
  title: string;
  day: string | undefined;
  content: diaryItemType[];
}
const diaryVariants = {
  normal: {
    scale: 1,
  },
  hover: {
    scale: 1.025,
    transition: {
      duration: 0.3,
    },
  },
};

/**
 * (Diary Main page, DisplayDiary Page)에서 보여지며, 다운로드 기능 및 전반적인 정보를 보여준다.
 * @param template string | undefined // Diary 배경 이미지 URL
 * @param title string // Diary Title을 표기
 * @param day string | undefined // day 표기
 * @param content dirayItemType[] // 스타일을 포함한 내용을 가짐
 * @returns Display Component 는 Diary 전체적인 내용을 정리한 Component 이다.
 */
const Display = ({ template, title, day, content }: IDisplay) => {
  const diaryRef: RefObject<HTMLDivElement> = useRef<HTMLDivElement>(null);
  // 컴포넌트 다운로드 함수
  const onDownload = () => {
    const diary = diaryRef.current;
    if (!diary) return;
    domtoimage.toBlob(diary).then((blob) => {
      saveAs(blob, `${day}_${title}`);
    });
  };
  return (
    <motion.div
      ref={diaryRef}
      variants={diaryVariants}
      whileHover="hover"
      initial="normal"
      onClick={onDownload}
      className={`${
        template!.length < 10 && "bg-white"
      } w-[calc(75vw)] md:w-[calc(48vw)] h-[calc(80vh)] flex flex-col rounded-md shadow-lg`}
    >
      <BgImg absolute z src={template} />

      <Container justifyContent="between" className="p-2">
        <Text bold className="sm:text-base md:text-2xl">
          {title}
        </Text>
        <Text bold className="sm:text-base md:text-2xl">
          {day}
        </Text>
      </Container>

      <div className="p-2">
        {content.map((context) => (
          <div
            key={context.id}
            className={`w-fit h-fit p-1 rounded-md ${context.style.textBg} ${context.style.textColor} ${context.style.textSize}`}
          >
            {context.context}
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default Display;
