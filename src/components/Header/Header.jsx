import { Link } from "react-router-dom";
import Perfil from "../../assets/img/iconperfil.png";
import S from "./Header.module.scss";
import Logo from "../../assets/img/Logo.png";

export default function Header() {
  return (
    <header>
      <section>
        <a href="#">
          <img className={S.logo} src={Logo} alt="Logo-Basquete" />
        </a>

        <nav>
          <Link to="/">Home</Link>
          <Link to="/Times">NBA</Link>
          <Link to="/Quadras">Quadras</Link>
          <Link to="/Sobre">Sobre Nós</Link>
        </nav>
        <div>
          <Link to="/Login">
            <img src={Perfil} alt="Icon-de-login" />
          </Link>
        </div>
      </section>
    </header>
  );
}
