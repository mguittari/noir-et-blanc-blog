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
        className="font-arialnarrow font-bold text-xl hover:underline hover:decoration-4"
      >
        S'inscrire
      </button>
      <ModalSignup
        show={showModal}
        setShow={setShowModal}
        onClick={handleClick}
      />
    </>
  );
}
