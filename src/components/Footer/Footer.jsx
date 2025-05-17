import S from "./Footer.module.scss";
import "bootstrap-icons/font/bootstrap-icons.css";

export default function Footer() {
  return (
    <>
      <footer>
        <div className={S.BoxInterface}>
          <section className={S.BoxIcons}>
            {/* LINKEDIN */}
            <a
              href="https://www.linkedin.com/in/caio-souza-2bb1592b7?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
              target="_blank"
            >
              <button>
                <i class="bi bi-linkedin"></i>
              </button>
            </a>

            {/* GITHUB */}
            <a href="https://github.com/CaioSouza021" target="_blank">
              <button>
                <i class="bi bi-github"></i>
              </button>
            </a>

            {/* INSTAGRAM */}
            <a
              href="https://www.instagram.com/eo_caiov/profilecard/?igsh=YTJzanI2bXFzdnNr"
              target="_blank"
            >
              <button>
                <i class="bi bi-instagram"></i>
              </button>
            </a>
          </section>
        </div>
        <div className={S.LinhaDivisoria}>
          <div className={S.ConteudoLinha}></div>
        </div>
        <section className={S.BoxDireitos}>
          <p>Quadra Laranja © Todos os direitos reservados</p>
        </section>
      </footer>
    </>
  );
}
