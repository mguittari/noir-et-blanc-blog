import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function InscriptionPage() {
  const navigate = useNavigate();

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
            navigate("/login");
          }
        });
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="flex flex-col justify-center items-center m-8">
      <h1 className="text-3xl font-nationalparkbold mb-14 bg-black text-white p-4 rounded-xl max-w-md w-full text-center shadow-lg">
        INSCRIPTION
      </h1>
      <form
        className="font-serif text-xl border-2 border-black p-8 rounded-xl max-w-md w-full shadow-lg"
        onSubmit={handleSubmit}
      >
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
          <div className="text-black text-center mb-2 border-2 border-black text-sm p-2 rounded-md">
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
          <div className="text-black text-center mb-2 border-2 border-black text-sm p-2 rounded-md">
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
          <div className="text-black text-center mb-2 border-2 border-black text-sm p-2 rounded-md">
            {errorMessages.password}
          </div>
        )}
        <div className="flex justify-center">
          <button
            type="submit"
            className="bg-white text-black border border-black py-2 px-4 mt-2 rounded transition duration-300 hover:bg-black hover:text-white shadow-md font-nationalparkbold"
          >
            S'inscrire
          </button>
        </div>
      </form>
    </div>
  );
}
