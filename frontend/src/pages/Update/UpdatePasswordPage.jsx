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

  const [failMessage, setFailMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [samePasswordErrorMsg, setSamePasswordErrorMsg] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
    if (data.oldPassword === data.newPassword) {
      setSamePasswordErrorMsg("");
    }
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

    if (data.oldPassword === data.newPassword) {
      setSamePasswordErrorMsg(
        "Vous ne pouvez pas changer pour le même mot de passe"
      );
      console.error("Vous ne pouvez pas changer pour le même mot de passe");
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
        console.info("res -->", res);
        if (res.status === 401) {
          setIsSubmitting(false);
          throw new Error(setFailMessage("Vérifiez votre ancien mot de passe"));
        }
        return res.json();
      })
      .then((responseData) => {
        if (responseData.errors) {
          responseData.errors.map((error) => {
            console.info(responseData.erros);
            setFailMessage(error.message);
            setIsSubmitting(false);
            return null;
          });
        } else {
          setSuccessMessage("Mise à jour réussie !");
          setFailMessage("");
          setIsSubmitting(true);
          setSamePasswordErrorMsg("");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
  return (
    <div className="flex flex-col justify-center items-center m-8">
      <h1 className="text-3xl font-nationalparkbold mb-14 text-white bg-black p-4 rounded-xl max-w-md w-full text-center shadow-lg">
        MODIFICATION DU MOT DE PASSE
      </h1>

      <form
        className="font-serif text-xl border-2 border-black p-8 rounded-xl max-w-md w-full shadow-lg"
        onSubmit={handleSubmit}
      >
        <div className=" flex flex-col items-center mb-6">
          <label htmlFor="oldPassword" className="font-victormono">
            Ancien mot de passe
          </label>
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
          <label htmlFor="newPassword" className="font-victormono">
            Nouveau mot de passe
          </label>
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
          <label htmlFor="confirmNewPassword" className="font-victormono">
            Confirmation
          </label>
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
            className={
              isSubmitting
                ? "bg-white text-black border border-black py-2 px-4 rounded shadow-md text-[16px] font-nationalparkbold"
                : `bg-black text-white border border-black py-2 px-4 rounded transition duration-300 hover:bg-white hover:text-black shadow-md text-[16px] font-nationalparkbold`
            }
            disabled={isSubmitting}
          >
            Valider
          </button>
        </div>
        {successMessage && (
          <div className="flex flex-col justify-center items-center gap-2">
            <div className="text-black text-center mt-4 font-victormono">
              {successMessage}
            </div>
            <button type="button" label="button" onClick={handleClickReturn}>
              <img
                src={arrowReturn}
                alt="arrow return"
                className="h-10 w-14 md:transition-transform md:hover:scale-110 md:cursor-pointer"
              />
            </button>
          </div>
        )}
        {failMessage && (
          <p className="text-black text-center mb-2 border-2 border-black text-sm p-2 rounded-md mt-4 font-victormono">
            {failMessage}
          </p>
        )}
        {data.newPassword !== data.confirmNewPassword && (
          <p className="text-black text-center mt-4 border-2 border-black text-sm p-2 rounded-md font-victormono">
            Les nouveaux mots de passe ne correspondent pas
          </p>
        )}
        {samePasswordErrorMsg && (
          <p className="text-black text-center mt-4 border-2 border-black text-sm p-2 rounded-md font-victormono">
            {samePasswordErrorMsg}
          </p>
        )}
      </form>
    </div>
  );
}
