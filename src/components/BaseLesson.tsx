import { Outlet, Link } from "react-router-dom";
import classNames from "classnames";

const BaseLession = () => {
  return (
    <section className="w-full flex">
      <div className="hidden md:block bg-violet-300 fixed top-20 left-0 w-[360px] h-screen overflow-y-scroll p-24">
        <ul className="flex flex-col">
          <div className="pb-8">
            <span className="text-lg font-bold block mb-4">
              Getting started
            </span>
            <li
              className={classNames(
                "inliine-block hover:underline hover:underline-offset-8 mb-4"
              )}
            >
              <Link to="/lesson/1">Lektion 1</Link>
            </li>
            <li
              className={classNames(
                "inliine-block hover:underline hover:underline-offset-8 mb-4"
              )}
            >
              <Link to="/lesson/2">Lektion 2</Link>
            </li>
            <li
              className={classNames(
                "inliine-block hover:underline hover:underline-offset-8 mb-4"
              )}
            >
              <Link to="/lesson/3">Lektion 3</Link>
            </li>
          </div>
        </ul>
      </div>
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

export default BaseLession;
