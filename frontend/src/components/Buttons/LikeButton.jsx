import PropTypes from "prop-types";
import { useContext, useEffect, useState } from "react";
import { AiOutlineLike, AiFillLike } from "react-icons/ai";
import { UserContext } from "../../context/userContext";

export default function LikeButton({ commentId, onRefreshLikeCounter }) {
  const { token, user } = useContext(UserContext);
  const localStorageKey = `isLiked_${commentId}_${user.user?.id_user}`;

  const [isLiked, setIsLiked] = useState(false);

  useEffect(() => {
    const storedLikeStatus = localStorage.getItem(localStorageKey);
    if (storedLikeStatus) {
      setIsLiked(JSON.parse(storedLikeStatus));
    }
  }, [localStorageKey]);

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
        id_user: user.user?.id,
      }),
    })
      .then(() => {
        onRefreshLikeCounter();
        const newIsLiked = !isLiked;
        setIsLiked(newIsLiked);
        localStorage.setItem(localStorageKey, JSON.stringify(newIsLiked));
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <div className="flex flex-col-2">
      {isLiked ? (
        <button label="unlike button" type="button" onClick={handleClick}>
          <AiFillLike />
        </button>
      ) : (
        <button label="like button" type="button" onClick={handleClick}>
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