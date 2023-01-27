import { FormEvent, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

const DayDiary = () => {
  const { dayId } = useParams();
  const history = useNavigate();
  const [text, setText] = useState("");
  const [list, setList] = useState<string[]>([]);
  const handleChange = (event: FormEvent<HTMLInputElement>) => {
    setText(event.currentTarget.value);
  };
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setList([...list, text]);
    event.currentTarget.reset();
  };
  return (
    <div>
      <div onClick={() => history(-1)}>back Arrow</div>
      Its {dayId}Day Diary
      <div>
        <form onSubmit={handleSubmit}>
          <input onChange={handleChange} />
          <button type="submit"> + </button>
        </form>
      </div>
      {list.map((value, idx) => (
        <div key={idx}> {value} </div>
      ))}
    </div>
  );
};

export default DayDiary;
