import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import arrowReturn from "../../assets/return.svg";
import { UserContext } from "../../context/userContext";

export default function UpdateProfilePage() {
  const navigate = useNavigate();
  const [successMessage, setSuccessMessage] = useState("");
  const [failMessage, setFailMessage] = useState("");
  const { user, updateUser, token } = useContext(UserContext);

  const [data, setData] = useState({
    pseudo: user.user?.pseudo,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const [isDisabled, setIsDisabled] = useState(false);

  useEffect(() => {
    if (data.pseudo !== user.user?.pseudo) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  }, [data.pseudo, user.user?.pseudo]);

  console.info("pseudo", data);
  const handleClickReturn = () => {
    navigate("/welcome");
  };

  const handleSubmitInfoUser = (e) => {
    e.preventDefault();

    fetch(`http://localhost:3310/api/user/${user.user?.id_user}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(data),
    })
      .then((res) => {
        console.info(res);
        return res.json();
      })
      .then((d) => {
        if (d.errors) {
          d.errors.map((error) => {
            setFailMessage(error.message);
            return null;
          });
        } else {
          setSuccessMessage("Mise à jour réussie !");
          setFailMessage("");
          setIsSubmitting(true);
          updateUser({ ...user.user, pseudo: data.pseudo });
        }
      })
      .catch((err) => {
        console.error("Error:", err);
      });
  };

  return (
    <div className="flex flex-col justify-center items-center m-8">
      <h1 className="text-3xl font-nationalparkbold mb-14 text-white bg-black p-4 rounded-xl max-w-md w-full text-center shadow-lg">
        MODIFICATION DU PSEUDO
      </h1>

      <form
        className="font-serif text-xl border-2 border-black p-8 rounded-xl max-w-md w-full shadow-lg"
        onSubmit={handleSubmitInfoUser}
      >
        <div className=" flex flex-col items-center mb-6">
          <label htmlFor="pseudo" className="font-victormono">
            Pseudo
          </label>
          <input
            className="border border-black h-10 focus:outline-none rounded-md focus:border-2 shadow-md p-2"
            type="text"
            id="pseudo"
            name="pseudo"
            value={data.pseudo}
            onChange={handleChange}
            minLength={4}
            maxLength={15}
            title="Votre pseudo doit contenir au moins 4 caractères et 15 maximum"
            required
          />
        </div>
        <div className="flex justify-center">
          <button
            type="submit"
            className={
              isSubmitting || isDisabled
                ? "bg-white text-black border border-black py-2 px-4 rounded shadow-md text-[16px] font-nationalparkbold"
                : `bg-black text-white border border-black py-2 px-4 rounded transition duration-300 hover:bg-white hover:text-black shadow-md text-[16px] font-nationalparkbold`
            }
            disabled={isSubmitting || isDisabled}
          >
            Mettre à jour mon pseudo
          </button>
        </div>
        <div className="flex flex-col justify-center items-center gap-2">
          {successMessage && (
            <>
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
            </>
          )}
          {failMessage && (
            <p className="text-black text-center mb-2 border-2 border-black text-sm p-2 rounded-md mt-4 font-victormono">
              {failMessage}
            </p>
          )}
        </div>
        <div className=" flex flex-col items-center mt-4">
          <Link
            to="/update-password"
            type="button"
            className="border border-black flex items-center text-center rounded py-2 px-4 bg-black text-white transition duration-300 hover:bg-white hover:text-black shadow-md text-[16px] font-nationalparkbold"
          >
            Mise à jour du mot de passe
          </Link>
        </div>
      </form>
    </div>
  );
}
