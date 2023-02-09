interface DateInputType extends React.ComponentProps<"input"> {
  w?: number;
  textSize?: "xs";
}
/**
 * D-Day List page -> DDayInput Componenet 에 들어갈 Input 으로 스타일적용을 위한 Component 이다.
 * @param w number | undefined // input의 width 결정
 * @param textSize "xs" | undefiend // placeholder, value에 들어갈 글자 크기
 * @param rest React.ComponentProps<"input"> // input tag props 사용 가능
 * @returns Date 입력을 위한 input Componenet
 */
const DateInput = ({ w, textSize, className, ...rest }: DateInputType) => {
  return (
    <input
      className={`w-${w} text-${textSize} rounded-md shadow-md hover:animate-pulse ${className}`}
      {...rest}
    />
  );
};

export default DateInput;
