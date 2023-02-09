interface BgImgType extends React.ComponentProps<"img"> {
  src?: string;
  absolute?: boolean;
  z?: boolean;
}
/**
 * alt img 설정 및 img component의 스타일 적용을 위한 component
 * @param src string | undefined // img의 src를 설정 가능
 * @param absolute boolean | undefined // img의 position(absolute) 설정 가능
 * @param z boolean | undefiend // z-index 설정 가능 (-1)
 * @param rest React.ComponenetProps<"img"> // img tag props 사용 가능
 * @returns img component (style 적용)
 */
const BgImg = ({ src, absolute, z, className, ...rest }: BgImgType) => {
  return (
    <img
      src={src}
      alt={`${process.env.PUBLIC_URL}/public/noImg.png`}
      className={`${src!.length < 10 && `hidden`} ${absolute && "absolute"} ${
        z && "z-[-1]"
      } overflow-hidden w-[inherit] h-[inherit] rounded-md ${className}`}
      {...rest}
    />
  );
};
export default BgImg;
