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
  others?: string;
  isSettingBox?: boolean;
}
/**
 * Main Page, Diary Editor에서 사용되며, onClick 추가 할 수 있으며, editor의 content style을 제어할 수 있다.
 * @param onClick React.MouseEventHandler<HTMLButtonElement> // onClick Event 제어 가능
 * @param isHover boolean | undefined // hover CSS 추가기능
 * @param others string | undefined // className 으로 CSS 추가 설정 가능
 * @param isSettingBox boolean | undefiend // Editor에서 사용하며, 유무에 따라 설정 창이 뜬다.
 * @returns Setting Button Svg를 포함하는 Component
 */
const SetBtn = ({ onClick, isHover, others, isSettingBox }: ISetBtn) => {
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
        className={`inline-flex items-center p-2 text-sm rounded-lg focus:outline-none ${
          isHover && `hover:bg-gray-100`
        } text-gray-500 ${others}`}
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
              bgColor="red"
              className="w-14 h-8"
              onClick={() => setHover(false)}
            >
              닫기
            </Button>
            <Button
              white
              hover
              bgColor="green"
              className="w-14 h-8"
              onClick={onClick}
            >
              적용
            </Button>
          </div>
        </div>
      )}
    </>
  );
};

export default SetBtn;
