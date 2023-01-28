import { atom } from "recoil";

export const diaryText = atom<string[]>({
  key: "diaryTextState",
  default: [],
});
