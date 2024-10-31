import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import BaseLession from "./components/BaseLesson";
import Lesson1 from "./components/lessons/Lesson1";
import Layout from "./components/Layout";

const AppRouter = () => (
  <Routes>
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="/lesson" element={<BaseLession />}>
        <Route path="1" element={<Lesson1 />} />
      </Route>
    </Route>
    <Route />
  </Routes>
);

export default AppRouter;
