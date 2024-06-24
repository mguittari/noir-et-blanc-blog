import PropTypes from "prop-types";
import CommentForm from "./CommentForm";
import CommentsDisplay from "./CommentsDisplay";

export default function CommentsArea({ idArticle }) {
  return (
    <>
      <CommentsDisplay idArticle={idArticle} />
      <CommentForm className="flex flex-col" idArticle={idArticle} />
    </>
  );
}

CommentsArea.propTypes = {
  idArticle: PropTypes.number.isRequired,
};
