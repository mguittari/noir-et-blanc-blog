// eslint-disable-next-line import/no-extraneous-dependencies
import { TiThMenu } from "react-icons/ti";
import { useState } from "react";
import NavMobile from "../NavMobile/NavMobile";
import finger from "../../assets/finger.png";

function Header() {
  const [active, setActive] = useState(false);
  const showMenu = () => {
    setActive(!active);
  };
  return (
    <header className="w-full font-serif mt-5 border-b border-black">
      <h1 className="text-[40px] font-serif ml-3 mr-[65px] leading-[50px]">
        NOIR ET BLANC
      </h1>
      <div className="flex mb-[10px]">
        <img className="w-12 h-12 ml-1 mr-1" src={finger} alt="finger up" />
        <p className="text-[28px] pt-[10px] mr-1">
          Un blog pour s'entrainer à coder
        </p>
      </div>
      <nav>
        <div
          id="menu"
          className="absolute right-8 md:hidden top-[43px] scale-x-250 scale-y-230"
        >
          <TiThMenu onClick={showMenu} className="scale-150 cursor-pointer" />
        </div>
        <ul className="hidden md:flex ml-3 mb-5 text-[28px] gap-1">
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
