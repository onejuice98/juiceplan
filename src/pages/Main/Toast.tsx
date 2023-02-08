import { useSetRecoilState } from "recoil";
import { isErrorState } from "../../recoil/dDay";
import XSvg from "./XSvg";

/**
 * Main Page Modal D-day List 페이지에서 오류 발생시 표기 (absolute)
 * @returns Modal Error alert, D-day 5개 이상, title 중복 일시 표기
 */
const Toast = () => {
  const setIsError = useSetRecoilState<boolean>(isErrorState);
  return (
    <div className="absolute z-[999] top-2 right-2 flex items-center max-w-xs p-4 mb-4 text-gray-500 bg-white rounded-lg shadow dark:text-gray-400 dark:bg-gray-800">
      <div className="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-red-500 bg-red-100 rounded-lg dark:bg-red-800 dark:text-red-200">
        <XSvg w={20} h={20} />
      </div>
      <div className="ml-3 text-sm font-normal">
        최대 5개! 중복 및 빈칸 금지!
      </div>
      <button
        className="ml-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700"
        onClick={() => setIsError((prev) => !prev)}
      >
        <span className="sr-only">Close</span>
        <XSvg w={20} h={20} />
      </button>
    </div>
  );
};

export default Toast;
