import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../context/userContext";
import arrowReturn from "../../assets/return.svg";

export default function UpdatePasswordPage() {
  const navigate = useNavigate();
  const { token } = useContext(UserContext);
  const [data, setData] = useState({
    oldPassword: "",
    newPassword: "",
    confirmNewPassword: "",
  });

  const [message, setMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  console.info("message", message);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const handleClickReturn = () => {
    navigate("/welcome");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (data.newPassword !== data.confirmNewPassword) {
      console.error("Les nouveaux mots de passe ne correspondent pas");
      return;
    }

    fetch(`http://localhost:3310/api/users/update-password`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(data),
    })
      .then((res) => {
        console.info(res);
        if (!res.ok) {
          throw new Error("Ancien mot de passe incorrect");
        }
        setMessage("");
        setSuccessMessage("Mise à jour réussie !");
        return res.json();
      })
      // eslint-disable-next-line no-unused-vars
      .then((responseData) => {
        console.info("Réponse du serveur:", responseData);
      })
      .catch((error) => {
        setMessage("Vérifiez votre ancien mot de passe");
        console.error(error);
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
        {successMessage && (
          <div className="flex flex-col justify-center items-center gap-2">
            <div className="text-black text-center mt-4">{successMessage}</div>
            <button type="button" label="button" onClick={handleClickReturn}>
              <img
                src={arrowReturn}
                alt="arrow return"
                className="h-10 w-14 md:transition-transform md:hover:scale-110 md:cursor-pointer"
              />
            </button>
          </div>
        )}
        {message && (
          <p className="text-red-600 text-center mt-4 italic">{message}</p>
        )}
        {data.newPassword !== data.confirmNewPassword && (
          <p className="text-red-600 text-center mt-4 italic">
            Les nouveaux mots de passe ne correspondent pas
          </p>
        )}
      </form>
    </div>
  );
}
