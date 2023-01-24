import React from "react";

interface ITooltip {
  children: React.ReactNode;
  message: string;
  hover: boolean;
}
const Tooltip = ({ children, message, hover }: ITooltip) => {
  return (
    <div className="relative w-fit h-fit">
      {children}
      <div
        className={`pointer-events-none font-mono transition duration-500 text-xs bg-black rounded-md p-1 text-white -top-1 left-[110%] w-fit whitespace-nowrap opacity-${
          hover ? `100` : `0`
        } absolute z-100`}
      >
        {message}
      </div>
    </div>
  );
};

export default Tooltip;
