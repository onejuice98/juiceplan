import { parseJsonSourceFileConfigFileContent } from "typescript";
import Box from "../box";

const Profile = () => {
  return (
    <div className="flex flex-col items-center gap-1 mt-4 ">
      <div className="rounded-full bg-slate-300 w-20 h-20 shadow-lg" />

      <div className="font-mono font-bold"> @1_ju1.ce</div>
      <div className="flex justify-center items-center gap-2">
        <Box>Velog </Box>
        <Box>Github</Box>
      </div>
    </div>
  );
};

export default Profile;
