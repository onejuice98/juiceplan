import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilState, useSetRecoilState } from "recoil";
import { bgImage, isCanvas } from "../../recoil/diary";
import JuiceFont from "../common/JuiceFont";

interface ISideBar {
  day: string | undefined; // (yyyy-MM-dd)
}
const SideBar = ({ day }: ISideBar) => {
  const history = useNavigate();
  const [canvasMode, setCanvasMode] = useRecoilState<boolean>(isCanvas);
  const [bgImages, setBgImages] = useRecoilState<string>(bgImage);
  const imgRef: any = useRef();
  const readURL = () => {
    const file = imgRef.current.files[0];
    const reader: any = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setBgImages(reader.result);
    };
  };
  return (
    <div className="flex flex-col w-60 h-full bg-emerald-300 p-2 gap-4">
      <div className="w-full h-fit flex items-center justify-between">
        <button
          className="w-10 h-10 border-[1px] border-gray-400 rounded-md shadow-md hover:bg-gray-200 hover:rounded-md duration-500 text-lg"
          onClick={() => history(-1)}
        >
          👈
        </button>
        <JuiceFont isBold>{day}</JuiceFont>
      </div>

      <button className="bg-cyan-500 p-2 rounded-md shadow-md text-white hover:bg-cyan-700 duration-300">
        배경 그리기
      </button>

      <input
        type="file"
        accept="image/png, image/jpeg"
        onChange={readURL}
        ref={imgRef}
      />
      <img src={bgImages} />

      <div></div>
    </div>
  );
};

export default SideBar;
