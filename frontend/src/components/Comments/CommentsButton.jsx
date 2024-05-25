import { useState } from "react";
import CommentsArea from "./CommentsArea";

export default function Comments({ idArticle }) {
  const [showCommentsArea, setShowCommentsArea] = useState(false);

  const handleClick = () => {
    setShowCommentsArea(!showCommentsArea);
  };

  return (
    <div>
      <button
        type="button"
        onClick={handleClick}
        className="border border-black rounded p-2 mt-4"
      >
        Commentaires
      </button>
      {showCommentsArea && <CommentsArea idArticle={idArticle} />}
    </div>
  );
}
