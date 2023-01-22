import React from "react";
import JuiceFont from "../common/JuiceFont";

interface ITooltip {
  children: React.ReactNode;
  message: string;
}
const Tooltip = ({ children, message }: ITooltip) => {
  return (
    <div className="group relative w-fit h-fit">
      {children}
      <div className="font-mono transition duration-500 text-xs bg-black rounded-md p-1 text-white -top-1 left-[110%] w-fit whitespace-nowrap opacity-0 group-hover:opacity-100 absolute z-100 ">
        {message}
      </div>
    </div>
  );
};

export default Tooltip;
