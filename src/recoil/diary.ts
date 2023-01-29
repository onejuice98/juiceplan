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
