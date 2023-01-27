interface IHead {
  year: string;
  month: string;
  goToday: () => void;
  setMonth: () => void;
}
const Head = ({ year, month, goToday, setMonth }: IHead) => {
  return (
    <div>
      <div>
        <div>
          {year} 년 {month} 월
        </div>
        <div>
          <button> &lt; </button>
          <button> 오늘</button>
          <button> &gt;</button>
        </div>
      </div>
      <div>Days</div>
    </div>
  );
};

export default Head;
