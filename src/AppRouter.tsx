import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import BaseLesson from "./components/BaseLesson";
import BaseLesson1 from "./components/lessons/lesson1/BaseLesson1";
import Layout from "./components/Layout";
import BaseLesson2 from "./components/lessons/lesson2/BaseLesson2";
import L1C1 from "./components/lessons/lesson1/L1C1";
import L1C2 from "./components/lessons/lesson1/L1C2";
import L2C1 from "./components/lessons/lesson2/L2C1";
import L2C2 from "./components/lessons/lesson2/L2C2";
import navItemsData from "./data/navItemsData.json";

const AppRouter = () => (
  <Routes>
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      
      <Route path="/lesson/1" element={<BaseLesson navItems={navItemsData.navItemsLesson1} />}>
        <Route index element={<BaseLesson1 />} />
        <Route path="chapter/1" element={<L1C1 />} />
        <Route path="chapter/2" element={<L1C2 />} />
      </Route>

      <Route path="/lesson/2" element={<BaseLesson navItems={navItemsData.navItemsLesson2} />}>
        <Route index element={<BaseLesson2 />} />
        <Route path="chapter/1" element={<L2C1 />} />
        <Route path="chapter/2" element={<L2C2 />} />
      </Route>
    </Route>
  </Routes>
);

export default AppRouter;
