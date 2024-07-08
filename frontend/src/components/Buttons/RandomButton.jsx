import { useNavigate } from "react-router-dom";

export default function RandomButton() {
  //   function getRandomArbitrary(min, max) {
  //     return Math.floor(Math.random() * (max - min) + min);
  //   }
  const navigate = useNavigate();
  function getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }

  const handleClick = () => {
    const randomId = getRandomArbitrary(17, 21); // Génère un nombre aléatoire entre 17 et 21 inclus
    navigate(`/article/${randomId}`); // Redirige l'utilisateur vers l'article aléatoire
  };

  return (
    <button type="button" onClick={handleClick}>
      Au hasard
    </button>
  );
}

//   const navigate = useNavigate();

//   const [articleId, setArticleId] = useState([]);

//   const handleClick = (e) => {
//     e.preventDefault();

//     fetch(`http://localhost:3310/api/article-ids`)
//       .then((res) => {
//         res.json();
//         console.info(res);
//       })
//       .then((data) => {
//         setArticleId(data);
//         console.info(data);
//       })
//       .catch((error) => {
//         console.error("Error:", error);
//       });

//     if (articleId.length > 0) {
//       const randomIndex = Math.floor(Math.random() * articleId.length);
//       const randomId = articleId[randomIndex];
//       navigate(`/article/${randomId}`);
//       console.info(randomId);
//     }
//   };
