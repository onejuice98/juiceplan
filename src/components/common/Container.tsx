import React from "react";

interface ContainerType extends React.ComponentProps<"div"> {
  children: React.ReactNode;
  direction?: "row" | "col";
  justifyContent?: "center" | "between" | "end";
  alignItems?: "center" | "end";
}
/**
 * 기본적인 Flex Container
 * @param children React.ReactNode
 * @param direction "row" | "col" | undefined // 방향 지정
 * @param justifyContent "center" | "between" | undefined // main Axis 조정
 * @param alignItems "center" | undefined // cross Axis 조정
 * @param rest React.ComponentProps<"div"> // div의 extends 되어 div tag props 사용 가능
 * @returns 각종 Flex Container 설정 가능
 */
const Container = ({
  children,
  direction = "row",
  justifyContent,
  alignItems,
  className,
  ...rest
}: ContainerType) => {
  return (
    <div
      className={`flex flex-${direction} justify-${justifyContent} items-${alignItems} ${className}`}
      {...rest}
    >
      {children}
    </div>
  );
};
export default Container;
