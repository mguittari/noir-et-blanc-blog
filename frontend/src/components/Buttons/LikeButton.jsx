import PropTypes from "prop-types";
import { useContext, useState } from "react";
import { AiOutlineLike, AiFillLike } from "react-icons/ai";
import { UserContext } from "../../context/userContext";

export default function LikeButton({ commentId, onRefreshLikeCounter }) {
  const { token, user } = useContext(UserContext);

  const [isLiked, setIsLiked] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();
    if (token.message === "vous avez été déconnecté") {
      console.warn("You are not allowed to like this comment.");
      return;
    }

    fetch(`http://localhost:3310/api/comment/${commentId}/like`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        id_comment: commentId,
        id_user: user.user?.id_user,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.info("data post", data);
        if (data.message === "Commentaire liké") {
          onRefreshLikeCounter();
          setIsLiked(true);
        } else {
          setIsLiked(false);
          onRefreshLikeCounter();
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <div className="flex flex-col-2">
      {isLiked ? (
        <button label="like button" type="button" onClick={handleClick}>
          <AiFillLike />
        </button>
      ) : (
        <button label="unlike button" type="button" onClick={handleClick}>
          <AiOutlineLike />
        </button>
      )}
    </div>
  );
}

LikeButton.propTypes = {
  commentId: PropTypes.number.isRequired,
  onRefreshLikeCounter: PropTypes.func.isRequired,
};
