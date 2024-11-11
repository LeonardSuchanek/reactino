import classNames from "classnames";
import { Link } from "react-router-dom";

export interface navObject {
  name: string;
  linkTo: string;
}

const Navbar = ({ navItems }: { navItems: navObject[] }) => {
  return (
    <div className="hidden md:block bg-violet-300 fixed left-0 w-[360px] h-screen overflow-y-scroll p-24 pt-8">
      <Link to="/" className="text-2xl font-bold">
        Reactino
      </Link>
      <ul className="flex flex-col pt-20">
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
