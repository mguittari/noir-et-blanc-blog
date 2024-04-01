import { Link } from "react-router-dom";
import inst from "../../assets/instagram.png";
import linkd from "../../assets/linkedin.png";
import x from "../../assets/twitter.png";
import youtb from "../../assets/youtube.png";
import fb from "../../assets/facebook.png";
import cube from "../../assets/cube.png";

function Footer() {
  return (
    <footer className="w-full font-serif border-t border-black pt-5">
      <ul className="grid grid-cols-2 gap-2 md:grid-cols-4 text-center">
        <li className="mb-2 p-[5px] flex justify-center items-start">
          <img className="w-[100px] h-[100px]" src={cube} alt="logo cube" />
        </li>
        <ul className="text-[18px] mb-2 p-[5px]">
          <h2 className="text-[22px]">Infos</h2>
          <li>
            <Link to="/">À propos</Link>
          </li>
          <li>
            <Link to="/">Faire un don</Link>
          </li>
          <li>
            <Link to="/">Politique de confidentialité</Link>
          </li>
        </ul>
        <ul className="text-[18px] mb-2 p-[5px]">
          <h2 className="text-[22px]">Contact</h2>
          <li>Matt Guittari</li>
          <li>mattguittari [at] blackandwhite [dot] com </li>
          <div className="">
            <ul className="inline-flex gap-2 mt-1">
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
                <img src={linkd} alt="logo linkedin" />
              </li>
              <li className="w-6 h-6">
                <img src={x} alt="logo x" />
              </li>
              <li className="w-6 h-6">
                <img src={youtb} alt="logo youtube" />
              </li>
              <li className="w-6 h-6">
                <img src={fb} alt="logo fb" />
              </li>
            </ul>
          </div>
        </ul>
        <ul className="text-[18px] mb-2 p-[5px]">
          <h2 className="text-[22px]">Rubriques</h2>
          <li>
            <Link to="/">Pandas</Link>
          </li>
          <li>
            <Link to="/">Échecs</Link>
          </li>
          <li>
            <Link to="/">Yin Yang</Link>
          </li>
          <li>
            <Link to="/">Pour ou contre ?</Link>
          </li>
        </ul>
      </ul>
    </footer>
  );
}

export default Footer;
