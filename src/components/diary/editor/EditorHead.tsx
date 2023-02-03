import { useEffect } from "react";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import {
  diaryContent,
  diaryContentType,
  diaryItemList,
  diaryItemType,
  isDisabled,
  titleText,
} from "../../../recoil/diary";
import JuiceFont from "../../common/JuiceFont";

interface IEditorHead {
  day: string | undefined;
}
/**
 * Editor 의 최상단부 Save / Edit 기능
 * @param day : string(yyyy-MM-dd)
 * @returns Mode Save & Edit 통해 Edit 하고 diaryContent State push
 */
const EditorHead = ({ day }: IEditorHead) => {
  const [disabled, setDisabled] = useRecoilState<boolean>(isDisabled);
  const title = useRecoilValue<string>(titleText);
  const items = useRecoilValue<diaryItemType[]>(diaryItemList);
  const [diary, setDiary] = useRecoilState<diaryContentType[]>(diaryContent);
  // 여기 뭔가 이상함ㅋㅋ 왜지?
  useEffect(() => {
    !disabled &&
      setDiary([...diary, { day: day, title: title, content: items }]);
    console.log(diary);
  }, [disabled]);
  return (
    <div className="flex justify-between items-center">
      <JuiceFont>{day}</JuiceFont>
      <button
        onClick={() => setDisabled((prev) => !prev)}
        className="font-mono bg-emerald-400 p-1 rounded-md shadow-md text-white hover:bg-emerald-600 duration-300"
      >
        {disabled ? "Edit" : "Save"}
      </button>
    </div>
  );
};

export default EditorHead;
