import { RefObject, useRef } from "react";
import { useRecoilState, useSetRecoilState } from "recoil";
import { apply, bgImage, strokeColor, strokeWidth } from "../../recoil/diary";
import BackSpace from "../common/BackSpace";
import Button from "../common/Button";
import Container from "../common/Container";
import Text from "../common/Text";

/**
 * 뒤로가기 버튼, background Image을 넣을 input(type="file"), canvas 도구, template에 그린 것을 적용시킬 버튼
 * @returns DayDiary page의 상단메뉴
 */
const MenuBar = () => {
  const setBgImages = useSetRecoilState<string>(bgImage);
  const [isApply, setIsApply] = useRecoilState<boolean>(apply);
  const [stroke, setStroke] = useRecoilState<number>(strokeWidth);
  const [color, setColor] = useRecoilState<string>(strokeColor);
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
    <Container alignItems="center" className="p-2 gap-4 h-16">
      <BackSpace />

      <div>
        <input
          className="p-1 block shadow-md w-full text-sm text-gray-700 border rounded-md cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
          accept="image/png, image/jpeg"
          onChange={readURL}
          ref={imgRef}
          type="file"
        />
        <Text gray className="sm:text-xs text-sm px-1">
          PNG, JPEG or GIF
        </Text>
      </div>
      <Container direction="col" className="gap-2 max-[450px]:hidden">
        <Text gray size="sm">
          Width : {stroke}
        </Text>
        <input
          type="range"
          min="1"
          max="10"
          value={stroke}
          onChange={(event) => setStroke(event.currentTarget.valueAsNumber)}
          step="0.5"
          className="w-12 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
        />
      </Container>

      <div className="max-[450px]:hidden">
        <Text gray size="sm">
          Color
        </Text>
        <input
          type="color"
          value={color}
          onChange={(event) => setColor(event.currentTarget.value)}
          className="w-full h-6 cursor-pointer"
        />
      </div>
      <Button
        white
        hover
        bgColor="emerald"
        className="w-24 h-12"
        onClick={() => setIsApply((prev) => !prev)}
      >
        {isApply ? "Reset" : "적용하기"}
      </Button>
    </Container>
  );
};

export default MenuBar;
