/* eslint-disable jsx-a11y/no-static-element-interactions */

import SignupForm from "../SignupForm/SignupForm";

/* eslint-disable jsx-a11y/click-events-have-key-events */
export default function ModalSignup({ show, setShow, onClick }) {
  return (
    <div>
      {show && (
        <div
          className="fixed inset-0 bg-gray-800 bg-opacity-50 z-10"
          onClick={setShow}
        />
      )}
      <div
        className={`${
          show
            ? "z-20 fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white border-2 border-black rounded-2xl shadow-lg py-14 px-20 md:px-36"
            : "hidden"
        }`}
      >
        <SignupForm onClick={onClick} show={show} setShow={setShow} />
      </div>
    </div>
  );
}
