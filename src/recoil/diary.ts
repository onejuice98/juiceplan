import { atom } from "recoil";

export const canvasWidth = atom<number>({
  key: "canvasWidth",
  default: 0,
});

export const canvasHeight = atom<number>({
  key: "canvasHeight",
  default: 0,
});

export const leftContext = atom<CanvasRenderingContext2D>({
  key: "leftContext",
});

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
  | "#FFFF00"
  | "#00FEFE"
  | "#00FF00"
  | "#FF00FF"
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
 * @default none
 */
export const diaryContent = atom<diaryContentType[]>({
  key: "diaryContentState",
  default: [
    {
      day: "2022-01-02",
      title: "Recoil Default",
      content: [
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
    },
  ],
});

// template types
export const isCanvas = atom<boolean>({
  key: "isCanvasState",
  default: false,
});

export const bgImage = atom<string>({
  key: "bgImageState",
  default: "",
});
