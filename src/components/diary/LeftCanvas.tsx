import { RefObject, useEffect, useRef, useState } from "react";
import { useRecoilState } from "recoil";
import { createTextChangeRange } from "typescript";
import { bgImage } from "../../recoil/diary";
import Editor from "./editor/Editor";

interface ILCanvas {
  leftWidth: number;
  leftHeight: number;
  rightWidth: number;
  rightHeight: number;
}
const LeftCanvas = ({
  leftWidth,
  leftHeight,
  rightWidth,
  rightHeight,
}: ILCanvas) => {
  const canvasRef: RefObject<HTMLCanvasElement> =
    useRef<HTMLCanvasElement>(null);
  const canvasRef2: RefObject<HTMLCanvasElement> =
    useRef<HTMLCanvasElement>(null);
  const [context, setContext] = useState<CanvasRenderingContext2D>();
  const [context2, setContext2] = useState<CanvasRenderingContext2D>();
  const bgImages = useRecoilState<string>(bgImage);
  const [isDrawing, setIsDrawing] = useState<boolean>(false);
  const [leftToRight, setLeftToRight] = useState(false);
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");

    if (ctx) {
      ctx.strokeStyle = "black"; // 선 색
      ctx.lineWidth = 2.5; // 선 굵기
      setContext(ctx);
    }
  });
  const toRight = () => {
    setLeftToRight(true);
  };
  useEffect(() => {
    const canvas2 = canvasRef2.current;
    const ctx2 = canvas2?.getContext("2d");

    if (ctx2 && leftWidth > 0 && leftHeight > 0) {
      const content2 = context?.getImageData(0, 0, leftWidth, leftHeight);
      content2 && ctx2.putImageData(content2, 0, 0);
      setLeftToRight(false);
    }
  }, [leftToRight]);
  const drawing = (nativeEvent: any) => {
    const { offsetX, offsetY } = nativeEvent.nativeEvent;
    if (!isDrawing) {
      context?.beginPath();
      context?.moveTo(offsetX, offsetY);
    } else {
      context?.lineTo(offsetX, offsetY);
      context?.stroke();
    }
  };
  const startDrawing = () => {
    setIsDrawing(true);
  };
  const stopDrawing = () => {
    setIsDrawing(false);
  };

  /**
   * <canvas
        ref={canvasRef2}
        width={rightWidth}
        height={rightHeight}
        className="border-2 border-gray-400 rounded-md"
      ></canvas>
   */
  useEffect(() => {
    const canvas2 = canvasRef2.current;
    const ctx2 = canvas2?.getContext("2d");

    ctx2 && setContext2(ctx2);

    const img = new Image();
    img.onload = () => {
      context2?.drawImage(img, 0, 0, 435, 662);
    };
    img.src = bgImages[0];
  }, [bgImages]);
  return (
    <div className="grid grid-cols-2 h-full divide-x-2">
      <div>
        <canvas
          ref={canvasRef}
          width="435px"
          height="662px"
          onMouseDown={stopDrawing}
          onMouseUp={startDrawing}
          onMouseMove={drawing}
          onMouseLeave={stopDrawing}
        >
          <canvas
            ref={canvasRef2}
            width="435px"
            height="662px"
            className="z-2 bg-blue-500"
          ></canvas>
        </canvas>

        <button onClick={toRight}> 옆으로! </button>
      </div>
    </div>
  );
};

export default LeftCanvas;
