import { RefObject, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilState, useSetRecoilState } from "recoil";
import { apply, bgImage } from "../../recoil/diary";

/**
 * 뒤로가기 버튼, background Image을 넣을 input(type="file"), template에 그린 것을 적용시킬 버튼
 * @returns <DayDiary /> page의 상단메뉴
 */
const MenuBar = () => {
  const history = useNavigate();
  const setBgImages = useSetRecoilState<string>(bgImage);
  const [isApply, setIsApply] = useRecoilState<boolean>(apply);
  const imgRef: RefObject<HTMLInputElement> = useRef<HTMLInputElement>(null);
  const readURL = () => {
    if (!imgRef) return;
    const file = imgRef.current?.files;
    const reader = new FileReader();
    if (!file) return;
    reader.readAsDataURL(file[0]);
    reader.onloadend = () => {
      if (typeof reader.result === "string") setBgImages(reader.result);
    };
  };
  return (
    <div className="flex w-full h-16 p-2 gap-4 items-center">
      <div className="h-fit flex items-center justify-between">
        <button
          className="w-10 h-10 border-[1px] border-gray-400 rounded-md shadow-md hover:bg-gray-200 hover:rounded-md duration-500 text-lg"
          onClick={() => history(-1)}
        >
          👈
        </button>
      </div>
      <div>
        <input
          className="p-1 block shadow-md w-full text-sm text-gray-700 border rounded-md cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
          accept="image/png, image/jpeg"
          onChange={readURL}
          ref={imgRef}
          type="file"
        />
        <p className="px-1 text-sm text-gray-500 dark:text-gray-300">
          PNG, JPEG or GIF
        </p>
      </div>

      <button
        className="w-24 h-12 bg-emerald-500 p-2 rounded-md shadow-md text-white hover:bg-emerald-700 duration-300"
        onClick={() => setIsApply((prev) => !prev)}
      >
        {isApply ? "Reset" : "적용하기"}
      </button>
    </div>
  );
};

export default MenuBar;
