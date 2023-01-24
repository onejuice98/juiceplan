import React from "react";

interface ITooltip {
  children: React.ReactNode;
  message: string;
}
const Tooltip = ({ children, message }: ITooltip) => {
  return (
    <div className="relative group w-fit h-fit">
      {children}
      <div className="pointer-events-none font-mono transition duration-500 text-xs bg-black rounded-md p-1 text-white top-[110%] -left-2 w-fit whitespace-nowrap opacity-0 group-hover:opacity-100 absolute z-100">
        {message}
      </div>
    </div>
  );
};

export default Tooltip;
