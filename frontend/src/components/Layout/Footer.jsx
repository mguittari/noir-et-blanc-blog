import { Link } from "react-router-dom";
import inst from "../../assets/instagram.png";
import linkd from "../../assets/linkedin.png";
import x from "../../assets/twitter.png";
import youtb from "../../assets/youtube.png";
import fb from "../../assets/facebook.png";
import cube from "../../assets/cube.png";
import GoToTopButton from "../Go-to-top-button/GoToTopButton";

function Footer() {
  return (
    <footer className="w-full font-serif border-t border-black pt-1 px-5">
      <ul className="grid grid-cols-2 gap-2 md:grid-cols-4 text-center relative">
        <li className="p-[5px] flex justify-center items-start">
          <img
            className="w-[155px] h-[155px] md:w-[185px] md:h-[185px]"
            src={cube}
            alt="logo cube"
          />
        </li>
        <ul className="font-nationalparkregular text-[18px] md:text-[22px] p-[5px]">
          <h2 className="font-nationalparkbold text-[22px] md:text-[35px]">
            Infos
          </h2>
          <li className="hover:underline">
            <Link to="/about">À propos</Link>
          </li>
          <li className="hover:underline">
            <Link
              to="https://paypal.com/fr/home"
              target="_blank"
              rel="noopener noreferrer"
            >
              Faire un don
            </Link>
          </li>
          <li className="hover:underline">
            <Link to="https://httpstat.us/404">
              Politique de confidentialité
            </Link>
          </li>
          <li className="hover:underline">
            <Link
              to="https://wildcodeschool.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Wild Code School
            </Link>
          </li>
        </ul>
        <ul className="font-nationalparkregular text-[18px] md:text-[22px] p-[5px]">
          <h2 className="font-nationalparkbold text-[22px] md:text-[35px]">
            Contact
          </h2>
          <li>Mattias Guittari</li>
          {/* <li>~</li> */}
          <li>mattiasguittari [at] gmail [dot] com </li>
          <div className="">
            <ul className="inline-flex gap-2 mt-2">
              <li className="w-6 h-6">
                <a
                  href="http://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={inst} alt="logo instagram" />
                </a>
              </li>
              <li className="w-6 h-6">
                <a
                  href="http://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={linkd} alt="logo linkedin" />
                </a>
              </li>
              <li className="w-6 h-6">
                <a
                  href="http://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={x} alt="logo x" />
                </a>
              </li>
              <li className="w-6 h-6">
                <a
                  href="http://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={youtb} alt="logo youtube" />
                </a>
              </li>
              <li className="w-6 h-6">
                <a
                  href="http://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={fb} alt="logo fb" />
                </a>
              </li>
            </ul>
          </div>
        </ul>
        <ul className="font-nationalparkregular text-[18px] md:text-[22px] p-[5px] relative">
          <h2 className="font-nationalparkbold text-[22px] md:text-[35px]">
            Articles
          </h2>
          <li className="hover:underline">
            <Link to="/article/17">Article 1</Link>
          </li>
          <li className="hover:underline">
            <Link to="/article/18">Article 2</Link>
          </li>
          <li className="hover:underline">
            <Link to="/article/19">Article 3</Link>
          </li>
          <li className="hover:underline">
            <Link to="/article/20">Article 4</Link>
          </li>
          {/* <li>
            <Link to="https://httpstat.us/404">Article 5</Link>
          </li> */}
        </ul>
      </ul>
      <GoToTopButton />
    </footer>
  );
}

export default Footer;
