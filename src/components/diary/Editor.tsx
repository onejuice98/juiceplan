import Divider from "../common/Divider";
import EditorHead from "./EditorHead";
import ItemList from "./ItemList";
import Title from "./Title";

interface IEditor {
  day: string;
}
/**
 * Editor 의 컴포넌트 모음이다.
 * @param day string(yyyy-MM-dd)
 * @returns Editor, 결과적으로 Day의 키를 가진 상태인 diaryContent을 최신화 시킨다.
 */
const Editor = ({ day }: IEditor) => {
  return (
    <div className="p-4 gap-1 flex flex-col">
      <EditorHead day={day} />
      <Title />
      <Divider />
      <ItemList />
    </div>
  );
};

export default Editor;
