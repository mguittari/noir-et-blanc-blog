import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { ImCross } from "react-icons/im";
import PropTypes from "prop-types";
import { UserContext } from "../../context/userContext";

export default function LoginForm({ onClick, show, setShow }) {
  const { updateToken } = useContext(UserContext);

  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const [isSubmitting, setIsSubmitting] = useState();
  const handleSubmitConnexionButton = () => {
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
    }, 1000);
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("http://localhost:3310/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => {
        console.info(res);
        if (!res.ok) {
          throw new Error("Identifiants incorrects");
        }
        return res.json();
      })
      .then((res) => {
        updateToken(res);
        setShow(!show);
      })
      .catch((err) => console.info("err :>>", err));
  };
  return (
    <div className="flex flex-col justify-center items-center">
      <form className="font-serif text-xl" onSubmit={handleSubmit}>
        <div className=" flex flex-col items-center mb-4">
          <h1 className="text-xl font-nationalparkbold mb-7 bg-black text-white p-4 max-w-md w-full text-center shadow-lg rounded-xl">
            CONNEXION
          </h1>
          <label htmlFor="email" className="font-victormono">
            Courriel
          </label>
          <input
            className="border border-black h-10 focus:outline-none rounded-md focus:border-2 shadow-md p-2"
            type="email"
            id="email"
            name="email"
            value={data.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className=" flex flex-col items-center mb-4">
          <label htmlFor="password" className="font-victormono">
            Mot de passe
          </label>
          <input
            className="border border-black h-10 focus:outline-none rounded-md focus:border-2 shadow-md p-2"
            type="password"
            id="password"
            name="password"
            value={data.password}
            onChange={handleChange}
            required
          />
        </div>
        <div className="flex justify-center">
          <button
            type="submit"
            onClick={handleSubmitConnexionButton}
            className="bg-white text-black border border-black py-2 px-4 mt-2 rounded transition duration-300 hover:bg-black hover:text-white shadow-md font-nationalparkbold"
          >
            {isSubmitting ? "Connexion..." : "Se connecter"}
          </button>
        </div>
      </form>
      <div className="flex flex-col gap-1">
        <p className="text-center mt-4 font-nunito">Pas encore inscrit ?</p>
        <Link
          to="/signup"
          className="text-center font-nunito font-bold hover:underline  cursor-pointer flex justify-center text-xl"
        >
          Créez votre compte ici
        </Link>
        <button
          label="croix de fermeture"
          type="button"
          onClick={onClick}
          className="flex justify-center mt-4 md:transition-transform md:hover:scale-110 md:cursor-pointer"
        >
          <ImCross />
        </button>
      </div>
    </div>
  );
}

LoginForm.propTypes = {
  show: PropTypes.bool.isRequired,
  setShow: PropTypes.func.isRequired,
  onClick: PropTypes.func.isRequired,
};
