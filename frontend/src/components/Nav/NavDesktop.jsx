import { Link } from "react-router-dom";
import RandomButton from "../Buttons/RandomButton";

export default function NavDesktop() {
  return (
    <ul className="flex flex-row text-[35px] gap-2 ml-4 font-nationalparksemibold">
      <li className="hover:underline">
        <Link to="/about">À propos</Link>
      </li>
      <li>|</li>
      <li>
        <RandomButton />
      </li>
      <li>|</li>
      <li className="hover:underline">
        <Link to="/archives">Archives</Link>
      </li>
    </ul>
  );
}
