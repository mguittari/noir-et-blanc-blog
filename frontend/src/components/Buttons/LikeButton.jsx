import PropTypes from "prop-types";
import { useContext } from "react";
import { UserContext } from "../../context/userContext";

export default function LikeButton({
  nbLike,
  commentId,
  onRefreshLikeCounter,
}) {
  console.info("nbLike?", nbLike);

  const { token, user } = useContext(UserContext);

  const handleClick = (e) => {
    e.preventDefault();
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
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <div className="flex flex-col-2">
      <button type="button" onClick={handleClick}>
        👍
      </button>
    </div>
  );
}

LikeButton.propTypes = {
  nbLike: PropTypes.number.isRequired,
  commentId: PropTypes.number.isRequired,
  onRefreshLikeCounter: PropTypes.func.isRequired,
};
