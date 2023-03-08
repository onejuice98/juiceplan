import React from "react";
import { useRecoilState, useSetRecoilState } from "recoil";
import { dDayListState, isErrorState, UserInput } from "../../recoil/dDay";
import Button from "../common/Button";
import DateInput from "./DateInput";

const validation = (list: UserInput[], name: string) => {
  return (
    list.length === 5 || list.map((item) => item.dday === name).includes(true)
  );
};
/**
 * D-Day List Page의 상단부 D-Day 입력을 위한 Component 이다. 이름 및 날짜를 추가할 수 있다.
 * @returns D-Day Input Component 2개의 input tag(이름, 날짜) submit을 위한 버튼
 */
const DayInput = () => {
  const setIsError = useSetRecoilState<boolean>(isErrorState);
  const [list, setList] = useRecoilState<UserInput[]>(dDayListState);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const { dday, date } = event.currentTarget;

    if (validation(list, dday.value)) return setIsError(true);
    else setList([...list, { dday: dday.value, date: date.value }]);

    event.currentTarget.reset();
  };
  return (
    <div>
      <form
        name="isSubmit"
        onSubmit={handleSubmit}
        className="grid grid-cols-[repeat(2,minmax(0,1fr))_24px] gap-1"
      >
        <DateInput
          name="dday"
          type="text"
          placeholder="D-DAY 이름"
          required
          textSize="xs"
        />
        <DateInput
          name="date"
          type="date"
          data-placeholder="날짜 선택"
          required
          textSize="xs"
          className="before:content-[attr(data-placeholder)] before:w-full valid:before:hidden"
        />
        <Button white hover bgColor="sky">
          +
        </Button>
      </form>
    </div>
  );
};
export default DayInput;
