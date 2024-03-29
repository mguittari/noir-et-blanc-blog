import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="container font-serif">
      <div className="flex flex-row justify-center">
        <h1 className="text-[20px] -mb-1 ml-2">NOIR ET BLANC</h1>
        <ul className="text-[14px] mb-2">
          <h2 className="text-[18px]">Infos</h2>
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
        <ul className="text-[14px] mb-2">
          <h2 className="text-[18px]">Contact</h2>
          <li>Matt Guittari</li>
          <li>mattguittari [at] blackandwhite [dot] com </li>
          <div className="flex flex-row">
            <li>Icone 1</li>
            <li>Icone 2</li>
            <li>Icone 3</li>
          </div>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
