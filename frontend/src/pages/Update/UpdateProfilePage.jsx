import { useContext, useState } from "react";
import { UserContext } from "../../context/userContext";

export default function UpdateProfilePage() {
  const { user } = useContext(UserContext);
  const [data, setData] = useState({
    pseudo: user.user.pseudo,
  });

  console.info(user.user.pseudo);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };
  return (
    <div className="flex flex-col m-2 justify-center items-center my-14 mx-8">
      <h1 className="text-3xl font-serif font-semibold mb-14 text-white bg-black p-4 rounded-xl max-w-md w-full text-center shadow-lg">
        MODIFICATION
      </h1>
      <form className="font-serif text-xl border-2 border-black p-8 rounded-xl max-w-md w-full shadow-lg">
        <div className=" flex flex-col items-center mb-4">
          <label htmlFor="email">pseudo</label>
          <input
            className="border border-black h-10 focus:outline-none rounded-md focus:border-2 shadow-md p-2"
            type="text"
            id="pseudo"
            name="pseudo"
            value={data.pseudo}
            onChange={handleChange}
            required
          />
        </div>
        <div className="flex justify-center">
          <button
            type="submit"
            className="bg-white text-black border border-black py-2 px-4 mt-2 rounded transition duration-300 hover:bg-black hover:text-white shadow-md"
          >
            Je modifie
          </button>
        </div>
      </form>
    </div>
  );
}
