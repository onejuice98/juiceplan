import { Link } from "react-router-dom";
import JuiceFont from "../common/JuiceFont";

const Header = () => {
  return (
    <div className="block z-[9] relative h-12">
      <div className="fixed w-full justify-between flex px-2 py-4 bg-white border-b">
        <div className="flex">
          <JuiceFont isBold> JUICE </JuiceFont>
          <JuiceFont others="text-gray-500"> Planner </JuiceFont>
        </div>
        <div className="flex gap-8">
          <Link to="/diary">
            <JuiceFont isBold others="hover:underline cursor-pointer">
              Diary
            </JuiceFont>
          </Link>
          <JuiceFont isBold others="underline hover:underline cursor-pointer">
            Profile
          </JuiceFont>
        </div>
      </div>
    </div>
  );
};

export default Header;
