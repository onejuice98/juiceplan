import { useNavigate } from "react-router-dom";

interface IBackspace {
  isHome?: boolean;
}
const BackSpace = ({ isHome }: IBackspace) => {
  const history = useNavigate();

  return (
    <button
      className="w-10 h-10 border-[1px] border-gray-400 rounded-md shadow-md hover:bg-gray-200 hover:rounded-md duration-500 text-lg"
      onClick={() => (isHome ? history("/") : history(-1))}
    >
      👈
    </button>
  );
};

export default BackSpace;
