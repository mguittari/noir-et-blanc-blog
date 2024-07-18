import { Link } from "react-router-dom";
import { useState } from "react";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";
import NavMobile from "../Nav/NavMobile";
import NavDesktop from "../Nav/NavDesktop";
import cube from "../../assets/cube.png";
import CircleMenu from "../Circle-menu/CircleMenu";
import "../../App.css";

function Header() {
  const [showMenu, setShowMenu] = useState(false);
  const handleClick = () => {
    setShowMenu(!showMenu);
  };
  return (
    <header className="relative w-full mt-3 border-b border-black pb-1">
      <div className="">
        <div className="ml-4 mr-16 grid">
          <CircleMenu />
          <div>
            <Link
              className="font-nationalparkxbold inline-block justify-start ml-[-2.5px] text-[65px] md:text-[90px] leading-[55px] md:leading-[75px]"
              to="/"
            >
              NOIR ET BLANC
            </Link>
          </div>
          <div className="flex items-center gap-2 mt-3 mb-1">
            <img
              className="w-8 h-8 md:w-12 md:h-12"
              src={cube}
              alt="cube logo"
            />
            <p className="font-nationalparksemibold leading-[23px] text-[22px] md:text-[35px]">
              Un blog pour apprendre à coder
            </p>
          </div>
        </div>
        <div className="ml-2 text-[22px] md:text-[35px] md:hidden font-nationalparksemibold">
          <div className="flex flex-row items-center">
            <button
              type="button"
              onClick={handleClick}
              className="cursor-pointer ml-2 underline"
            >
              Menu
            </button>
            {showMenu ? (
              <IoMdArrowDropup className="w-8 h-8" onClick={handleClick} />
            ) : (
              <IoMdArrowDropdown className="w-8 h-8" onClick={handleClick} />
            )}
          </div>
          {showMenu && <NavMobile className="flex-col flex items-center" />}
        </div>
        <div className="hidden md:flex">
          <NavDesktop />
        </div>
      </div>
    </header>
  );
}

export default Header;
