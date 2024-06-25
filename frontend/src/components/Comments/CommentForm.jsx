import { useState, useContext } from "react";
import { UserContext } from "../../context/userContext";

// eslint-disable-next-line react/prop-types
export default function CommentsForm({ idArticle }) {
  const [data, setData] = useState({
    title: "",
    comment: "",
  });

  console.info(idArticle);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const { user, token } = useContext(UserContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:3310/api/comment", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        title: data.title,
        content: data.comment,
        id_user: user.user.id_user,
        id_article: idArticle,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        console.info("res", res);
        setData({
          title: "",
          comment: "",
        });
      })
      // eslint-disable-next-line no-unused-vars
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          Ecrivez un commentaire
          <input
            name="title"
            value={data.title}
            onChange={handleChange}
            placeholder="Titre"
            className="border border-black h-10 focus:outline-none shadow-md"
            required
          />
          <textarea
            name="comment"
            value={data.comment}
            onChange={handleChange}
            placeholder="Exprimez-vous..."
            className="border border-black w-full focus:outline-none"
            required
          />
        </label>
      </div>
      <div>
        <button
          type="submit"
          className="bg-black text-white border border-black py-2 px-4 rounded transition duration-300 hover:bg-white hover:text-black shadow-md"
        >
          Publier
        </button>
      </div>
    </form>
  );
}
