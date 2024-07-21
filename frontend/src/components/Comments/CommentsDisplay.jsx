/* eslint-disable react/prop-types */
import { useContext } from "react";
import { UserContext } from "../../context/userContext";
import DeleteButton from "./DeleteButton";
import LikeButton from "../Buttons/LikeButton";
import LogoutButtonComments from "../Logout-Button/LogoutButtonComments";

export default function CommentsDisplay({
  comments,
  onDeleteComment,
  onRefreshLikeCounter,
}) {
  const { user } = useContext(UserContext);
  return (
    <div>
      {comments.every(
        (comment) =>
          comment.commentContent === null &&
          comment.commentId === null &&
          comment.commentDate === null &&
          comment.pseudoUser === null
      ) ? (
        <p className="font-nunito font-light text-lg mt-4">
          Aucun commentaire pour le moment
        </p>
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
              <div key={commentId} className="my-2 py-1">
                <div className="flex flex-col-3 gap-2 font-nationalparkregular">
                  <p className="font-victormono">{pseudoUser}</p>
                  <p>le {commentDate}</p>
                  <LikeButton
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
                <hr className="border-black" />
                <p className="whitespace-pre-wrap my-1 font-sans text-lg">
                  {commentContent}
                </p>
              </div>
            )
          )}
          {user.message === "isLogged" && (
            <div className="flex flex-col-2 gap-2 mt-4">
              <p className="font-nunito font-light text-lg">
                Connecté en tant que <i>{user.user.pseudo}</i>{" "}
              </p>
              <LogoutButtonComments />
            </div>
          )}
        </div>
      )}
    </div>
  );
}
