import { atom } from "recoil";

// Editor types
export type diaryItemType = {
  id: string;
  context: string;
  style: itemStyleType;
};
export type itemTextSizeType = "text-base" | "text-sm" | "text-lg" | string;
export type itemTextColorType =
  | "text-red-500"
  | "text-green-500"
  | "text-blue-500"
  | string;

// 노랑, 청록색, 녹색, 분홍색
export type itemTextBgColorType =
  | "bg-[yellow]"
  | "bg-[blue]"
  | "bg-[green]"
  | "bg-[pink]"
  | ""
  | string;
export type itemStyleType = {
  textSize: itemTextSizeType;
  textColor: itemTextColorType;
  textBg: itemTextBgColorType;
};
export type diaryContentType = {
  day: string | undefined;
  title: string;
  content: diaryItemType[];
  template: string | undefined;
};

/**
 * Day diary 제목을 위한 상태
 * @default ""
 */
export const titleText = atom<string>({
  key: "titleTextState",
  default: "",
});

/**
 * 수정 가능한 tag (input, contentEditable) 조작을 위한 상태
 * @default false
 */
export const isDisabled = atom<boolean>({
  key: "isDisabledState",
  default: false,
});

/**
 * diaryItem 의 list, Day Diary의 전체 내용이 된다.
 * @type diaryItem[]
 * @default none
 */
export const diaryItemList = atom<diaryItemType[]>({
  key: "diaryItemListState",
  default: [
    {
      id: "context0",
      context: "",
      style: {
        textSize: "text-base",
        textColor: "",
        textBg: "",
      },
    },
  ],
});

// diary item CSS을 위한 상태들
/**
 * diary Item 의 글자 크기를 조절
 * @type "text-base" | "text-sm" | "text-lg" | ""
 * @default "text-base"
 */
export const itemTextSize = atom<itemTextSizeType>({
  key: "itemTextSizeState",
  default: "text-base",
});

/**
 * diary Item 의 글자 색을 조절
 * @type "text-red-500" | "text-green-500" | "text-blue-500" | ""
 * @default ""
 */
export const itemTextColor = atom<itemTextColorType>({
  key: "itemTextColorState",
  default: "",
});

/**
 * diary Item 의 배경 색을 조절
 * @type "#FFFF00" | "#00FEFE" | "#00FF00" | "#FF00FF" | "" (노랑, 청록, 녹색, 분홍)
 * @default
 */
export const itemTextBgColor = atom<itemTextBgColorType>({
  key: "itemTextBgColorState",
  default: "",
});

/**
 * diary Item 의 CSS 속성
 * @type itemTextSizeType, itemTextColorType
 * @default none
 */
export const itemStyle = atom<itemStyleType[]>({
  key: "itemStyleState",
  default: [
    {
      textSize: "text-base",
      textColor: "",
      textBg: "",
    },
  ],
});

/**
 * 전체 다이어리의 대한 정보를 가진 상태
 * @default
 */
export const diaryContent = atom<diaryContentType[]>({
  key: "diaryContentState",
  default: [
    {
      day: "2023-02-15",
      title: "우리 루다 이쁘죠",
      content: [
        {
          id: "context0",
          context: "이쁘죠?",
          style: {
            textSize: "text-lg",
            textColor: "",
            textBg: "bg-[yellow]",
          },
        },
      ],
      template: "",
    },
  ],
});

// template recoil
/**
 * canvas background Image 설정을 위한 상태 (URL)
 * @type string
 * @default ""
 */
export const bgImage = atom<string>({
  key: "bgImageState",
  default: "",
});

/**
 * canvas background Image + 내가 그린 것을 합친 image 상태 (URL)
 * @type string | undefined
 * @default ""
 */
export const resultTemplate = atom<string | undefined>({
  key: "resultTemplate",
  default: "",
});

/**
 * canvas에 그린 것을 적용하기 위한 상태
 * @type boolean
 * @default false
 */
export const apply = atom<boolean>({
  key: "applyState",
  default: false,
});

/**
 * canvas strokeStyle 제어를 위한 상태 (strokeWidth)
 * @type number
 * @default 2.5
 */
export const strokeWidth = atom<number>({
  key: "strokeWidthState",
  default: 2.5,
});

/**
 * canvas strokeStyle 제어를 위한 상태 (color)
 * @type string
 * @default black
 */
export const strokeColor = atom<string>({
  key: "strokeColorState",
  default: "#000000",
});
