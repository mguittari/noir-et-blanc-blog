/* eslint-disable react/prop-types */
import { useContext } from "react";
import { UserContext } from "../../context/userContext";

export default function DeleteButton({
  commentId,
  onDeleteComment,
  pseudoUser,
}) {
  const { user, token } = useContext(UserContext);

  const handleClick = (e) => {
    e.preventDefault();

    if (user.user.pseudo !== pseudoUser) {
      console.warn("You are not allowed to delete this comment.");
      return;
    }

    fetch(`http://localhost:3310/api/comment/${commentId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((res) => {
        console.info("res", res);
        onDeleteComment();
        localStorage.removeItem(`isLiked_${commentId}_${user.user?.id_user}`);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
  return (
    <button type="button" onClick={handleClick} className="text-red-700">
      Bouton Delete
    </button>
  );
}
