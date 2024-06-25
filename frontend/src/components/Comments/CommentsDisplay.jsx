import { useEffect, useState } from "react";

// eslint-disable-next-line react/prop-types
export default function CommentsDisplay({ idArticle }) {
  const [comments, setComments] = useState([]);
  console.info("id article ---> ", idArticle);
  useEffect(() => {
    fetch(`http://localhost:3310/api/article/${idArticle}/comments`)
      .then((res) => res.json())
      .then((data) => {
        setComments(data);
        console.info("data -->", data);
      });
  }, []);

  return (
    <div>
      {comments.map(
        ({
          commentId,
          commentTitle,
          commentDate,
          commentContent,
          pseudoUser,
        }) => (
          <div key={commentId}>
            <p className="font-bold">{pseudoUser}</p>
            <p>{commentTitle}</p>
            <p>{commentDate}</p>
            <p>{commentContent}</p>
            <hr />
          </div>
        )
      )}
    </div>
  );
}
