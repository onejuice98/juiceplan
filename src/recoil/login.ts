import { atom } from "recoil";

export interface UserInfo {
  nickName: string;
  password: string;
}

export const userInfo = atom<UserInfo>({
  key: "userInfoState",
});
