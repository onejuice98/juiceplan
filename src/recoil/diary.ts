import { atom } from "recoil";

export const diaryText = atom<string[]>({
  key: "diaryTextState",
  default: [],
});

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

export interface DiaryContext {
  id: string;
  context: string;
}

export const diaryContextState = atom<DiaryContext[]>({
  key: "diaryContextState",
  default: [{ id: "context0", context: "" }],
});

export type textSizeType = "text-base" | "text-sm" | "text-lg" | string;
export const textSize = atom<textSizeType>({
  key: "textSize",
  default: "text-base",
});
