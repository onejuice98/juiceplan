import {
  MouseEventHandler,
  RefObject,
  useEffect,
  useRef,
  useState,
} from "react";
import { useRecoilState } from "recoil";
import { bgImage } from "../../../recoil/diary";

interface ITemplate {
  width: number;
  height: number;
}
const Template = ({ width, height }: ITemplate) => {
  const canvasRef: RefObject<HTMLCanvasElement> =
    useRef<HTMLCanvasElement>(null);
  const [context, setContext] = useState<CanvasRenderingContext2D>();
  const templateImg = useRecoilState<string>(bgImage);
  const [isDrawing, SetIsDrawing] = useState<boolean>(false);
  const [imgg, setImgg] = useState<string>("");
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (ctx) {
      ctx.strokeStyle = "black";
      ctx.lineWidth = 2.5;
      setContext(ctx);
    }

    const img = new Image();
    img.onload = () => {
      context?.drawImage(img, 0, 0, width, height);
    };
    img.src = templateImg[0];
  }, [templateImg]);

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
