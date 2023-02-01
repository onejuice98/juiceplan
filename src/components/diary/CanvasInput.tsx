import { FormEvent, useState } from "react";
import { useRecoilState, useSetRecoilState } from "recoil";
import { canvasHeight, canvasWidth } from "../../recoil/diary";

interface ICanvasLimit {
  maxWidth: number | undefined;
  maxHeight: number | undefined;
}
const CanvasInput = ({ maxWidth, maxHeight }: ICanvasLimit) => {
  const [width, setWidth] = useRecoilState<number>(canvasWidth);
  const [height, setHeight] = useRecoilState<number>(canvasHeight);
  const handleWidthChange = (event: FormEvent<HTMLInputElement>) => {
    setWidth(+event.currentTarget.value);
  };
  const handleHeightChange = (event: FormEvent<HTMLInputElement>) => {
    setHeight(+event.currentTarget.value);
  };
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    event.currentTarget.reset();
  };
  return (
    <div>
      <p>
        {maxWidth} {maxHeight}
      </p>
      <form onSubmit={handleSubmit} className="flex justify-between">
        <input
          onChange={handleWidthChange}
          className="w-[80%] rounded-md shadow-md"
          type="number"
          min={1}
          max={maxWidth}
        />
        <input
          onChange={handleHeightChange}
          className="w-[80%] rounded-md shadow-md"
          type="number"
          min={1}
          max={maxHeight}
        />
        <button
          type="submit"
          className="border-[0.5px] bg-white w-10 h-10 justify-center items-center rounded-md shadow-md"
        >
          +
        </button>
      </form>
    </div>
  );
};

export default CanvasInput;
