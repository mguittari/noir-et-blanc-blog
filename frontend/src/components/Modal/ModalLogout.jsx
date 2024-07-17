/* eslint-disable jsx-a11y/no-static-element-interactions */
import PropTypes from "prop-types";
/* eslint-disable jsx-a11y/click-events-have-key-events */
export default function ModalLogout({ show, handleClick, handleCancel }) {
  return (
    <div>
      {show && <div className="fixed inset-0 bg-gray-800 bg-opacity-50 z-10" />}
      <div
        className={`${
          show
            ? "z-20 fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white border-2 border-black rounded-2xl shadow-lg py-14 px-12 md:px-20"
            : "hidden"
        }`}
      >
        <p className="text-center mb-4">
          Voulez-vous vraiment vous déconnecter ?
        </p>
        <div className="flex flex-col-2 gap-4 text-center justify-center">
          <button
            className="bg-black text-white border border-black py-2 px-4 rounded transition duration-300 hover:bg-white hover:text-black shadow-md"
            onClick={handleClick}
            type="button"
          >
            Oui
          </button>
          <button
            className="bg-black text-white border border-black py-2 px-4 rounded transition duration-300 hover:bg-white hover:text-black shadow-md"
            onClick={handleCancel}
            type="button"
          >
            Annuler
          </button>
        </div>
      </div>
    </div>
  );
}

ModalLogout.propTypes = {
  show: PropTypes.bool.isRequired,
  handleClick: PropTypes.func.isRequired,
  handleCancel: PropTypes.func.isRequired,
};
