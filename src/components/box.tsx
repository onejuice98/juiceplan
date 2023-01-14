import React from "react";

function Box(props: { children: React.ReactNode }) {
  return (
    <div
      className="flex justify-center items-center text-2xl text-white w-20 h-10 bg-green-200 shadow-md rounded-md font-semibold cursor-pointer hover:bg-green-400 duration-500"
      onClick={() => window.open("https://velog.io/@onejuice98", "_blank")}
    >
      {props.children}
    </div>
  );
}

export default Box;
