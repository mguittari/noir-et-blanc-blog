/* eslint-disable camelcase */
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { FaPenAlt } from "react-icons/fa";

export default function Article() {
  const params = useParams();
  const [article, setArticle] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:3310/api/article/${params.id}`)
      .then((res) => res.json())
      .then((data) => setArticle(data));
  }, []);

  return (
    <div>
      {article.map(({ id, title, published_at, img_url, content }) => (
        <div className=" m-14 flex flex-col md:my-10 md:mx-40">
          <h1 className="font-bold text-2xl">{title}</h1>
          <p className="">
            Description Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat.{" "}
          </p>
          <div className="flex flex-row gap-3 mb-6">
            <p className="italic">Publié le {published_at} </p>
            <div className="flex flex-row items-center gap-1">
              <FaPenAlt className="w-4 h-4" />
              <p className="font-medium">Matt Guittari</p>
            </div>
          </div>
          <img
            className=""
            src={`http://localhost:3310/${img_url}`}
            alt={`Illustration of article ${id}`}
          />
          <p className="mb-6">Petite légende à propos de l'image</p>
          <div className="text-justify">
            <p className="mb-4">
              {content} : Lorem ipsum dolor sit amet, consectetur adipiscing
              elit. Aliquam libero nisl, maximus nec urna nec, lacinia congue
              ante. Cras sit amet ullamcorper magna. Fusce fringilla sapien ac
              lectus sodales molestie. Integer orci purus, euismod eget sem ut,
              tincidunt vestibulum felis. Aliquam viverra placerat magna, non
              scelerisque nunc semper id. Pellentesque ultrices eros nec dictum
              vehicula. Integer non aliquam lorem, sit amet elementum mauris.
              Duis cursus tincidunt vestibulum. Curabitur vel sodales eros.
              Morbi pulvinar sed ligula quis porttitor. Vivamus a tellus at
              nulla aliquet interdum a efficitur ante. Morbi commodo massa vel
              nulla egestas blandit eget ut tellus. Nunc in finibus ipsum, at
              dictum leo. Nunc lacinia nisl eget justo sollicitudin ullamcorper.
            </p>{" "}
            <p className="mb-4">
              Nam pharetra placerat felis, in semper lectus vestibulum a. Fusce
              iaculis accumsan quam, non tincidunt nulla tincidunt dictum. Nunc
              rhoncus risus metus, non condimentum dui ultrices quis. Etiam
              porttitor dapibus consequat. Fusce laoreet ante vitae laoreet
              consequat. Proin fringilla pellentesque dui, et egestas risus
              tincidunt vitae. Praesent a convallis nisl, non condimentum mi.
              Vivamus semper facilisis mauris, et molestie nisi ornare
              efficitur. Cras tincidunt at nisl eget aliquam. Mauris ut nibh
              consequat, volutpat nibh scelerisque, congue lorem. Integer
              fringilla, tellus ut pretium interdum, nisl felis faucibus massa,
              vel interdum lectus mauris eu ligula. Praesent quis mollis augue,
              semper convallis justo.
            </p>
            <p className="">
              Maecenas sodales rhoncus nisl. Etiam quis semper tellus, egestas
              eleifend magna. Ut ac vestibulum nibh. Donec semper justo sit amet
              volutpat consectetur. Duis scelerisque maximus accumsan. Vivamus
              lacinia felis quis arcu blandit tincidunt. Etiam condimentum
              eleifend neque efficitur elementum. Orci varius natoque penatibus
              et magnis dis parturient montes, nascetur ridiculus mus. Donec
              commodo, sem eget accumsan aliquet, massa mi vulputate quam, sed
              rhoncus purus libero quis sapien. Aliquam scelerisque, ligula et
              facilisis fermentum, mauris odio venenatis nunc, et malesuada
              tortor urna vel massa. Quisque consequat lorem quis est accumsan,
              quis euismod lorem consequat. Sed sagittis justo hendrerit nunc
              feugiat fermentum. Curabitur ultricies, odio ac rutrum vestibulum,
              ex urna posuere lorem, a lacinia risus turpis at odio. Maecenas
              interdum, nibh et facilisis finibus, sapien justo volutpat odio,
              non tristique arcu nibh id lectus. Aliquam eleifend ipsum sed
              mollis fermentum. Ut sollicitudin consectetur neque. Praesent ut
              rhoncus libero. Phasellus cursus sapien ac magna tempor viverra.
              Suspendisse nec nibh nibh. Vivamus tristique mauris nec ante
              ultricies scelerisque. Suspendisse bibendum justo sit amet gravida
              consectetur. Donec ullamcorper malesuada scelerisque. Nunc in diam
              massa.
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
