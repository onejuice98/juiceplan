import { Route, Routes } from "react-router-dom";
import Diary from "./pages/Diary";
import DayDiary from "./pages/Diary/DayDiary";
import Login from "./pages/Login";
import Main from "./pages/Main";
const App = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<Main />} />
      <Route path="/diary" element={<Diary />} />
      <Route path="/diary/:dayId" element={<DayDiary />} />
      <Route path="/diary/show/:dayId" />
    </Routes>
  );
};

export default App;
