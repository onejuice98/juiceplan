import { DragControls } from "framer-motion";
import React, { useState } from "react";
import { useSetRecoilState } from "recoil";
import { textSize, textSizeType } from "../../recoil/diary";

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
  const setTextSize = useSetRecoilState<textSizeType>(textSize);
  const handleTextSize = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value: textSizeType = event.currentTarget.value;
    setTextSize(value);
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
        <div className="w-32 h-72 bg-amber-200 absolute translate-y-[45%] duration-300 z-[999]">
          <button onClick={() => setHover(false)}> X </button>
          <select onChange={handleTextSize}>
            <option value="text-base"> 적당히 </option>
            <option value="text-sm"> 작게 </option>
            <option value="text-lg"> 크게 </option>
          </select>
          <button onClick={onClick}> 적용 </button>
        </div>
      )}
    </>
  );
};

export default SetBtn;
