interface ButtonType extends React.ComponentProps<"button"> {
  w?: number | "full";
  h?: number;
  white?: boolean;
  bgColor?: "red" | "green" | "sky" | "emerald" | "green";
  weight?: "medium";
  hover?: boolean;
}

/**
 * rounded & shadow medium default + hover -> 배경색이 짙어지는 효과 를 가진 통상적인 button
 * @param w number | full | undefined // pixel or full
 * @param h number | undefined // pixel
 * @param white // boolean | undefined // text color 설정 (white)
 * @param bgColor // "red" | "green" | "sky" | "emerald" | "green" | undefined // 배경 색 설정
 * @param weight // "medium" // font-weight 설정
 * @param hover // boolean // hover 설정 배경색 짙어짐
 * @param rest // extends React.ComponentProps<"button>" 으로 button tag props 사용 가능
 * @returns Button Componenet rounded & shadow default
 */
const Button = ({
  w,
  h,
  white,
  bgColor,
  weight,
  hover,
  className,
  ...rest
}: ButtonType) => {
  return (
    <button
      className={`w-${w} h-${h} bg-${bgColor}-500 ${
        white && "text-white"
      } font-[${weight}] ${
        hover && `hover:bg-${bgColor}-700`
      } font-mono rounded-md shadow-md ${className}`}
      {...rest}
    ></button>
  );
};

export default Button;
