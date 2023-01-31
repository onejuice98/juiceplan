import React, {
  MouseEventHandler,
  RefObject,
  useEffect,
  useRef,
  useState,
} from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { useRecoilState, useRecoilValue } from "recoil";
import { dDayListState, UserInput } from "../../recoil/dDay";
import {
  DiaryContext,
  diaryContextState,
  textSize,
  textSizeType,
} from "../../recoil/diary";
import Divider from "../common/Divider";
import JuiceFont from "../common/JuiceFont";
import SetBtn from "../common/SetBtn";

interface IEditor {
  day: string;
}
const Editor = ({ day }: IEditor) => {
  const { register, watch } = useForm();
  const [contextList, setContextList] =
    useRecoilState<DiaryContext[]>(diaryContextState);
  const contextRef = useRef<(HTMLInputElement | null)[]>([]);
  const [isEnter, setIsEnter] = useState(false);
  const [contextNumber, setContextNumber] = useState(1);
  const [makeDisable, setMakeDisable] = useState(false);
  const [onSetting, setOnSetting] = useState(false);
  const [inputTextSize, setInputTextSize] = useState<string[]>([]);
  const [fontSize, setFontSize] = useRecoilState<textSizeType>(textSize);
  const onKeyEnter = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      setIsEnter(true);
    }
    return isEnter;
  };
  const onContextClick = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    index: number
  ) => {
    console.log(index);
    let copiedInputTextSize = [...inputTextSize];
    copiedInputTextSize[index] = fontSize;
    setInputTextSize(copiedInputTextSize);
  };

  const onSettingClick = (index: number) => {
    let copiedInputTextSize = [...inputTextSize];
    copiedInputTextSize[index] = fontSize;
    setInputTextSize(copiedInputTextSize);
    setFontSize("");
  };

  useEffect(() => {
    if (isEnter) {
      setContextNumber((num) => num + 1);
      setContextList([
        ...contextList,
        {
          id: "context" + contextNumber,
          context: watch("context" + contextNumber),
        },
      ]);
      setInputTextSize([...inputTextSize, ""]);
      setIsEnter(false);
    }
  }, [isEnter]);

  return (
    <div className="p-4 gap-1 flex flex-col">
      <div className="flex justify-between items-center">
        <JuiceFont>{day}</JuiceFont>
        <button
          onClick={() => setMakeDisable((prev) => !prev)}
          className="font-mono bg-emerald-400 p-1 rounded-md shadow-md text-white hover:bg-emerald-600 duration-300"
        >
          {makeDisable ? "Edit" : "Save"}
        </button>
      </div>
      <div className="flex gap-4 items-center">
        <JuiceFont isBold isBig others="whitespace-nowrap">
          제목
        </JuiceFont>
        <input
          disabled={makeDisable}
          className="p-2 font-bold text-lg border-none w-full rounded-md  bg-gray-100/[0.1]"
        />
      </div>
      <Divider />

      {contextList.map((value, idx) => (
        <div key={value.id} className="flex gap-1 group relative items-center">
          <button
            onClick={() => setIsEnter(true)}
            className="group-hover:opacity-100 relative opacity-0 hover:opacity-100 hover:bg-gray-200 w-8 h-8 rounded-md duration-500 text-gray-400"
          >
            +
          </button>
          <SetBtn
            isWeakGray
            isSettingBox
            onClick={() => onSettingClick(idx)}
            others="relative opacity-0 group-hover:opacity-100 hover:opacity-100 hover:bg-gray-200 duration-500"
          />
          <input
            {...register("context" + idx, {})}
            onKeyUp={onKeyEnter}
            autoComplete="off"
            disabled={makeDisable}
            key={value.id}
            className={`font-mono border-none bg-gray-100/[0.1] w-full px-1 active:bg-blue-200 active:rounded-sm duration-150 whitespace-pre-line resize-none ${inputTextSize[idx]}`}
            placeholder="내용을 입력하세요. 다음 줄 입력시 'Enter' 입니다."
          />
        </div>
      ))}
    </div>
  );
};

export default Editor;
