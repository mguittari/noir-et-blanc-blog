import { Link } from "react-router-dom";
import RandomButton from "../Buttons/RandomButton";

export default function NavMobile() {
  return (
    <ul className="ml-2">
      <li>
        <Link to="/about">À propos</Link>
      </li>
      <li>
        <RandomButton />
      </li>
      <li>
        <Link to="/">Archives</Link>
      </li>
    </ul>
  );
}
