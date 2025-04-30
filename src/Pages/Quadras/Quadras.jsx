import S from "./Quadras.module.scss";
import BG from "../../assets/img/Hero.jpg";

export default function Quadras() {
  return (
    <>
      <main>
        <div className={S.containerQuadra}>
          <section className={S.BoxQuadra}>
            <div className={S.HeroSection}>
              <div className={S.overlay}>
                <h2>
                  Os Palcos da <span>NBA</span>
                </h2>
                <p>Explore as arenas onde a história do basquete acontece</p>
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
