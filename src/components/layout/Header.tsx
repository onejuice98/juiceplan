import JuiceFont from "../common/JuiceFont";

const Header = () => {
  return (
    <div className="flex justify-between bg-stone-100 px-2 py-4">
      <JuiceFont isBold> JUICE</JuiceFont>
      <JuiceFont isBold> 설정 </JuiceFont>
    </div>
  );
};

export default Header;
