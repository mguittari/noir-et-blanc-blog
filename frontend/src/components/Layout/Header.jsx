import { useState } from "react";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";
import NavMobile from "../Nav/NavMobile";
import NavDesktop from "../Nav/NavDesktop";
import cube from "../../assets/cube.png";

function Header() {
  const [showMenu, setShowMenu] = useState(false);
  const handleClick = () => {
    setShowMenu(!showMenu);
  };
  return (
    <header className="w-full font-serif mt-3 border-b border-black pb-1">
      <div className="">
        <div className="ml-4">
          <h1 className="text-[40px] md:text-[65px] font-serif leading-[50px] md:leading-[75px]">
            NOIR ET BLANC
          </h1>
          <div className="flex items-center gap-1">
            <img
              className="w-8 h-8 md:w-12 md:h-12"
              src={cube}
              alt="cube logo"
            />
            <p className="text-[22px] md:text-[35px]">
              Un blog pour apprendre à coder
            </p>
          </div>
        </div>
        <div className="ml-2 text-[22px] md:text-[35px] md:hidden">
          <div className="flex flex-row items-center">
            <button
              type="button"
              onClick={handleClick}
              className="cursor-pointer ml-2"
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
