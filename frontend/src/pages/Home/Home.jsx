/* eslint-disable camelcase */
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaLongArrowAltRight } from "react-icons/fa";

export default function Home() {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3310/api/home")
      .then((res) => res.json())
      .then((data) => setArticles(data));
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 m-4">
      {articles.map(({ id, title, published_at, img_url }) => (
        <div key={id}>
          <Link to="/">
            <img src={`http://localhost:3310/${img_url}`} alt={title} />
          </Link>
          <h1 className="font-bold mt-1">{title}</h1>
          <p className="italic">Publié le {published_at}</p>
          <p>
            Description Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat.
          </p>
          <Link to={`/article/${id}`}>
            <div className="flex flex-row items-center gap-1.5">
              <p className="font-semibold">Lire l'article</p>
              <FaLongArrowAltRight />
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
}
