import classNames from "classnames";
import { Link } from "react-router-dom";

export interface navObject {
  name: string;
  linkTo: string;
}

const Navbar = ({ navItems }: { navItems: navObject[] }) => {
  return (
    <div className="hidden md:block bg-violet-300 fixed top-20 left-0 w-[360px] h-screen overflow-y-scroll p-24">
      <ul className="flex flex-col">

        {navItems.map((item, index) => (
          <li
            key={index + 1}
            className={classNames(
              "block hover:underline hover:underline-offset-8 mb-4"
            )}
          >
            <Link to={item.linkTo}>{item.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
