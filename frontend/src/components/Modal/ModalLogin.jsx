/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import PropTypes from "prop-types";
import LoginForm from "../LoginForm/LoginForm";

export default function ModalLogin({ show, setShow, onClick }) {
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
        <LoginForm onClick={onClick} show={show} setShow={setShow} />
      </div>
    </div>
  );
}

ModalLogin.propTypes = {
  show: PropTypes.bool.isRequired,
  setShow: PropTypes.func.isRequired,
  onClick: PropTypes.func,
};

ModalLogin.defaultProps = {
  onClick: () => {},
};
