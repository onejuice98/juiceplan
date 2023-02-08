import { RefObject, useEffect, useRef, useState } from "react";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import {
  apply,
  bgImage,
  resultTemplate,
  strokeColor,
  strokeWidth,
} from "../../../recoil/diary";

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
  const templateImg = useRecoilState<string>(bgImage);
  const [isDrawing, SetIsDrawing] = useState<boolean>(false);
  const stroke = useRecoilValue<number>(strokeWidth);
  const color = useRecoilValue<string>(strokeColor);

  const setResultTemplate = useSetRecoilState<string | undefined>(
    resultTemplate
  );
  const isApply = useRecoilValue<boolean>(apply);

  // stroke style 지정 (stroke가 변할 때 마다 실행)
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (ctx) {
      ctx.strokeStyle = color;
      ctx.lineWidth = stroke;
      setContext(ctx);
    }
  }, [stroke, color]);
  // background img 지정 (width, height, 배경 바뀔 때 마다 실행)
  useEffect(() => {
    const img = new Image();
    img.src = templateImg[0];
    img.onload = () => {
      context?.drawImage(img, 0, 0, width, height);
    };
  }, [templateImg[0], width, height]);

  useEffect(() => {
    setResultTemplate(canvasRef.current?.toDataURL());
  }, [isApply]);
  const drawing = (event: React.MouseEvent<HTMLCanvasElement, MouseEvent>) => {
    const { offsetX, offsetY } = event.nativeEvent;
    if (!isDrawing) {
      context?.beginPath();
      context?.moveTo(offsetX, offsetY);
    } else {
      context?.lineTo(offsetX, offsetY);
      context?.stroke();
    }
  };

  return (
    <canvas
      ref={canvasRef}
      width={width}
      height={height}
      onMouseMove={drawing}
      onMouseDown={() => SetIsDrawing(true)}
      onMouseUp={() => SetIsDrawing(false)}
      onMouseLeave={() => SetIsDrawing(false)}
    />
  );
};

export default Template;
