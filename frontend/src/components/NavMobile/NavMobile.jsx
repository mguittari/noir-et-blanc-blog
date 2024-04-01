import { Link } from "react-router-dom";
// eslint-disable-next-line import/no-extraneous-dependencies
import { FiXSquare } from "react-icons/fi";

export default function NavMobile({ showMenu, active }) {
  return (
    <div className="container">
      <ul
        className={
          active
            ? "container flex-col flex items-center gap-2 justify-center fixed bg-white px-1 right-0 top-0 w-[250px] h-[400px] border-4 border-double border-black md:hidden text-[28px]"
            : "hidden"
        }
      >
        <FiXSquare
          onClick={showMenu}
          className="cursor-pointer absolute inset-y-0 left-0 "
        />
        <li>
          <Link to="/">À propos</Link>
        </li>
        <li>
          <Link to="/">Articles</Link>
        </li>
        <li>
          <Link to="/">Archives</Link>
        </li>
        <li>
          <Link to="/">Au hasard</Link>
        </li>
        <li>
          <Link to="/">Faire un don</Link>
        </li>
      </ul>
    </div>
  );
}
