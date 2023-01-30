import e from "express";
import { Reorder, useDragControls } from "framer-motion";
import React, {
  ChangeEvent,
  InputHTMLAttributes,
  MouseEventHandler,
  RefObject,
  useEffect,
  useRef,
  useState,
} from "react";
import { useForm } from "react-hook-form";
import SetBtn from "../common/SetBtn";

interface ILineBreak {
  textLength: boolean;
}
interface ITextarea {
  rows: number;
  lineBreak: {};
}
const Editor = () => {
  const dragControls = useDragControls();

  const { register, watch } = useForm();
  const [contextList, setContextList] = useState<string[]>(["context"]);
  const [isEnter, setIsEnter] = useState(false);
  const [contextNumber, setContextNumber] = useState(0);

  const onKeyEnter = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      setIsEnter(true);
    }

    return isEnter;
  };

  useEffect(() => {
    if (isEnter) {
      console.log("Hello!");
      setContextNumber((num) => num + 1);
      setContextList([...contextList, "context" + contextNumber]);
      setIsEnter(false);
    }
  }, [isEnter]);

  return (
    <div className="p-4 gap-2 flex flex-col">
      <Reorder.Group values={contextList} onReorder={setContextList} axis="y">
        {contextList.map((val, idx) => (
          // key 는 number 면 이거 작동안함 ㅋㅋ;; 완전 핵 어이 없음
          <Reorder.Item value={val} key={val} dragControls={dragControls}>
            <div className="flex gap-2 group relative items-center">
              <button
                onClick={() => setIsEnter(true)}
                className="group-hover:opacity-100 relative opacity-0 hover:opacity-100 hover:bg-gray-200 w-8 h-8 rounded-md duration-500 text-gray-400"
              >
                +
              </button>
              <SetBtn
                isWeakGray
                others="relative opacity-0 group-hover:opacity-100 hover:opacity-100 hover:bg-gray-200 duration-500"
              />
              <input
                {...register(idx + "", {})}
                onKeyUp={onKeyEnter}
                autoComplete="off"
                className={`font-mono border-none bg-gray-100/[0.1] text-base w-full px-1 active:bg-blue-200 duration-150 whitespace-pre-line resize-none`}
                placeholder="내용을 입력하세요. 다음 줄 입력시 'Enter' 입니다."
              />
            </div>
          </Reorder.Item>
        ))}
      </Reorder.Group>
    </div>
  );
};

export default Editor;
