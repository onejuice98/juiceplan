import { atom } from "recoil";

export interface UserInput {
  dDayName: string;
  date: string;
}

export const dDayUserInputState = atom<UserInput>({
  key: "dDayUserInputState",
  default: { dDayName: "입력하세요! D-Day!", date: "2023-06-30" },
});

export const dDayListState = atom<UserInput[]>({
  key: "dDayListState",
  default: [{ dDayName: "", date: "" }],
});
