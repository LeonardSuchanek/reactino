import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import BaseLesson from "./components/BaseLesson";
import Lesson1 from "./components/lessons/Lesson1";
import Layout from "./components/Layout";
import Lesson2 from "./components/lessons/Lesson2";

const AppRouter = () => (
  <Routes>
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="/lesson" element={<BaseLesson />}>
        <Route path="1" element={<Lesson1 />} />
        <Route path="2" element={<Lesson2 />} />
      </Route>
    </Route>
    <Route />
  </Routes>
);

export default AppRouter;
