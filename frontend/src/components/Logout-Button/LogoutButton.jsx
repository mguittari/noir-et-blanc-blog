import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../context/userContext";
import ModalLogout from "../Modal/ModalLogout";
// import ModalLogout from "../Modal/ModalLogout";

export default function LogoutButton() {
  const { setUser, updateToken, token } = useContext(UserContext);
  const [showModal, setShowModal] = useState(false);
  const handleCancel = () => {
    setShowModal(false);
  };

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
      <button
        type="button"
        onClick={() => setShowModal(true)}
        className="bg-black text-white text-center cursor-pointer p-4 rounded-xl transition duration-300 hover:bg-white hover:text-black hover:drop-shadow-[0_7px_1.5px_rgba(0,0,0,0.25)] max-w-md w-full"
      >
        Deconnexion
      </button>
      <ModalLogout
        show={showModal}
        handleClick={handleClick}
        handleCancel={handleCancel}
      />
    </div>
  );
}
