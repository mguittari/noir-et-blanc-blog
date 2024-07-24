import { useContext, useEffect, useState } from "react";

import { Link } from "react-router-dom";
import { UserContext } from "../../context/userContext";
import LogoutButton from "../../components/Logout-Button/LogoutButton";

export default function WelcomePage() {
  const { token, user } = useContext(UserContext);

  const [pseudo, setPseudo] = useState("");

  useEffect(() => {
    fetch(`http://localhost:3310/api/me`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    }).then((res) => {
      console.info(res);
      setPseudo(user?.user?.pseudo);
    });
  });

  return (
    <div className="flex flex-col items-start m-8 gap-4">
      <div className="border-2 border-black font-nunito text-md md:text-xl mx-auto max-w-md w-full rounded-xl p-8 shadow-lg">
        <h1 className="mb-2">Hello {pseudo} !</h1>
        <p className="mb-2">Bienvenue sur ta page profil.</p>
        <p className="mb-2">
          Ici, tu peux consulter et modifier tes informations.
        </p>
        <p>
          Tu peux aussi consulter l'historique de tes commentaires postés sur le
          blog et te déconnecter.
        </p>
      </div>
      <div className="border-2 border-black mx-auto max-w-md w-full rounded-xl p-8 shadow-lg text-justify font-nationalparkbold">
        <div className="flex flex-col gap-4 text-center">
          <button
            className="bg-black text-white p-4 rounded-xl transition duration-300 hover:bg-white hover:text-black hover:drop-shadow-[0_7px_1.5px_rgba(0,0,0,0.25)]"
            type="button"
            disabled
          >
            Mes commentaires
          </button>
          <Link
            to="/update"
            className="bg-black text-white p-4 rounded-xl transition
            duration-300 hover:bg-white hover:text-black
            hover:drop-shadow-[0_7px_1.5px_rgba(0,0,0,0.25)]"
            type="button"
          >
            Mes infos
          </Link>
          <LogoutButton />
        </div>
      </div>
    </div>
  );
}
