import { Reorder } from "framer-motion";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useRecoilState, useRecoilValue } from "recoil";
import {
  diaryContent,
  diaryContentType,
  diaryItemList,
  diaryItemType,
  isDisabled,
  itemStyle,
  itemStyleType,
  itemTextBgColor,
  itemTextBgColorType,
  itemTextColor,
  itemTextColorType,
  itemTextSize,
  itemTextSizeType,
  resultTemplate,
} from "../../../recoil/diary";
import Button from "../../common/Button";
import Container from "../../common/Container";
import Divider from "../../common/Divider";
import SetBtn from "../../common/SetBtn";
import Text from "../../common/Text";

interface IEditor {
  day: string | undefined; // yyyy-MM-dd
}
/**
 * Editor의 핵심!, context의 List를 더하거나 CSS를 수정한다. 내용을 추가 할 수 있다.
 * @returns Item List 가 출력 (Item -> 내용) / Save button(twice) -> 메인 페이지로
 */
const ItemList = ({ day }: IEditor) => {
  const { register, setValue, handleSubmit, getValues } = useForm();
  const [disabled] = useRecoilState<boolean>(isDisabled);
  const [items, setItems] = useRecoilState<diaryItemType[]>(diaryItemList);
  // recoil default 가 0 가 있어서 1부터다!
  const [itemId, setItemId] = useState<number>(1);
  const [style, setStyle] = useRecoilState<itemStyleType[]>(itemStyle);
  const [size, setSize] = useRecoilState<itemTextSizeType>(itemTextSize);
  const [color, setColor] = useRecoilState<itemTextColorType>(itemTextColor);
  const [bgColor, setBgColor] =
    useRecoilState<itemTextBgColorType>(itemTextBgColor);
  const template = useRecoilValue<string | undefined>(resultTemplate);
  const [diary, setDiary] = useRecoilState<diaryContentType[]>(diaryContent);
  const [submitNums, setSubmitNums] = useState(0);
  const navigate = useNavigate();
  const onPlusClick = () => {
    setItemId((prev) => prev + 1);
    setStyle([...style, { textSize: "text-base", textColor: "", textBg: "" }]);
    setItems([
      ...items,
      {
        id: "context" + itemId,
        context: "",
        style: { textSize: "text-base", textColor: "", textBg: "" },
      },
    ]);
  };
  const onSettingClick = (index: number) => {
    let tempStyle: itemStyleType[] = [...style];
    tempStyle[index] = { textSize: size, textColor: color, textBg: bgColor };
    setStyle(tempStyle);
    setSize("text-base");
    setColor("");
    setBgColor("");
  };

  const onValid = () => {
    let tempItemList: diaryItemType[] = [];
    for (let i = 0; i < items.length; i++) {
      let temp: diaryItemType = {
        id: "context" + i,
        context: getValues("context" + i),
        style: style[i],
      };
      tempItemList.push(temp);
    }
    setItems(tempItemList);
    const findIndex = diary.findIndex((element) => element.day === day);
    if (findIndex === -1) {
      setDiary([
        ...diary,
        {
          day: day,
          title: getValues("titleContent"),
          content: tempItemList,
          template: template,
        },
      ]);
    } else {
      let copyDiary = [...diary];
      copyDiary[findIndex] = {
        day: day,
        title: getValues("titleContent"),
        content: tempItemList,
        template: template,
      };
      setDiary(copyDiary);
    }
    if (submitNums > 1) {
      setSubmitNums(0);
      navigate("/juiceplan/diary");
    }
  };
  return (
    <form onSubmit={handleSubmit(onValid)} className="flex flex-col gap-2">
      <Container justifyContent="between" alignItems="center">
        <Text mono>{day}</Text>
        <Container className="gap-2">
          <Button
            type="submit"
            white
            hover
            bgColor="emerald"
            onClick={() => setSubmitNums((prev) => prev + 1)}
            className="w-12 h-8"
          >
            {submitNums === 0 && "Save"}
            {submitNums === 1 && "한번더"}
          </Button>
        </Container>
      </Container>

      <Container alignItems="center" className="gap-4">
        <Text mono bold size="lg" className="whitespace-nowrap">
          제목
        </Text>
        <div
          {...register("titleContent")}
          contentEditable={!disabled}
          onInput={(e) => setValue("titleContent", e.currentTarget.textContent)}
          className="p-2 font-bold text-lg border-none w-full rounded-md"
        />
      </Container>

      <Divider />
      <Reorder.Group axis="y" values={items} onReorder={setItems}>
        <div>
          {items.map((value, index) => (
            <Reorder.Item
              key={value.id}
              value={value}
              dragConstraints={{
                top: -50,
                bottom: 100,
                left: 0,
                right: 0,
              }}
            >
              <div
                key={value.id}
                className="flex gap-1 group relative items-center"
              >
                <button
                  onClick={onPlusClick}
                  className="group-hover:opacity-100 relative opacity-0 hover:opacity-100 hover:bg-gray-200 w-8 h-8 rounded-md duration-500 text-gray-400"
                >
                  +
                </button>
                <SetBtn
                  isSettingBox
                  onClick={() => onSettingClick(index)}
                  others="relative opacity-0 group-hover:opacity-100 hover:opacity-100 hover:bg-gray-200 duration-500"
                />
                <div
                  {...register(value.id)}
                  contentEditable={!disabled}
                  onInput={(e) =>
                    setValue(value.id, e.currentTarget.textContent)
                  }
                  className={`font-mono  border-none rounded-sm w-full px-1 active:bg-blue-200 active:rounded-sm duration-150 whitespace-pre-line ${value.style.textSize} ${value.style.textColor} ${value.style.textBg}`}
                />
              </div>
            </Reorder.Item>
          ))}
        </div>
      </Reorder.Group>
    </form>
  );
};
export default ItemList;
