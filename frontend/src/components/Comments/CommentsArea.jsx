import CommentForm from "./CommentForm";
import CommentsDisplay from "./CommentsDisplay";

// eslint-disable-next-line react/prop-types
export default function CommentsArea({ idArticle }) {
  return (
    <>
      <CommentsDisplay idArticle={idArticle} />
      <CommentForm className="flex flex-col" idArticle={idArticle} />
    </>
  );
}
