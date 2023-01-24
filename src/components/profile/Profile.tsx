import Box from "../box";
import JuiceFont from "../common/JuiceFont";

const Profile = () => {
  return (
    <div className="flex flex-col items-center gap-1 mt-4 ">
      <div className="rounded-full bg-slate-300 w-20 h-20 shadow-lg" />

      <JuiceFont isBold> @1_ju1.ce</JuiceFont>
      <div className="flex justify-center items-center gap-2">
        <Box href="https://velog.io/@onejuice98">Velog </Box>
        <Box href="https://github.com/onejuice98">Github</Box>
      </div>
    </div>
  );
};

export default Profile;
