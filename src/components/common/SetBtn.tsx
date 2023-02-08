import React, { useState } from "react";
import { useSetRecoilState } from "recoil";
import {
  itemTextBgColor,
  itemTextBgColorType,
  itemTextColor,
  itemTextColorType,
  itemTextSize,
  itemTextSizeType,
} from "../../recoil/diary";
import Button from "./Button";
import Select from "./Select";
import SetSvg from "./SetSvg";
import Text from "./Text";

interface ISetBtn {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  isHover?: boolean;
  isWeakGray?: boolean;
  others?: string;
  isSettingBox?: boolean;
}
const SetBtn = ({
  onClick,
  isHover,
  isWeakGray,
  others,
  isSettingBox,
}: ISetBtn) => {
  const [hover, setHover] = useState(false);
  const setTextSize = useSetRecoilState<itemTextSizeType>(itemTextSize);
  const setTextColor = useSetRecoilState<itemTextColorType>(itemTextColor);
  const setTextBgColor =
    useSetRecoilState<itemTextBgColorType>(itemTextBgColor);
  const handleTextSize = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value: itemTextSizeType = event.currentTarget.value;
    setTextSize(value);
  };
  const handleTextColor = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value: itemTextColorType = event.currentTarget.value;
    setTextColor(value);
  };
  const handleTextBgColor = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value: itemTextBgColorType = event.currentTarget.value;
    setTextBgColor(value);
  };
  return (
    <>
      <button
        className={`inline-flex items-center p-2 text-sm rounded-lg focus:outline-none dark:text-gray-400 ${
          isHover && `dark:hover:bg-gray-700 hover:bg-gray-100`
        } ${isWeakGray ? `text-gray-400` : "text-gray-500"} ${others}`}
        onMouseUp={() => setHover(true)}
        onClick={onClick}
      >
        <SetSvg w={16} h={16} />
      </button>
      {isSettingBox && hover && (
        <div className="flex flex-col justify-between p-4 rounded-md w-48 h-72 bg-cyan-200 absolute translate-y-[45%] z-[999]">
          <div>
            <Text gray size="sm">
              Text Size
            </Text>
            <Select onSelectChange={handleTextSize}>
              <option value="text-base"> 적당히 </option>
              <option value="text-sm"> 작게 </option>
              <option value="text-lg"> 크게 </option>
            </Select>
          </div>
          <div>
            <Text gray size="sm">
              Text Color
            </Text>
            <Select onSelectChange={handleTextColor}>
              <option value=""> 검정 </option>
              <option value="text-green-500"> 초롱 </option>
              <option value="text-blue-500"> 파랑 </option>
              <option value="text-red-500"> 빨강 </option>
            </Select>
          </div>

          <div>
            <Text gray size="sm">
              Highlight Text
            </Text>
            <Select onSelectChange={handleTextBgColor}>
              <option value=""> 기본 </option>
              <option value="bg-[yellow]"> 노랑 </option>
              <option value="bg-[blue]"> 청록 </option>
              <option value="bg-[green]"> 녹색 </option>
              <option value="bg-[pink]"> 분홍 </option>
            </Select>
          </div>

          <div className="flex justify-end gap-2">
            <Button
              white
              hover
              w={14}
              h={8}
              bgColor="red"
              onClick={() => setHover(false)}
            >
              닫기
            </Button>
            <Button white hover w={14} h={8} bgColor="green" onClick={onClick}>
              적용
            </Button>
          </div>
        </div>
      )}
    </>
  );
};

export default SetBtn;
