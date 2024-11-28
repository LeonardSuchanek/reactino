import { useState } from "react";
import Button from "./Button";
import menuIcon from "../assets/menu.svg";
import closeIcon from "../assets/close.svg";
import githubIcon from "../assets/github.svg";
import { Link } from "react-router-dom";

const Header = () => {
  const [showSideMenu, setShowSideMenu] = useState(false);

  const closeSideMenu = () => {
    setShowSideMenu(false);
  };
  return (
    <header className="bg-white h-20 w-full fixed top-0 z-40">
      <div className="w-full h-full m-auto flex justify-between items-center px-5 md:px-24">
        <Link to="/" className="text-2xl font-bold">
          Reactino
        </Link>
        <nav className="block w-1/2">
          <ul className="flex justify-end items-center space-x-4">
            <li>
              <Link to="/lesson/1">
                <Button color={"red"} buttonText="Jetzt starten" />
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
