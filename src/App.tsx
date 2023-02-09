import { Route, Routes } from "react-router-dom";
import Diary from "./pages/Diary";
import DayDiary from "./pages/Diary/DayDiary";
import DisplayDiary from "./pages/Diary/DisplayDiary";
import Main from "./pages/Main";
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/diary" element={<Diary />} />
      <Route path="/diary/:dayId" element={<DayDiary />} />
      <Route path="/diary/display/:dayId" element={<DisplayDiary />} />
    </Routes>
  );
};

export default App;
