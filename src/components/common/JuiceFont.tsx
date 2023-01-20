/**
 *
 * @params isBold (default : font-medium)
 * @params isSmall (default : text-base)
 * @params others (enter tailwindCSS)
 */

interface IJuiceFont {
  isBold?: boolean;
  isSmall?: boolean;
  others?: string;
  children: React.ReactNode;
}
const JuiceFont = ({
  isBold = false,
  isSmall = false,
  others = "none",
  children,
}: IJuiceFont) => {
  return (
    <>
      <div
        className={`font-mono ${isBold && `font-bold`} ${
          isSmall && `text-sm`
        } ${others}`}
      >
        {children}
      </div>
    </>
  );
};

export default JuiceFont;
