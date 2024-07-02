import { useState } from "react";

export default function LikeButton() {
  const [like, setLike] = useState(0);

  const handleClick = () => {
    setLike(like + 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="flex flex-col-2">
      <button type="button">👍</button>
    </div>
  );
}
