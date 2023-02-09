import React from "react";
import Text from "../common/Text";

interface ITooltip {
  children: React.ReactNode;
  message: string;
}
/**
 * DDayBox 의 주말, 평일을 표기하기 위한 Tooltip
 * @param children React.ReactNode // Tooltip 의 자식 Component
 * @param message string // Tooltip에 표기될 message
 * @returns Tooltip의 Componenet 특정 Componenet의 부모가 되어 {message param} 을 출력
 */
const Tooltip = ({ children, message }: ITooltip) => {
  return (
    <div className="relative group w-fit h-fit">
      {children}
      <div className="w-fit absolute z-2 transition duration-500 bg-black rounded-md p-1 top-[110%] -left-2 opacity-0 group-hover:opacity-100">
        <Text mono size="xs" className="text-white whitespace-nowrap">
          {message}
        </Text>
      </div>
    </div>
  );
};

export default Tooltip;
