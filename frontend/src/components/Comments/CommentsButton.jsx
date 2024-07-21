import { useState } from "react";
import CommentsArea from "./CommentsArea";

// eslint-disable-next-line react/prop-types
export default function Comments({ idArticle }) {
  const [showCommentsArea, setShowCommentsArea] = useState(false);

  const handleClick = () => {
    setShowCommentsArea(!showCommentsArea);
  };

  return (
    <div className="">
      <button
        type="button"
        onClick={handleClick}
        className={
          !showCommentsArea
            ? `font-arialnarrow font-bold text-2xl border-4 border-black rounded-xl px-2 py-3 mt-4`
            : `font-arialnarrow font-bold text-2xl border-4 border-black rounded-xl px-2 py-3 mt-4 mb-4 bg-black text-white`
        }
      >
        COMMENTAIRES
      </button>
      {showCommentsArea && <CommentsArea idArticle={idArticle} />}
    </div>
  );
}
