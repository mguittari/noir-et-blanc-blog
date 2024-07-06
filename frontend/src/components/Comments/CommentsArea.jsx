import { useEffect, useState } from "react";
import CommentForm from "./CommentForm";
import CommentsDisplay from "./CommentsDisplay";

// eslint-disable-next-line react/prop-types
export default function CommentsArea({ idArticle }) {
  const [comments, setComments] = useState([]);

  const fetchComments = () => {
    fetch(`http://localhost:3310/api/article/${idArticle}/comments`)
      .then((res) => res.json())
      .then((data) => {
        setComments(data);
        console.info("data -->", data);
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
