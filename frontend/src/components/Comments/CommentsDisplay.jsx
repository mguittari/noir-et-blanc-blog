/* eslint-disable react/prop-types */
export default function CommentsDisplay({ comments }) {
  return (
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
    </div>
  );
}
