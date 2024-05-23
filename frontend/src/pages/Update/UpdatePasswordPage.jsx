import { useState, useContext } from "react";
import { UserContext } from "../../context/userContext";

export default function UpdatePasswordPage() {
  const { token } = useContext(UserContext);
  const [data, setData] = useState({
    oldPassword: "",
    newPassword: "",
    confirmNewPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (data.newPassword !== data.confirmNewPassword) {
      console.error("Les nouveaux mots de passe ne correspondent pas");
      return;
    }

    fetch(`http://localhost:3310/api/user/update-password`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      // eslint-disable-next-line no-unused-vars
      .then((responseData) => {
        console.info("Réponse du serveur:", responseData);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
  return (
    <div className="flex flex-col m-2 justify-center items-center my-14 mx-8">
      <h1 className="text-3xl font-serif font-semibold mb-14 text-white bg-black p-4 rounded-xl max-w-md w-full text-center shadow-lg">
        MODIFICATION DU MOT DE PASSE
      </h1>

      <form
        className="font-serif text-xl border-2 border-black p-8 rounded-xl max-w-md w-full shadow-lg"
        onSubmit={handleSubmit}
      >
        <div className=" flex flex-col items-center mb-6">
          <label htmlFor="oldPassword">Ancien mot de passe</label>
          <input
            className="border border-black h-10 focus:outline-none rounded-md focus:border-2 shadow-md p-2"
            type="text"
            id="oldPassword"
            name="oldPassword"
            value={data.oldPassword}
            onChange={handleChange}
            required
          />
        </div>
        <div className=" flex flex-col items-center mb-6">
          <label htmlFor="newPassword">Nouveau mot de passe</label>
          <input
            className="border border-black h-10 focus:outline-none rounded-md focus:border-2 shadow-md p-2"
            type="text"
            id="newPassword"
            name="newPassword"
            value={data.newPassword}
            onChange={handleChange}
            required
          />
        </div>
        <div className=" flex flex-col items-center mb-6">
          <label htmlFor="confirmNewPassword">Confirmation</label>
          <input
            className="border border-black h-10 focus:outline-none rounded-md focus:border-2 shadow-md p-2"
            type="text"
            id="confirmNewPassword"
            name="confirmNewPassword"
            value={data.confirmNewPassword}
            onChange={handleChange}
            required
          />
        </div>
        <div className="flex justify-center">
          <button
            type="submit"
            className="bg-black text-white border border-black py-2 px-4 rounded transition duration-300 hover:bg-white hover:text-black shadow-md text-[16px] mt-2"
          >
            Mettre à jour mon mot de passe
          </button>
        </div>
      </form>
      {data.newPassword !== data.confirmNewPassword && (
        <p className="text-black">
          Les nouveaux mots de passe ne correspondent pas
        </p>
      )}
    </div>
  );
}
