// eslint-disable-next-line import/no-extraneous-dependencies
import { FiMenu } from "react-icons/fi";
import { useState } from "react";
import NavMobile from "../NavMobile/NavMobile";

function Header() {
  const [active, setActive] = useState(false);
  const showMenu = () => {
    setActive(!active);
  };
  return (
    <header className="container font-serif">
      <div className="ml-2 mb-2">
        <h1 className="text-[40px] -mt-1">NOIR ET BLANC</h1>
        <p className="text-[15px] ">Un blog pour s'entrainer à coder</p>
      </div>

      <nav>
        <div className="absolute right-6 md:hidden top-8 scale-150">
          <FiMenu onClick={showMenu} className="scale=150 cursor-pointer" />
        </div>
        <ul className="hidden md:flex text-[15px] gap-1 ml-2 border-b-2 border-black">
          <li>À propos</li>
          <li>|</li>
          <li>Articles</li>
          <li>|</li>
          <li>Archives</li>
          <li>|</li>
          <li>Au hasard</li>
          <li>|</li>
          <li> Faire un don</li>
        </ul>
        <NavMobile showMenu={showMenu} active={active} />
      </nav>
    </header>
  );
}

export default Header;
