import { useNavigate } from "react-router-dom";

interface BackspaceType {
  isHome?: boolean;
}
/**
 * 뒤로가기 버튼 구성 (뒤로도 가고 Main page로 가는)
 * @param isHome boolean | undefined // home 으로 가는지에 대한 설정
 * @returns 👈 이모지를 가진 박스 component 생성
 */
const BackSpace = ({ isHome }: BackspaceType) => {
  const history = useNavigate();
  return (
    <button
      className="w-10 h-10 border-[1px] border-gray-400 rounded-md shadow-md hover:bg-gray-200 hover:rounded-md duration-500 text-lg"
      onClick={() => (isHome ? history("/juiceplan") : history(-1))}
    >
      👈
    </button>
  );
};

export default BackSpace;
