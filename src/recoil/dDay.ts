import { atom } from "recoil";

export interface UserInput {
  dday: string;
  date: string;
  days?: number;
}
/**
 * dDayListState 추가 및 배열 type 정의를 위해서 생성한 상태
 * @types UserInput
 * @default { dDayName: "", date: "" }
 */
export const dDayUserInputState = atom<UserInput>({
  key: "dDayUserInputState",
  default: { dday: "", date: "", days: 0 },
});

/**
 * DDayList 출력을 위한 상태 DDayInput 에서 최신화 및 추가 된다.
 * @types UserInput[]
 * @default [{ dDayName: "누군가의 전역일", date: "2023-06-30"}]
 */
export const dDayListState = atom<UserInput[]>({
  key: "dDayListState",
  default: [{ dday: "누군가의 전역일", date: "2023-06-30", days: 0 }],
});

/**
 * 에러 검출을 위한 상태 (dDayListState 5개 이상 / 중복 dDayName 가질 시 활성화)
 * @types boolean
 * @default false
 */
export const isErrorState = atom<boolean>({
  key: "isErrorState",
  default: false,
});
