import S from "./Home.module.scss";
import videoBG from "../../assets/videos/teste1.mp4";
import logoDenver from "../../assets/img/denverLogo.png";
import logoOkc from "../../assets/img/okcLogo.png";
import logoSpurs from "../../assets/img/spursLogo.png";
import Victor from "../../assets/img/victor.jpg";
import Shai from "../../assets/img/shai.jpg";
import Jokic from "../../assets/img/jokic.jpg";

export default function Home() {
  return (
    <>
      <div className={S.BoxVideo}>
        <video src={videoBG} loop muted playsInline autoPlay></video>
        <div className={S.mascara}></div>
      </div>

      <div className={S.Home}>
        <div>
          <section className={S.caixaPincipal}>
            <div>
              <h3>Tudo sobre o mundo do basquete</h3>
              <p>
                Curte basquete? Aqui é o lugar certo! A gente fala de NBA,
                mostra os times, jogadores que tão voando e curiosidades do
                jogo. Tudo isso num só lugar, feito pra quem respira basquete de
                verdade.
              </p>
              <a className={S.botaoLink} href="#">
                Sobre Nós
              </a>
            </div>
          </section>
        </div>

        <section className={S.boxAtletas}>
          <h2 className={S.titulo}>
            Atletas em <span>destaque</span>
          </h2>

          <div className={S.boxInfo}>
            {/*flip  */}

            <ul>
              <li>
                <div className={S.container}>
                  <div className={S.flip}>
                    <div className={S.frente}>
                      <img className={S.PlayerFlip} src={Jokic} alt="" />
                    </div>
                    <div className={S.tras}>
                      <div className={S.boxLogo}>
                        <img className={S.Logo} src={logoDenver} alt="" />
                      </div>
                      <p>jokic</p>
                    </div>
                  </div>
                </div>

                <div className={S.container}>
                  <div className={S.flip}>
                    <div className={S.frente}>
                      <img className={S.PlayerFlip} src={Shai} alt="" />
                    </div>
                    <div className={S.tras}>
                      <div className={S.boxLogo}>
                        <img className={S.Logo} src={logoOkc} alt="" />
                      </div>
                      <p>Shai</p>
                    </div>
                  </div>
                </div>

                <div className={S.container}>
                  <div className={S.flip}>
                    <div className={S.frente}>
                      <img className={S.PlayerFlip} src={Victor} alt="" />
                    </div>
                    <div className={S.tras}>
                      <div className={S.boxLogo}>
                        <img className={S.Logo} src={logoSpurs} alt="" />
                      </div>
                      <p>Victor</p>
                    </div>
                  </div>
                </div>
              </li>
            </ul>

            <div className={S.boxDescri}>
              <p>
                A seção <strong>Destaques da Temporada</strong> destaca os
                jogadores que mais vêm se sobressaindo na NBA 2024–2025. Com
                estatísticas impressionantes e atuações decisivas, atletas como
                Shai Gilgeous-Alexander, Nikola Jokić e Victor Wembanyama
                mostram por que estão entre os principais nomes da liga. O
                objetivo é valorizar esses talentos e manter os fãs por dentro
                dos grandes momentos da temporada.
              </p>
            </div>
            <div className={S.boxBtn}>
              <a className={S.botaoLink} href="#">
                Times
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
