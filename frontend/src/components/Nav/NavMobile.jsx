import { Link } from "react-router-dom";

export default function NavMobile() {
  return (
    <ul className="ml-2">
      <li>
        <Link to="/" className="hover:text-black">
          À propos
        </Link>
      </li>
      <li>
        <Link to="/" className="hover:text-black">
          Au hasard
        </Link>
      </li>
      <li>
        <Link to="/" className="hover:text-black">
          Archives
        </Link>
      </li>
    </ul>
  );
}
