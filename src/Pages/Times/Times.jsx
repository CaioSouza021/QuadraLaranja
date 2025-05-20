import S from "./Times.module.scss";
import BG from "../../assets/img/BGiverson.avif";

export default function Times() {
  return (
    <>
      <main className={S.mainTimes}>
        <section className={S.BoxHeroTimes}>
          <div className={S.HeroTimes}>
            <div className={S.OverlayTimes}>
              <h2>Conheça os times da NBA</h2>
              <p>uma parte de jogadores e times</p>
            </div>
          </div>
        </section>

        {/* inicio da conferencia Leste */}

        <section className={S.ConferenciaLeste}>
          <h2>
            Conferência <span>Leste</span>
          </h2>
          <section className={S.LocalLeste}>
            <div className={S.tituloLeste}>
              <h3>Atlântica</h3>
            </div>
            <div className={S.timesLeste}>
              <img src="" alt="" />
              <h4>Boston Celtics</h4>
              <p>Celtics</p>
            </div>
            <div className={S.timesLeste}>
              <img src="" alt="" />
              <h4>Brooklyn Nets</h4>
              <p>Nets</p>
            </div>
            <div className={S.timesLeste}>
              <img src="" alt="" />
              <h4>New York Knicks</h4>
              <p>Knicks</p>
            </div>
            <div className={S.timesLeste}>
              <img src="" alt="" />
              <h4>Philadelphia 76ers</h4>
              <p>76ers ou Sixers</p>
            </div>
            <div className={S.timesLeste}>
              <img src="" alt="" />
              <h4>Toronto Raptors</h4>
              <p>Raptors</p>
            </div>
          </section>
        </section>
      </main>
    </>
  );
}
