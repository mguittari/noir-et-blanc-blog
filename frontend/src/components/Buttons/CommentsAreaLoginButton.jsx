import { useState } from "react";
import ModalLogin from "../Modal/ModalLogin";

export default function CommentsAreaLoginButton() {
  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    setShowModal(!showModal);
  };

  return (
    <>
      <button type="button" onClick={handleClick}>
        Connexion
      </button>
      <ModalLogin
        show={showModal}
        setShow={setShowModal}
        onClick={handleClick}
      />
    </>
  );
}
