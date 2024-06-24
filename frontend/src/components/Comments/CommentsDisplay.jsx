import { useEffect, useState } from "react";

export default function CommentsDisplay({ idArticle }) {
  const [comments, setComments] = useState([]);
  console.info("id article ---> ", idArticle);
  useEffect(() => {
    fetch(`http://localhost:3310/api/article/${idArticle}/comments`)
      .then((res) => res.json())
      .then((data) => {
        setComments(data);
        console.info(data);
      });
  }, []);

  return (
    <div>
      {comments.map(({ commentTitle, commentDate, commentContent }) => (
        <div>
          <p>{commentTitle}</p>
          <p>{commentDate}</p>
          <p>{commentContent}</p>
          <hr />
        </div>
      ))}
    </div>
  );
}
