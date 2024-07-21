import { useState } from "react";
import ModalLogin from "../Modal/ModalLogin";

export default function CommentsAreaLoginButton() {
  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    setShowModal(!showModal);
  };

  return (
    <>
      <button
        type="button"
        onClick={handleClick}
        className="font-arialnarrow font-bold text-xl hover:underline hover:decoration-4"
      >
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
