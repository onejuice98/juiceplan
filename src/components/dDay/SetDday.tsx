import { useState } from "react";
import { useRecoilValue } from "recoil";
import { dDayListState, isSubmitState, UserInput } from "../../recoil/dDay";
import DayInput from "./DayInput";

const SetDday = () => {
  const [open, setOpen] = useState(false);
  const dDayList = useRecoilValue<UserInput[]>(dDayListState);
  const isSubmit = useRecoilValue<boolean>(isSubmitState);

  const handleModal = () => setOpen((prev) => !prev);
  return (
    <div>
      <button
        data-collapse-toggle="navbar-sticky"
        type="button"
        className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        aria-controls="navbar-sticky"
        aria-expanded="false"
        onClick={handleModal}
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
      {open && (
        <div className="z-10 absolute top-0 left-0 w-[100vw] h-[100vh] bg-black/[0.75] flex justify-center items-center">
          <div className="relative w-[80%] h-[80%] z-10 bg-white opacity-1 rounded-lg flex flex-col justify-between">
            <DayInput />
            <div className="flex flex-col h-full m-2 justify-start gap-2">
              {isSubmit &&
                dDayList.map((value, idx) => (
                  <div
                    key={idx + 1}
                    className="w-full h-12 bg-orange-200 rounded-md p-1 shadow-md"
                  >
                    {value.dDayName} {value.date}
                  </div>
                ))}
            </div>
            <div className="flex justify-end items-end bg-gray-100 rounded-lg">
              <button
                className="w-20 h-10 bg-red-500 text-white rounded-md shadow-lg m-4 font-mono font-medium hover:bg-red-700"
                onClick={handleModal}
              >
                나가기
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SetDday;
