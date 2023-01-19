import React, { useState } from "react";
import { useRecoilState } from "recoil";
import { dDayListState, dDayUserInputState } from "../../reocil/dDay";

type UserInput = { dDayName: string; date: string };
const SetDday = () => {
  const [isSubmit, setIsSubmit] = useState(false);
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
    if (userInputs.dDayName === "" || userInputs.date === "") {
      return;
    } else {
      setIsSubmit(true);
      setList([...list, userInputs]);
    }
    event.currentTarget.reset();
  };
  const deleteItem = (event: React.FormEvent<HTMLInputElement>) => {
    const key = event.currentTarget.value;
    list.splice(parseInt(key), 1);
    setList([...list]);
  };
  return (
    <div>
      <form name="isSubmit" onSubmit={handleSubmit}>
        <input
          name="dDayName"
          type="text"
          placeholder="D-day?"
          onChange={handleChange}
        />
        <input name="date" type="date" onChange={handleChange} />
        <button type="submit"> add </button>
      </form>
    </div>
  );
};
export default SetDday;
