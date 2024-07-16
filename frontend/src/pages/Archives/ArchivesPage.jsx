/* eslint-disable camelcase */
import { useEffect, useState } from "react";
import { FaPenAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function ArchivesPage() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:3310/api/articles`)
      .then((res) => res.json())
      .then((data) => {
        setArticles(data);
        console.info("data -->", data);
      });
  }, []);

  return (
    <>
      <div className="flex justify-center mx-12">
        <h1 className="text-3xl font-serif font-semibold mt-8 bg-black text-white p-4 rounded-xl max-w-md w-full text-center shadow-lg">
          ARCHIVES
        </h1>
      </div>
      <div className="flex flex-wrap items-center justify-center gap-4 mt-12 mb-8 mx-8">
        {articles.map(({ id, thumbnail, title, publication_date }) => (
          <Link to={`/article/${id}`} key={id}>
            <div className="border-2 border-black rounded-xl flex flex-col items-center justify-center md:transition-transform md:hover:scale-105 md:cursor-pointer">
              <img
                className="w-[300px] h-[200px] rounded-t-lg"
                src={`http://localhost:3310/${thumbnail}`}
                alt={`Article n°${id}`}
              />
              <div className="mt-2 text-center">
                <p>{title}</p>
                <p>{publication_date}</p>
              </div>
              <div className="flex flex-row items-center mb-2 gap-1">
                <FaPenAlt className="w-4 h-4" />
                <p className="font-medium">Matt Guittari</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}
