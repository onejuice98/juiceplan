import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { isDisabled, titleText } from "../../../recoil/diary";
import JuiceFont from "../../common/JuiceFont";

/**
 * Editor 의 상단부, title을 입력할 수 있게 된다.
 * @returns title Input Box
 */
const Title = () => {
  const { register, watch } = useForm();
  const disabled = useRecoilValue<boolean>(isDisabled);
  const setTitle = useSetRecoilState<string>(titleText);

  // disabled 가 켜질때만 저장
  useEffect(() => {
    !disabled && setTitle(watch("titleContent"));
  }, [disabled]);

  return (
    <div className="flex gap-4 items-center">
      <JuiceFont isBold isBig others="whitespace-nowrap">
        제목
      </JuiceFont>
      <input
        {...register("titleContent")}
        disabled={disabled}
        className="p-2 font-bold text-lg border-none w-full rounded-md"
      />
    </div>
  );
};

export default Title;
