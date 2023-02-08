import { SvgType } from "../../components/profile/VelogSvg";

/**
 * X Svg Component
 * @param w number, pixel
 * @param h number, pixel
 * @param rest React.ComponentProps<svg>, Use svg tag props
 * @returns X Svg Component
 */
const XSvg = ({ w, h, ...rest }: SvgType) => {
  return (
    <svg
      width={w}
      height={h}
      fill="currentColor"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path
        fillRule="evenodd"
        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
};

export default XSvg;
