import React from "react";
import { useRecoilState, useSetRecoilState } from "recoil";
import {
  dDayListState,
  dDayUserInputState,
  isErrorState,
  UserInput,
} from "../../recoil/dDay";
import Button from "../common/Button";

const DayInput = () => {
  const setIsError = useSetRecoilState<boolean>(isErrorState);
  const [userInputs, setUserInputs] =
    useRecoilState<UserInput>(dDayUserInputState);
  const [list, setList] = useRecoilState<UserInput[]>(dDayListState);

  const handleChange = (event: React.FormEvent<HTMLInputElement>) => {
    setUserInputs({
      ...userInputs,
      [event.currentTarget.name]: event.currentTarget.value,
    });
  };
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (
      userInputs.dDayName === "" ||
      userInputs.date === "" ||
      list.length === 5 ||
      list.map((item) => item.dDayName === userInputs.dDayName).includes(true)
    ) {
      return setIsError(true);
    } else {
      setList([...list, userInputs]);
    }
    event.currentTarget.reset();
  };
  return (
    <>
      <div className="">
        <form
          name="isSubmit"
          onSubmit={handleSubmit}
          className="flex justify-between"
        >
          <input
            name="dDayName"
            type="text"
            placeholder="D-day 이름"
            onChange={handleChange}
            required
            className="w-[40%] rounded-md shadow-md focus:ring-blue-200 hover:animate-pulse text-xs"
          />
          <input
            name="date"
            type="date"
            onChange={handleChange}
            data-placeholder="날짜 선택"
            required
            className="w-[40%] rounded-md shadow-md focus:ring-blue-200 hover:animate-pulse text-xs before:content-[attr(data-placeholder)] before:w-full focus:before:hidden valid:before:hidden"
          />
          <Button white hover w={12} bgColor="sky">
            +
          </Button>
        </form>
      </div>
    </>
  );
};
export default DayInput;
