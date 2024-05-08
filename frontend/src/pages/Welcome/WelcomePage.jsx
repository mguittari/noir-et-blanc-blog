import { useContext } from "react";
import { UserContext } from "../../context/userContext";

export default function WelcomePage() {
  const { user } = useContext(UserContext);
  return (
    <div className="flex flex-col items-start m-5 gap-4">
      <div className="border-2 border-black mx-auto max-w-md w-full rounded-xl p-8 shadow-lg text-justify">
        <h1 className="mb-1.5">Hello {user.user?.pseudo} !</h1>
        <p className="mb-1.5">Bienvenue sur ta page profil.</p>
        <p className="mb-1.5">
          Ici, tu peux consulter et modifier tes informations.
        </p>
        <p>
          Mais aussi consulter l'historique de tes commentaires postés sur le
          blog et te déconnecter.
        </p>
      </div>
      <div className="border-2 border-black mx-auto max-w-md w-full rounded-xl p-8 shadow-lg text-justify">
        <div className="flex flex-col gap-4">
          <button
            className="bg-black text-white p-4 rounded-xl transition duration-300 hover:bg-white hover:text-black hover:drop-shadow-[0_7px_1.5px_rgba(0,0,0,0.25)]"
            type="button"
          >
            Mes commentaires
          </button>
          <button
            className="bg-black text-white p-4 rounded-xl transition duration-300 hover:bg-white hover:text-black hover:drop-shadow-[0_7px_1.5px_rgba(0,0,0,0.25)]"
            type="button"
          >
            Mes infos
          </button>
          <button
            className="bg-black text-white p-4 rounded-xl transition duration-300 hover:bg-white hover:text-black hover:drop-shadow-[0_7px_1.5px_rgba(0,0,0,0.25)]"
            type="button"
          >
            Déconnexion
          </button>
        </div>
      </div>
    </div>
  );
}
