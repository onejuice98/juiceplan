import { FormEvent, useState } from "react";
import { useRecoilState } from "recoil";
import { diaryText } from "../../recoil/diary";

const DiaryInput = () => {
  const [text, setText] = useState("");
  const [textList, setTextList] = useRecoilState<string[]>(diaryText);
  const handleChange = (event: FormEvent<HTMLInputElement>) => {
    setText(event.currentTarget.value);
  };
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setTextList([...textList, text]);
    event.currentTarget.reset();
  };
  return (
    <div>
      <form onSubmit={handleSubmit} className="flex justify-between">
        <input
          onChange={handleChange}
          className="w-[80%] rounded-md shadow-md"
        />
        <button
          type="submit"
          className="border-[1px] bg-white w-10 h-10 justify-center items-center rounded-md shadow-md"
        >
          +
        </button>
      </form>
    </div>
  );
};

export default DiaryInput;
