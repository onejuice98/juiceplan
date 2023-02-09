import { SvgType } from "../profile/VelogSvg";

/**
 * Setting Svg Component
 * @param w number, pixel
 * @param h number, pixel
 * @param rest React.ComponentProps<svg>, Use svg tag props
 * @returns Setting Svg Component
 */
const SetSvg = ({ w, h, ...rest }: SvgType) => {
  return (
    <svg
      width={w}
      height={h}
      aria-hidden="true"
      fill="currentColor"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path
        fillRule="evenodd"
        d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
};
export default SetSvg;
