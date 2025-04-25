import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import S from "./Header.module.scss";
import Logo from "../../assets/img/Logo.png";
// animação para a header
// const headerRef = useRef(null);
// useEffect(() => {
// };

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };
    // ativa a animação
    window.addEventListener("scroll", handleScroll);

    // desativa a animação
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header id="header" className={scrolled ? S.rolar : ""}>
      <section>
        <Link to="/">
          {" "}
          <img className={S.logo} src={Logo} alt="Logo-Basquete" />
        </Link>

        <nav className={S.navHeader}>
          <Link to="/">Home</Link>
          <Link to="/Times">NBA</Link>
          <Link to="/Quadras">Quadras</Link>
          <Link to="/Sobre">Sobre Nós</Link>
        </nav>
      </section>
    </header>
  );
}
