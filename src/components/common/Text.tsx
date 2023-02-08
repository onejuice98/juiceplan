interface TextType extends React.ComponentProps<"span"> {
  children: React.ReactNode;
  bold?: boolean;
  gray?: boolean;
  size?: "xs" | "sm" | "base" | "lg" | "xl" | "2xl";
  pointer?: boolean;
  mono?: boolean;
}
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
  size,
  pointer,
  mono,
  className,
  ...rest
}: TextType) => {
  return (
    <span
      className={`${bold && `font-bold`} ${
        gray && `text-gray-500`
      } text-${size} ${pointer && `cursor-pointer`} ${
        mono && `font-mono`
      } ${className}`}
      {...rest}
    >
      {children}
    </span>
  );
};

export default Text;
