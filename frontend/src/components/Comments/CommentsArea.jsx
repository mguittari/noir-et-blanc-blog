import CommentForm from "./CommentForm";
import CommentsDisplay from "./CommentsDisplay";

export default function CommentsArea({ idArticle }) {
  return (
    <div>
      <CommentForm idArticle={idArticle} />
      <CommentsDisplay />
    </div>
  );
}
