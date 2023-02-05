import { useEffect } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import {
  diaryContent,
  diaryContentType,
  diaryItemList,
  diaryItemType,
  isDisabled,
  resultTemplate,
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
  const titleName = useRecoilValue<string>(titleText);
  const items = useRecoilValue<diaryItemType[]>(diaryItemList);
  const template = useRecoilValue<string | undefined>(resultTemplate);
  const [diary, setDiary] = useRecoilState<diaryContentType[]>(diaryContent);

  const onDisabled = () => {
    setDisabled((prev) => !prev);
  };
  const onSave = () => {
    if (disabled) {
      const findIndex = diary.findIndex((element) => element.day === day);
      if (findIndex === -1) {
        setDiary([
          ...diary,
          { day: day, title: titleName, content: items, template: template },
        ]);
      } else {
        let copyDiary = [...diary];
        copyDiary[findIndex] = {
          day: day,
          title: titleName,
          content: items,
          template: template,
        };
        setDiary(copyDiary);
      }
      console.log(diary);
    }
  };
  return (
    <div className="flex justify-between items-center">
      <JuiceFont>{day}</JuiceFont>
      <div className="flex gap-2">
        <button
          onClick={onDisabled}
          className="font-mono bg-emerald-400 p-1 rounded-md shadow-md text-white hover:bg-emerald-600 duration-300"
        >
          {disabled ? "활성화" : "비활성화"}
        </button>
        <button
          onClick={onSave}
          className="font-mono bg-emerald-400 p-1 rounded-md shadow-md text-white hover:bg-emerald-600 duration-300"
        >
          저장하기
        </button>
      </div>
    </div>
  );
};

export default EditorHead;
