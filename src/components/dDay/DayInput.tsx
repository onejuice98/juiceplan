import React, { useState } from "react";
import { useRecoilState, useSetRecoilState } from "recoil";
import {
  dDayListState,
  dDayUserInputState,
  isErrorState,
  UserInput,
} from "../../recoil/dDay";
import Horizon from "../common/Horizon";
import Toast from "./Toast";

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
      list.length === 5
    ) {
      return setIsError(true);
    } else {
      setList([...list, userInputs]);
    }
    event.currentTarget.reset();
  };
  /*
  const deleteItem = (event: React.FormEvent<HTMLInputElement>) => {
    const key = event.currentTarget.value;
    list.splice(parseInt(key), 1);
    setList([...list]);
  };*/

  return (
    <>
      <div className="mt-4">
        <form
          name="isSubmit"
          onSubmit={handleSubmit}
          className="flex justify-between px-4"
        >
          <input
            name="dDayName"
            type="text"
            placeholder="D-day 이름"
            onChange={handleChange}
            className="w-[40%] rounded-md shadow-md focus:ring-blue-200 hover:animate-pulse"
          />
          <input
            name="date"
            type="date"
            onChange={handleChange}
            className="w-[40%] rounded-md shadow-md focus:ring-blue-200 hover:animate-pulse"
          />
          <button
            type="submit"
            className="w-[10%] bg-sky-500 text-white rounded-md font-mono text-sm shadow-md hover:bg-sky-700"
          >
            +
          </button>
        </form>
        <Horizon />
      </div>
    </>
  );
};
export default DayInput;
