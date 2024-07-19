/* eslint-disable camelcase */
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaLongArrowAltRight, FaPenAlt } from "react-icons/fa";

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
          <Link to={`/article/${id}`}>
            <img
              src={`http://localhost:3310/${img_url}`}
              alt={title}
              className="rounded-xl border-2 border-black"
            />
          </Link>
          <h1 className="mt-1 text-[22px] font-nationalparkbold">{title}</h1>
          <p className="font-nationalparkregular italic text-[17px]">
            Publié le {published_at}
          </p>
          <div className="flex flex-row items-center gap-1">
            <FaPenAlt className="w-4 h-4" />
            <p className="font-nationalparksemibold text-[18px]">
              Mattias Guittari
            </p>
          </div>
          <p className="font-nationalparkregular">
            Description Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat.
          </p>
          <Link to={`/article/${id}`} className="inline-block items-center">
            <div className="flex flex-row items-center gap-1.5 md:hover:underline md:hover:decoration-4">
              <p className="font-nationalparksemibold text-[18px] ">
                Lire l'article
              </p>
              <FaLongArrowAltRight />
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
}
