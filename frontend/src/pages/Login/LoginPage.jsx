import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../context/userContext";

export default function LoginPage() {
  const { updateToken } = useContext(UserContext);
  const navigate = useNavigate();
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
        navigate("/welcome");
      })
      .catch((err) => console.info("err :>>", err));
  };
  return (
    <div className="flex flex-col m-2 justify-center items-center my-14 mx-8">
      <h1 className="text-3xl font-serif font-semibold mb-14 bg-black text-white p-4 rounded-xl max-w-md w-full text-center shadow-lg">
        CONNEXION
      </h1>
      <form
        className="font-serif text-xl border-2 border-black p-8 rounded-xl max-w-md w-full shadow-lg"
        onSubmit={handleSubmit}
      >
        <div className=" flex flex-col items-center mb-4">
          <label htmlFor="email">Courriel</label>
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
          <label htmlFor="password">Mot de passe</label>
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
            className="bg-white text-black border border-black py-2 px-4 mt-2 rounded transition duration-300 hover:bg-black hover:text-white shadow-md"
          >
            {isSubmitting ? "Connexion..." : "Se connecter"}
          </button>
        </div>
      </form>
    </div>
  );
}
