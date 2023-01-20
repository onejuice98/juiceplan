import { atom } from "recoil";

export interface UserInput {
  dDayName: string;
  date: string;
}

export const isSubmitState = atom<boolean>({
  key: "isSubmitState",
  default: false,
});
export const dDayUserInputState = atom<UserInput>({
  key: "dDayUserInputState",
  default: { dDayName: "누군가의 전역일", date: "2023-06-30" },
});

export const dDayListState = atom<UserInput[]>({
  key: "dDayListState",
  default: [],
});
