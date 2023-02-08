import { motion } from "framer-motion";
import { diaryItemType } from "../../recoil/diary";
import domtoimage from "dom-to-image";
import { saveAs } from "file-saver";
import { RefObject, useRef } from "react";
import Container from "../common/Container";
import Text from "../common/Text";
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
  console.log(template);
  return (
    <motion.div
      ref={diaryRef}
      variants={diaryVariants}
      whileHover="hover"
      initial="normal"
      onClick={onDownload}
      className={`${
        template!.length < 10 && "bg-white"
      } w-[calc(75vw)] md:w-[calc(48vw)] h-[calc(80vh)] flex flex-col rounded-md shadow-lg `}
    >
      <img
        src={template}
        alt={`${process.env.PUBLIC_URL}/public_assets/noImg.png`}
        className={`${
          template!.length < 10 && "hidden"
        } absolute flex overflow-hidden z-[-1] w-[inherit] h-[inherit] rounded-md `}
      />
      <Container justifyContent="between" className="p-2">
        <Text bold size="2xl">
          {title}
        </Text>
        <Text bold size="2xl">
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
