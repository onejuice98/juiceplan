import ItemList from "./ItemList";

interface IEditor {
  day: string | undefined;
}
/**
 * Editor 의 컴포넌트 모음이다.
 * @param day string(yyyy-MM-dd)
 * @returns Editor, 결과적으로 Day의 키를 가진 상태인 diaryContent을 최신화 시킨다.
 */
const Editor = ({ day }: IEditor) => {
  return (
    <div className="gap-1 flex flex-col m-0 p-2">
      <ItemList day={day} />
    </div>
  );
};

export default Editor;
