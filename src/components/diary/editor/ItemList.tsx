import { Reorder } from "framer-motion";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useRecoilState, useRecoilValue } from "recoil";
import {
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
} from "../../../recoil/diary";
import SetBtn from "../../common/SetBtn";

/**
 * Editor의 중하단부, context의 List를 더하거나 CSS를 수정한다. 내용을 추가 할 수 있다.
 * @returns Item List 가 출력 (Item -> 내용)
 */
const ItemList = () => {
  const { register, watch, setValue } = useForm();
  const disabled = useRecoilValue<boolean>(isDisabled);
  const [items, setItems] = useRecoilState<diaryItemType[]>(diaryItemList);
  // recoil default 가 0 가 있어서 1부터다!
  const [itemId, setItemId] = useState<number>(1);
  const [style, setStyle] = useRecoilState<itemStyleType[]>(itemStyle);
  const [size, setSize] = useRecoilState<itemTextSizeType>(itemTextSize);
  const [color, setColor] = useRecoilState<itemTextColorType>(itemTextColor);
  const [bgColor, setBgColor] =
    useRecoilState<itemTextBgColorType>(itemTextBgColor);

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

  useEffect(() => {
    let tempItemList: diaryItemType[] = [];
    for (let i = 0; i < items.length; i++) {
      let temp: diaryItemType = {
        id: "context" + i,
        context: watch("context" + i),
        style: style[i],
      };
      tempItemList.push(temp);
    }
    setItems(tempItemList);
  }, [disabled, style]);
  return (
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
                isWeakGray
                isSettingBox
                onClick={() => onSettingClick(index)}
                others="relative opacity-0 group-hover:opacity-100 hover:opacity-100 hover:bg-gray-200 duration-500"
              />
              <div
                {...register(value.id)}
                contentEditable={!disabled}
                onInput={(e) => setValue(value.id, e.currentTarget.textContent)}
                className={`font-mono  border-none rounded-sm w-full px-1 active:bg-blue-200 active:rounded-sm duration-150 whitespace-pre-line ${value.style.textSize} ${value.style.textColor} bg-[${value.style.textBg}]`}
              />
            </div>
          </Reorder.Item>
        ))}
      </div>
    </Reorder.Group>
  );
};
export default ItemList;
