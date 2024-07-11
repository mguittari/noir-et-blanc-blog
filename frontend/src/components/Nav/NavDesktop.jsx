import { Link } from "react-router-dom";
import RandomButton from "../Buttons/RandomButton";

export default function NavDesktop() {
  return (
    <ul className="flex flex-row text-[35px] gap-2 ml-4">
      <li>
        <Link to="/about">À propos</Link>
      </li>
      <li>|</li>
      <li>
        <RandomButton />
      </li>
      <li>|</li>
      <li>
        <Link to="/archives">Archives</Link>
      </li>
    </ul>
  );
}
