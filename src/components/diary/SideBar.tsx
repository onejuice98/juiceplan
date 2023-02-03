import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilState, useSetRecoilState } from "recoil";
import { bgImage, isCanvas } from "../../recoil/diary";
import JuiceFont from "../common/JuiceFont";

interface ISideBar {
  day: string | undefined; // (yyyy-MM-dd)
}
const SideBar = () => {
  const history = useNavigate();
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
    <div className="flex w-full h-14 p-2 gap-1 ">
      <div className="h-fit flex items-center justify-between">
        <button
          className="w-10 h-10 border-[1px] border-gray-400 rounded-md shadow-md hover:bg-gray-200 hover:rounded-md duration-500 text-lg"
          onClick={() => history(-1)}
        >
          👈
        </button>
      </div>
      <input
        type="file"
        accept="image/png, image/jpeg"
        onChange={readURL}
        ref={imgRef}
      />
    </div>
  );
};

export default SideBar;
