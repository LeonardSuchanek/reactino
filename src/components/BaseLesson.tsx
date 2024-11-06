import { Outlet } from "react-router-dom";
import classNames from "classnames";
import Navbar, { navObject } from "./Navbar";




const BaseLesson = ({ navItems }: { navItems: navObject[] }) => {
  return (
    <section className="w-full flex">
      <Navbar navItems={navItems} />
      <div
        className={classNames(
          "bg-cyan-200 w-full md:w-[calc(100vw-360px)] md:ml-[360px] p-5 md:p-24 min-h-screen max-h-full"
        )}
      >
        <Outlet />
      </div>
    </section>
  );
};

export default BaseLesson;
