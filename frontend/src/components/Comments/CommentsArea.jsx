/* eslint-disable array-callback-return */
import { useEffect, useState, useContext } from "react";
import CommentForm from "./CommentForm";
import CommentsDisplay from "./CommentsDisplay";
import { UserContext } from "../../context/userContext";

// eslint-disable-next-line react/prop-types
export default function CommentsArea({ idArticle }) {
  const [comments, setComments] = useState([]);
  const { token } = useContext(UserContext);

  useEffect(() => {
    // Vérifiez si l'utilisateur a liké ce commentaire lors du chargement du composant
    fetch(`http://localhost:3310/api/comment/isliked`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.info("data", data);
        data.map((a) => console.info("id_user", a.id_user));
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, [comments.commentId, token]);

  const fetchComments = () => {
    fetch(`http://localhost:3310/api/article/${idArticle}/comments`)
      .then((res) => res.json())
      .then((data) => {
        setComments(data);
      });
  };

  useEffect(() => {
    fetchComments();
  }, [idArticle]);

  const handleNewComment = () => {
    fetchComments();
  };

  const handleDeleteComment = () => {
    fetchComments();
  };

  const refreshLikeCounter = () => {
    fetchComments();
  };

  return (
    <>
      <CommentsDisplay
        comments={comments}
        onDeleteComment={handleDeleteComment}
        onRefreshLikeCounter={refreshLikeCounter}
      />
      <CommentForm
        className="flex flex-col"
        idArticle={idArticle}
        onNewComment={handleNewComment}
      />
    </>
  );
}
