/**
 * @params marginX, marginY (default : 0)
 * @params border color (default : gray-300)
 *
 * @returns hr tag
 */

interface IHorizon {
  margin?: "0" | "1" | "2" | "3" | "4" | "5" | "6";
  borderColor?: string;
}
const Horizon = ({ margin = "4", borderColor = "gray" }: IHorizon) => {
  return (
    <hr
      className={`m-${margin} border-${borderColor}-300 dark:border-${borderColor}-700`}
    />
  );
};

export default Horizon;
