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
        className="border border-black text-lg rounded-xl px-2 py-3 mt-4 font-nunito font-black md:hover:bg-black md:hover:text-white "
      >
        Commentaires
      </button>
      {showCommentsArea && <CommentsArea idArticle={idArticle} />}
    </div>
  );
}
