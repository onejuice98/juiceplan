import { atom } from "recoil";

export interface UserInput {
  dDayName: string;
  date: string;
  id?: number;
}

export const userDday = atom<number>({
  key: "userDday",
  default: 0,
});

export const dDayUserInputState = atom<UserInput>({
  key: "dDayUserInputState",
  default: { dDayName: "", date: "", id: 0 },
});

export const dDayListState = atom<UserInput[]>({
  key: "dDayListState",
  default: [{ dDayName: "누군가의 전역일", date: "2023-06-30", id: 0 }],
});

export const isErrorState = atom<boolean>({
  key: "isErrorState",
  default: false,
});
