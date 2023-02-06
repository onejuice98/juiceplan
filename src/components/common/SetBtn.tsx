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
import GrayText from "./GrayText";
import Select from "./Select";

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
        data-collapse-toggle="navbar-sticky"
        type="button"
        className={`inline-flex items-center p-2 text-sm rounded-lg focus:outline-none dark:text-gray-400 ${
          isHover && `dark:hover:bg-gray-700 hover:bg-gray-100`
        } ${isWeakGray ? `text-gray-400` : "text-gray-500"} ${others}`}
        aria-controls="navbar-sticky"
        aria-expanded="false"
        onMouseUp={() => setHover(true)}
        onClick={onClick}
      >
        <svg
          className="w-4 h-4"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
            clipRule="evenodd"
          ></path>
        </svg>
      </button>
      {isSettingBox && hover && (
        <div className="flex flex-col justify-between p-4 rounded-md w-48 h-72 bg-cyan-200 absolute translate-y-[45%] z-[999]">
          <div>
            <GrayText>Text Size</GrayText>
            <Select onSelectChange={handleTextSize}>
              <option value="text-base"> 적당히 </option>
              <option value="text-sm"> 작게 </option>
              <option value="text-lg"> 크게 </option>
            </Select>
          </div>
          <div>
            <GrayText>Text Color</GrayText>
            <Select onSelectChange={handleTextColor}>
              <option value=""> 검정 </option>
              <option value="text-green-500"> 초롱 </option>
              <option value="text-blue-500"> 파랑 </option>
              <option value="text-red-500"> 빨강 </option>
            </Select>
          </div>

          <div>
            <GrayText>HighLight Text</GrayText>
            <Select onSelectChange={handleTextBgColor}>
              <option value=""> 기본 </option>
              <option value="bg-[yellow]"> 노랑 </option>
              <option value="bg-[blue]"> 청록 </option>
              <option value="bg-[green]"> 녹색 </option>
              <option value="bg-[pink]"> 분홍 </option>
            </Select>
          </div>

          <div className="flex justify-end gap-2">
            <button
              className="w-14 h-8 bg-red-500 hover:bg-red-700 text-white rounded-md shadow-md duration-300"
              onClick={() => setHover(false)}
            >
              닫기
            </button>
            <button
              className="w-14 h-8 bg-green-500 hover:bg-green-700 text-white rounded-md shadow-md duration-300"
              onClick={onClick}
            >
              {" "}
              적용{" "}
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default SetBtn;
