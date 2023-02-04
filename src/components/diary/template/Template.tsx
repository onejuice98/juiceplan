import { RefObject, useEffect, useRef, useState } from "react";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { apply, bgImage, resultTemplate } from "../../../recoil/diary";

interface ITemplate {
  width: number;
  height: number;
}
/**
 * template을 만들어내는 componenet, 배경삽입 후 그리기 기능이 있음
 * @param width 부모의 Ref.current.offsetWidth
 * @param height 부모의 Ref.current.offsetWidth
 * @returns DayDiary 의 좌측 부분 배경이미지가 들어가며, 그리기 가능
 */
const Template = ({ width, height }: ITemplate) => {
  const canvasRef: RefObject<HTMLCanvasElement> =
    useRef<HTMLCanvasElement>(null);
  const [context, setContext] = useState<CanvasRenderingContext2D>();
  const [drawContext, setDrawContext] = useState<CanvasRenderingContext2D>();
  const templateImg = useRecoilState<string>(bgImage);
  const [isDrawing, SetIsDrawing] = useState<boolean>(false);
  const setResultTemplate = useSetRecoilState<string | undefined>(
    resultTemplate
  );
  const isApply = useRecoilValue<boolean>(apply);
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (ctx) {
      ctx.strokeStyle = "black";
      ctx.lineWidth = 2.5;
      setDrawContext(ctx);
      setContext(ctx);
    }
    const img = new Image();
    img.src = templateImg[0];

    img.onload = () => {
      context?.drawImage(img, 0, 0, width, height);
    };
  }, [templateImg[0], width, height]);

  useEffect(() => {
    const canvas = canvasRef.current;
    setResultTemplate(canvas?.toDataURL());
  }, [isApply]);
  const drawing = (event: React.MouseEvent<HTMLCanvasElement, MouseEvent>) => {
    const { offsetX, offsetY } = event.nativeEvent;

    if (!isDrawing) {
      drawContext?.beginPath();
      drawContext?.moveTo(offsetX, offsetY);
    } else {
      drawContext?.lineTo(offsetX, offsetY);
      drawContext?.stroke();
    }
  };

  return (
    <div>
      <canvas
        ref={canvasRef}
        width={width}
        height={height}
        onMouseMove={drawing}
        onMouseDown={() => SetIsDrawing(true)}
        onMouseUp={() => SetIsDrawing(false)}
        onMouseLeave={() => SetIsDrawing(false)}
      ></canvas>
    </div>
  );
};

export default Template;
