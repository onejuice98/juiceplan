import { motion } from "framer-motion";
import { diaryItemType } from "../../recoil/diary";
import domtoimage from "dom-to-image";
import { saveAs } from "file-saver";
import { RefObject, useRef } from "react";
interface IDisplay {
  template?: string;
  title: string;
  day: string | undefined;
  content: diaryItemType[];
  isDisplay?: boolean;
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
        template === "" && "bg-white"
      } w-[calc(75vw)] md:w-[calc(48vw)] h-[calc(80vh)] flex flex-col rounded-md shadow-lg `}
    >
      <img
        src={template}
        className={`${
          template === "" && "hidden"
        } absolute flex overflow-hidden z-[-1] w-[inherit] h-[inherit] rounded-md `}
      />
      <div className="flex justify-between p-2">
        <div className="text-2xl font-bold">{title}</div>
        <div className="text-2xl font-bold">{day}</div>
      </div>

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
