/* eslint-disable react/prop-types */
import { useContext } from "react";
import { UserContext } from "../../context/userContext";
import LogoutButtonComments from "../Logout-Button/LogoutCommentsDisplay";
import DeleteButton from "./DeleteButton";
import LikeButton from "../Buttons/LikeButton";

export default function CommentsDisplay({
  comments,
  onDeleteComment,
  onRefreshLikeCounter,
}) {
  const { user } = useContext(UserContext);
  console.info("user-->", user);
  console.info("comments-->", comments);
  return (
    <div>
      {comments.every(
        (comment) =>
          comment.commentContent === null &&
          comment.commentId === null &&
          comment.commentDate === null &&
          comment.pseudoUser === null
      ) ? (
        <p>Aucun commentaire pour le moment</p>
      ) : (
        <div>
          {comments.map(
            ({
              commentId,
              commentDate,
              commentContent,
              pseudoUser,
              nbLike,
            }) => (
              <div key={commentId}>
                <div className="flex flex-col-3 gap-2">
                  <p className="font-bold">{pseudoUser}</p>
                  <p>{commentDate}</p>
                  <LikeButton
                    nbLike={nbLike}
                    commentId={commentId}
                    onRefreshLikeCounter={onRefreshLikeCounter}
                  />
                  <p>{nbLike}</p>
                  <DeleteButton
                    comments={comments}
                    commentId={commentId}
                    onDeleteComment={onDeleteComment}
                    pseudoUser={pseudoUser}
                  />
                </div>
                <p className="whitespace-pre-wrap">{commentContent}</p>
                <hr />
              </div>
            )
          )}
          {user.message === "isLogged" && (
            <div className="flex flex-col-2 gap-2">
              <p>Connecté en tant que {user.user.pseudo} </p>
              <LogoutButtonComments />
            </div>
          )}
        </div>
      )}
    </div>
  );
}
