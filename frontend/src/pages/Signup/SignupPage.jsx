import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function InscriptionPage() {
  const navigate = useNavigate();

  const [errorMessagePseudo, setErrorMessagePseudo] = useState("");
  const [errorMessageEmail, setErrorMessageEmail] = useState("");

  console.info("error?", errorMessagePseudo);

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
    setErrorMessagePseudo("");
    setErrorMessageEmail("");

    fetch("http://localhost:3310/api/user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => {
        if (!res.ok) {
          return res.json().then((data) => {
            console.info(data);
            if (res.status === 409 && data.errors) {
              data.errors.map((error) => {
                if (error.includes("pseudo")) {
                  setErrorMessagePseudo(error);
                }
                if (error.includes("courriel")) {
                  setErrorMessageEmail(error);
                }
                return null;
              });
            } else {
              throw new Error(data.message || "Erreur inattendue");
            }
          });
        }
        return navigate("/login");
      })
      .catch((error) => {
        console.error("Erreur:", error.message);
      });
  };

  return (
    <div className="flex flex-col m-2 justify-center items-center my-14 mx-8">
      <h1 className="text-3xl font-serif font-semibold mb-14 bg-black text-white p-4 rounded-xl max-w-md w-full text-center shadow-lg">
        INSCRIPTION
      </h1>
      <form
        className="font-serif text-xl border-2 border-black p-8 rounded-xl max-w-md w-full shadow-lg"
        onSubmit={handleSubmit}
      >
        <div className=" flex flex-col items-center mb-4">
          <label htmlFor="pseudo">Pseudo</label>
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
        {errorMessagePseudo && (
          <div className="text-red-500 text-center mb-2">
            {errorMessagePseudo}
          </div>
        )}
        <div className=" flex flex-col items-center mb-4">
          <label htmlFor="email">Courriel</label>
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
        {errorMessageEmail && (
          <div className="text-red-500 text-center mb-2">
            {errorMessageEmail}
          </div>
        )}
        <div className=" flex flex-col items-center mb-4">
          <label htmlFor="password">Mot de passe</label>
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
        <div className="flex justify-center">
          <button
            type="submit"
            className="bg-white text-black border border-black py-2 px-4 mt-2 rounded transition duration-300 hover:bg-black hover:text-white shadow-md"
          >
            S'inscrire
          </button>
        </div>
      </form>
    </div>
  );
}
