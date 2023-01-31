/**
 *
 * @params isBold (default : font-medium)
 * @params isSmall (default : text-base)
 * @params others (enter tailwindCSS)
 */

interface IJuiceFont {
  isBold?: boolean;
  isSmall?: boolean;
  isBig?: boolean;
  others?: string;
  isTooltip?: boolean;
  children: React.ReactNode;
}
const JuiceFont = ({
  isBold = false,
  isSmall = false,
  others = "none",
  children,
  isBig = false,
}: IJuiceFont) => {
  return (
    <>
      <div
        className={`font-mono ${isBold && `font-bold`} ${
          isSmall && `text-sm`
        } ${isBig && `text-lg`} ${others} `}
      >
        {children}
      </div>
    </>
  );
};

export default JuiceFont;
