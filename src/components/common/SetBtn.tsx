import { DragControls } from "framer-motion";

interface ISetBtn {
  onClick?: () => void;
  isHover?: boolean;
  dragControls?: DragControls;
}
const SetBtn = ({ onClick, isHover, dragControls }: ISetBtn) => {
  return (
    <button
      data-collapse-toggle="navbar-sticky"
      type="button"
      className={`inline-flex items-center p-2 text-sm text-gray-500 rounded-lg focus:outline-none dark:text-gray-400 ${
        isHover && `dark:hover:bg-gray-700 hover:bg-gray-100`
      }`}
      aria-controls="navbar-sticky"
      aria-expanded="false"
      onClick={onClick}
      onPointerDown={(event) => dragControls?.start(event)}
    >
      <svg
        className="w-4 h-4"
        aria-hidden="true"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
          clip-rule="evenodd"
        ></path>
      </svg>
    </button>
  );
};

export default SetBtn;
