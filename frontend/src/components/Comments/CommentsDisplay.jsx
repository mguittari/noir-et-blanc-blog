/* eslint-disable react/prop-types */
import { useContext } from "react";
import { UserContext } from "../../context/userContext";
import LogoutButtonComments from "../Logout-Button/LogoutCommentsDisplay";

export default function CommentsDisplay({ comments }) {
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
            ({ commentId, commentDate, commentContent, pseudoUser }) => (
              <div key={commentId}>
                <p className="font-bold">{pseudoUser}</p>
                <p>{commentDate}</p>
                <p>{commentContent}</p>
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
