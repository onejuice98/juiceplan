import { useRecoilValue } from "recoil";
import { bgImage } from "../../recoil/diary";
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
  const bgImages = useRecoilValue<string>(bgImage);
  return (
    <div className="gap-1 flex flex-col m-0 p-1">
      <img
        src={bgImages}
        className={` ${
          bgImages === "" && "hidden"
        } p-0 m-0  absolute z-[-1] overflow-hidden flex items-center justify-center w-[421px] h-[621px]`}
      />
      <EditorHead day={day} />
      <Title />
      <Divider />
      <ItemList />
    </div>
  );
};

export default Editor;
