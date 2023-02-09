interface ButtonType extends React.ComponentProps<"button"> {
  white?: boolean;
  bgColor: "red" | "green" | "sky" | "emerald";
  weight?: "medium";
  hover?: boolean;
}
type buttonBgColorType = {
  [key: string]: string;
};
const buttonBgColor: buttonBgColorType = {
  red: "bg-red-500",
  green: "bg-green-500",
  sky: "bg-sky-500",
  emerald: "bg-emerald-500",
};
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
  white,
  bgColor,
  weight,
  hover,
  className,
  ...rest
}: ButtonType) => {
  return (
    <button
      className={`${buttonBgColor[bgColor]} ${
        white && "text-white"
      } font-[${weight}] ${
        hover && `hover:${buttonBgColor[bgColor]}`
      } font-mono rounded-md shadow-md ${className}`}
      {...rest}
    ></button>
  );
};

export default Button;
