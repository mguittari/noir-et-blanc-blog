export default function InscriptionPage() {
  return (
    <div className="flex flex-col m-2 justify-center items-center my-8 mx-12">
      <form
        className="border-2 border-black p-8 rounded-xl max-w-md w-full"
        onSubmit={" "}
      >
        <div className=" flex flex-col items-center mb-4">
          <label htmlFor="pseudo">Pseudo</label>
          <input
            className="border border-black h-10"
            type="text"
            id="pseudo"
            name="pseudo"
            value={" "}
            onChange={" "}
            placeholder="pseudo"
            required
          />
        </div>
        <div className=" flex flex-col items-center mb-4">
          <label htmlFor="email">Courriel</label>
          <input
            className="border border-black h-10"
            type="email"
            id="email"
            name="email"
            value={" "}
            onChange={" "}
            required
          />
        </div>
        <div className=" flex flex-col items-center mb-4">
          <label htmlFor="password">Mot de passe</label>
          <input
            className="border border-black h-10"
            type="password"
            id="password"
            name="password"
            value={" "}
            onChange={" "}
            required
          />
        </div>
        <div className="flex justify-center">
          <button
            type="button"
            className="bg-white text-black border border-black py-2 px-4 rounded transition duration-300 hover:bg-black hover:text-white"
          >
            S'inscrire
          </button>
        </div>
      </form>
    </div>
  );
}
