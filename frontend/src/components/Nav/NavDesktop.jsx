import { Link } from "react-router-dom";

export default function NavDesktop() {
  return (
    <ul className="flex flex-row text-[35px] gap-2 ml-4">
      <li>
        <Link to="/" className="hover:text-black">
          À propos
        </Link>
      </li>
      <li>|</li>
      <li>
        <Link to="/" className="hover:text-black">
          Articles
        </Link>
      </li>
      <li>|</li>
      <li>
        <Link to="/" className="hover:text-black">
          Archives
        </Link>
      </li>
    </ul>
  );
}
