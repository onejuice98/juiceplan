import React from "react";
import { useRecoilState, useSetRecoilState } from "recoil";
import {
  dDayListState,
  dDayUserInputState,
  isErrorState,
  UserInput,
} from "../../recoil/dDay";
import Button from "../common/Button";
import DateInput from "./DateInput";

/**
 * D-Day List Page의 상단부 D-Day 입력을 위한 Component 이다. 이름 및 날짜를 추가할 수 있다.
 * @returns D-Day Input Component 2개의 input tag(이름, 날짜) submit을 위한 버튼
 */
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
    <div>
      <form
        name="isSubmit"
        onSubmit={handleSubmit}
        className="flex justify-between gap-1"
      >
        <DateInput
          name="dDayName"
          type="text"
          placeholder="D-DAY 이름"
          onChange={handleChange}
          required
          w={36}
          textSize="xs"
        />
        <DateInput
          name="date"
          type="date"
          onChange={handleChange}
          data-placeholder="날짜 선택"
          required
          w={36}
          textSize="xs"
          className="before:content-[attr(data-placeholder)] before:w-full valid:before:hidden"
        />
        <Button white hover bgColor="sky" className="w-36">
          +
        </Button>
      </form>
    </div>
  );
};
export default DayInput;
