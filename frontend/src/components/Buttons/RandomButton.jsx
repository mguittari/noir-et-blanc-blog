import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function RandomButton() {
  const navigate = useNavigate();
  const [articleIds, setArticleIds] = useState([]);

  const index = Math.floor(Math.random() * articleIds.length);

  useEffect(() => {
    fetch(`http://localhost:3310/api/articles-ids`)
      .then((res) => res.json())
      .then((data) => {
        setArticleIds(data);
      });
  }, []);

  const handleClick = () => {
    const random = articleIds[index];
    navigate(`/article/${random.id}`);
  };

  return (
    <button
      className="hover:underline hover:decoration-4"
      type="button"
      onClick={handleClick}
    >
      Au hasard
    </button>
  );
}
