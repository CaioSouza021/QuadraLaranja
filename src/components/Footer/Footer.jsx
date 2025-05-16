import S from "./Footer.module.scss";
import "bootstrap-icons/font/bootstrap-icons.css";

export default function Footer() {
  return (
    <>
      <footer>
        <div className={S.BoxSocial}>
          <div className={S.BoxIcons}>
            <i class="bi bi-linkedin"></i>
          </div>
          <div className={S.BoxIcons}>
            <i class="bi bi-github"></i>
          </div>
          <div className={S.BoxIcons}>
            <i class="bi bi-instagram"></i>
          </div>
        </div>
        <div className={S.LinhaDivisoria}>
          <div className={S.ConteudoLinha}></div>
        </div>
        <div className={S.BoxDireitos}>
          <p>Quadra Laranja © Todos os direitos reservados</p>
        </div>
      </footer>
    </>
  );
}
