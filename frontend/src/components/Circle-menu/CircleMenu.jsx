import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaCircle, FaSquare } from "react-icons/fa";
import { useState, useContext } from "react";
import { UserContext } from "../../context/userContext";

export default function CircleMenu() {
  const [showCircleMenu, setShowCircleMenu] = useState(false);
  const { user } = useContext(UserContext);
  const location = useLocation();
  const navigate = useNavigate();
  const handleClick = () => {
    if (location.pathname === "/welcome") {
      navigate("/");
    } else {
      navigate("/welcome");
    }
  };
  const toggleCircleMenu = () => {
    setShowCircleMenu(!showCircleMenu);
  };
  return (
    <div>
      {user.message !== "isLogged" ? (
        <button
          onClick={toggleCircleMenu}
          label="button"
          type="button"
          className="absolute right-3 top-2 pt-1"
        >
          {!showCircleMenu ? (
            <FaCircle className="w-12 h-12 md:w-16 md:h-16 md:transition-transform md:hover:scale-110 md:cursor-pointer" />
          ) : (
            <>
              <FaCircle className="w-72 h-72 md:w-[400px] md:h-[400px] fixed -top-6 -right-6 " />
              <ul className="text-white text-2xl md:text-3xl md:leading-loose top-[70px] right-[60px] md:top-[115px] md:right-[100px] leading-loose fixed">
                <Link to="/login">
                  <li className="hover:text-gray-300">Connexion</li>
                </Link>
                <Link to="/signup">
                  <li className="hover:text-gray-300">Inscription</li>
                </Link>
              </ul>
            </>
          )}
        </button>
      ) : (
        <button
          onClick={handleClick}
          label="button"
          type="button"
          className="absolute right-3 top-2 pt-1"
        >
          <FaSquare className="w-12 h-12 md:w-16 md:h-16 md:transition-transform md:hover:scale-110 md:cursor-pointer" />
        </button>
      )}
    </div>
  );
}
