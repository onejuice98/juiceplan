import { RefObject, useEffect, useState } from "react";

export const useClientWidthHeight = (ref: RefObject<HTMLDivElement>) => {
  const [canvasProps, setCanvasProps] = useState({
    width: 0,
    height: 0,
  });
  useEffect(() => {
    const setClientWidthHeight = () => {
      ref.current &&
        setCanvasProps({
          width: ref.current.clientWidth,
          height: ref.current.clientHeight,
        });
    };
    setClientWidthHeight();
  }, []);

  return canvasProps;
};
