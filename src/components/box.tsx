import React from "react";

function Box(props: { children: React.ReactNode; href: string }) {
  return (
    <div
      className="flex justify-center items-center text-base text-white w-14 h-7 bg-green-200 shadow-md rounded-sm font-semibold cursor-pointer hover:bg-green-400 duration-500"
      onClick={() => window.open(`${props.href}`, "_blank")}
    >
      {props.children}
    </div>
  );
}

export default Box;
