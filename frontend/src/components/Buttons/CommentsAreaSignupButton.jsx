import { useState } from "react";
import ModalSignup from "../Modal/ModalSignup";

export default function CommentsAreaSignupButton() {
  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    setShowModal(!showModal);
  };

  return (
    <>
      <button
        type="button"
        onClick={handleClick}
        className="text-center font-semibold hover:underline cursor-pointer flex justify-center"
      >
        Créez votre compte ici
      </button>
      <ModalSignup
        show={showModal}
        setShow={setShowModal}
        onClick={handleClick}
      />
    </>
  );
}
