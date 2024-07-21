import { useState, useContext } from "react";
import { UserContext } from "../../context/userContext";
import CommentsAreaLoginButton from "../Buttons/CommentsAreaLoginButton";
// test pour push

// eslint-disable-next-line react/prop-types
export default function CommentsForm({ idArticle, onNewComment }) {
  const [data, setData] = useState({
    comment: "",
  });

  const [spaceError, setSpaceError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const { user, token } = useContext(UserContext);

  const trimmedComment = data.comment.trim();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (trimmedComment === "") {
      setSpaceError(
        "Le commentaire ne peut pas être vide ou contenir seulement des espaces."
      );
      return;
    }

    fetch("http://localhost:3310/api/comment", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        content: trimmedComment,
        id_user: user.user.id_user,
        id_article: idArticle,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        console.info("res", res);
        setData({
          comment: "",
        });
        onNewComment();
        if (spaceError) {
          setSpaceError("");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <div>
      {user.message !== "isLogged" ||
      !token ||
      token.message === "vous avez été déconnecté" ? (
        <div>
          <p className="font-nunito font-light italic text-lg">
            Vous devez être connecté pour poster ou liker un commentaire
          </p>
          <CommentsAreaLoginButton />
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <div>
            <label>
              <p className="font-nunito font-light text-lg mb-2">
                Écrivez un commentaire
              </p>
              <textarea
                name="comment"
                value={data.comment}
                onChange={handleChange}
                placeholder="Exprimez-vous... (500 caractères max)"
                className="border border-black w-full focus:outline-none"
                minLength={3}
                maxLength={500}
                required
              />
            </label>
          </div>
          <div>
            {spaceError && <p className="text-red-600">{spaceError}</p>}
            <button
              type="submit"
              className="bg-black text-white border border-black font-nationalparkbold py-2 px-4 rounded transition duration-300 hover:bg-white hover:text-black shadow-md"
            >
              Publier
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
