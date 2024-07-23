import { useState } from "react";
import { ImCross } from "react-icons/im";
import PropTypes from "prop-types";

export default function SignupForm({ onClick, show, setShow }) {
  const [errorMessages, setErrorMessages] = useState({
    pseudo: "",
    email: "",
    password: "",
  });

  const [formData, setFormData] = useState({
    pseudo: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrorMessages({ pseudo: "", email: "", password: "" });

    fetch("http://localhost:3310/api/user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => {
        res.json().then((data) => {
          if (!res.ok) {
            const newErrors = { pseudo: "", email: "", password: "" };
            if (res.status === 422 && data.errors) {
              data.errors.map((error) => {
                newErrors[error.field] = error.message;
                return null;
              });
            }
            setErrorMessages(newErrors);
          } else {
            setShow(!show);
          }
        });
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="text-3xl font-nationalparkbold mb-7 bg-black text-white p-4 max-w-md md:max-w-lg w-full text-center shadow-lg rounded-xl">
        INSCRIPTION
      </h1>
      <form className="font-serif text-xl" onSubmit={handleSubmit}>
        <div className=" flex flex-col items-center mb-4">
          <label htmlFor="pseudo" className="font-victormono">
            Pseudo
          </label>
          <input
            className="border border-black h-10 focus:outline-none rounded-md focus:border-2 shadow-md p-2"
            type="text"
            id="pseudo"
            name="pseudo"
            value={formData.pseudo}
            onChange={handleChange}
            minLength={4}
            maxLength={20}
            title="Votre pseudo doit contenir au moins 4 caractères et 20 maximum"
            required
          />
        </div>
        {errorMessages.pseudo && (
          <div className="font-victormono text-black text-center mb-2 border-2 border-black text-sm p-2 rounded-md">
            {errorMessages.pseudo}
          </div>
        )}

        <div className=" flex flex-col items-center mb-4">
          <label htmlFor="email" className="font-victormono">
            Courriel
          </label>
          <input
            className="border border-black h-10 focus:outline-none rounded-md focus:border-2 shadow-md p-2"
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        {errorMessages.email && (
          <div className="font-victormono text-black text-center mb-2 border-2 border-black text-sm p-2 rounded-md">
            {errorMessages.email}
          </div>
        )}

        <div className=" flex flex-col items-center mb-4">
          <label htmlFor="password" className="font-victormono">
            Mot de passe
          </label>
          <input
            className="border border-black h-10 focus:outline-none rounded-md focus:border-2 shadow-md p-2"
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        {errorMessages.password && (
          <div className="font-victormono text-black text-center mb-2 border-2 border-black text-sm p-2 rounded-md">
            {errorMessages.password}
          </div>
        )}
        <div className="flex justify-center">
          <button
            type="submit"
            className="bg-white text-black border border-black py-2 px-4 mt-2 rounded transition duration-300 hover:bg-black hover:text-white shadow-md font-nationalparkbold"
          >
            Valider
          </button>
        </div>
      </form>
      <button
        label="croix de fermeture"
        type="button"
        onClick={onClick}
        className="flex justify-center mt-8 md:transition-transform md:hover:scale-110 md:cursor-pointer border-4 border-black rounded-full p-2"
      >
        <ImCross />
      </button>
    </div>
  );
}

SignupForm.propTypes = {
  show: PropTypes.bool.isRequired,
  setShow: PropTypes.func.isRequired,
  onClick: PropTypes.func.isRequired,
};
