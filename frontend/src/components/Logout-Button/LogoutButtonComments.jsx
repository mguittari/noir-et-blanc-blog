import { useContext, useState } from "react";
import { UserContext } from "../../context/userContext";
import ModalLogout from "../Modal/ModalLogout";
// import ModalLogout from "../Modal/ModalLogout";

export default function LogoutButtonComments() {
  const { setUser, updateToken, token } = useContext(UserContext);

  const [showModal, setShowModal] = useState(false);

  const handleCancel = () => {
    setShowModal(false);
  };

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
        updateToken(res);
        setUser({});
      })
      .catch((err) => console.info(err));
  };
  return (
    <div>
      <button
        type="button"
        onClick={() => setShowModal(true)}
        className="text-blue-800 font-bold"
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
