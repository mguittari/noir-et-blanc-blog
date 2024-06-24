import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import arrowReturn from "../../assets/return.svg";
import { UserContext } from "../../context/userContext";

export default function UpdateProfilePage() {
  const navigate = useNavigate();
  const [message, setMessage] = useState(null);
  const { user, token } = useContext(UserContext);

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

  console.info(data);
  const handleClickReturn = () => {
    navigate("/welcome");
    window.location.reload();
  };

  const handleSubmitInfoUser = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    fetch(`http://localhost:3310/api/user/${user.user?.id_user}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((res) => {
        setMessage("Mise à jour réussie !");
        console.info("res", res);
      })
      .catch((err) => {
        console.error("Error:", err);
      });
  };

  return (
    <div className="flex flex-col m-2 justify-center items-center my-14 mx-8">
      <h1 className="text-3xl font-serif font-semibold mb-14 text-white bg-black p-4 rounded-xl max-w-md w-full text-center shadow-lg">
        MODIFICATIONS
      </h1>

      <form
        className="font-serif text-xl border-2 border-black p-8 rounded-xl max-w-md w-full shadow-lg"
        onSubmit={handleSubmitInfoUser}
      >
        <div className=" flex flex-col items-center mb-6">
          <label htmlFor="pseudo">Pseudo</label>
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
                ? "bg-white text-black border border-black py-2 px-4 rounded shadow-md text-[16px]"
                : `bg-black text-white border border-black py-2 px-4 rounded transition duration-300 hover:bg-white hover:text-black shadow-md text-[16px]`
            }
            disabled={isSubmitting || isDisabled}
          >
            Mettre à jour mon pseudo
          </button>
        </div>
        {message && (
          <div className="flex flex-col justify-center items-center gap-2">
            <div className="text-black text-center mt-4">{message}</div>
            <button type="button" label="button" onClick={handleClickReturn}>
              <img
                src={arrowReturn}
                alt="arrow return"
                className="h-10 w-14 md:transition-transform md:hover:scale-110 md:cursor-pointer"
              />
            </button>
          </div>
        )}
        <div className=" flex flex-col items-center mt-4">
          <Link
            to="/update-password"
            type="button"
            className="border border-black flex items-center text-center rounded py-2 px-4 bg-black text-white transition duration-300 hover:bg-white hover:text-black shadow-md text-[16px] "
          >
            Mise à jour du mot de passe
          </Link>
        </div>
      </form>
    </div>
  );
}
