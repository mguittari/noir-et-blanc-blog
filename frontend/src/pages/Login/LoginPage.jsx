import { useContext, useState } from "react";
import { UserContext } from "../../context/userContext";

export default function LoginPage() {
  const { updateToken } = useContext(UserContext);
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  console.info(updateToken);

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("http://localhost:3310/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((res) => {
        updateToken(res);
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
            className="bg-white text-black border border-black py-2 px-4 mt-2 rounded transition duration-300 hover:bg-black hover:text-white shadow-md"
          >
            Se connecter
          </button>
        </div>
      </form>
    </div>
  );
}
