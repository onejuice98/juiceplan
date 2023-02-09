interface TextType extends React.ComponentProps<"span"> {
  children: React.ReactNode;
  bold?: boolean;
  gray?: boolean;
  size?: "xs" | "sm" | "base" | "lg" | "xl" | "xl2";
  pointer?: boolean;
  mono?: boolean;
}
type textSizeType = {
  [key: string]: string;
};
const textSize: textSizeType = {
  xs: "text-xs",
  sm: "text-sm",
  base: "text-base",
  lg: "text-lg",
  xl: "text-xl",
  xl2: "text-2xl",
};
/**
 * 일반적인 Text, extends <span> tag
 * @param children React.ReactNode
 * @param bold boolean // 볼드체 설정
 * @param gray boolean // text color : gray 설정
 * @param size "sm" | "base" | "lg" | "xl" // text size 설정
 * @param pointer boolean // 커서 포인터 설정
 * @param mono boolean // 폰트 "mono" 설정
 * @param rest React.ComponentProps<"span"> // span tag props 사용 가능
 * @returns Text tag Span
 */
const Text = ({
  children,
  bold,
  gray,
  size = "base",
  pointer,
  mono,
  className,
  ...rest
}: TextType) => {
  return (
    <span
      className={`${bold && `font-bold`} ${gray && `text-gray-500`} ${
        textSize[size ?? "base"]
      } ${pointer && `cursor-pointer`} ${mono && `font-mono`} ${className}`}
      {...rest}
    >
      {children}
    </span>
  );
};

export default Text;
