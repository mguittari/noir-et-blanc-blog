import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../context/userContext";
// import ModalLogout from "../Modal/ModalLogout";

export default function LogoutButton() {
  const { setUser, updateToken, token } = useContext(UserContext);

  const navigate = useNavigate();

  const handleClick = () => {
    fetch("http://localhost:3310/api/logout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((res) => {
        console.info("res from Login", res);
        updateToken(res);
        setUser({});
        navigate("/");
      })
      .catch((err) => console.info(err));
  };
  return (
    <div>
      <button type="button" onClick={handleClick}>
        Déconnexion
      </button>
    </div>
  );
}
