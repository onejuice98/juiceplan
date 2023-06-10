import { Route, Routes } from "react-router-dom";
import Diary from "./pages/Diary";
import DayDiary from "./pages/Diary/DayDiary";
import DisplayDiary from "./pages/Diary/DisplayDiary";
import Main from "./pages/Main";
import Test from "./pages/Test";
const App = () => {
  return (
    <Routes>
      <Route path="/juiceplan" element={<Main />} />
      <Route path="/juiceplan/diary" element={<Diary />} />
      <Route path="/juiceplan/diary/:dayId" element={<DayDiary />} />
      <Route
        path="/juiceplan/diary/display/:dayId"
        element={<DisplayDiary />}
      />
      <Route path="/juiceplan/test" element={<Test />} />
    </Routes>
  );
};

export default App;
