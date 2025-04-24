import S from "./Home.module.scss";
import videoBG from "../../assets/videos/VideoBG.mp4";
import logoDenver from "../../assets/img/denverLogo.png";
import logoOkc from "../../assets/img/okcLogo.png";
import logoSpurs from "../../assets/img/spursLogo.png";
import Victor from "../../assets/img/victor.jpg";
import Shai from "../../assets/img/shai.jpg";
import Jokic from "../../assets/img/jokic.jpg";

export default function Home() {
  return (
    <>
      {/* video de fundo */}
      <div className={S.BoxVideo}>
        <video src={videoBG} loop muted playsInline autoPlay></video>
        <div className={S.mascara}></div>
      </div>

      {/* todo conteudo na pagina Home */}
      <div className={S.Home}>
        {/* Hero */}
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

        {/* Atletas em destaques */}
        <section className={S.boxAtletas}>
          <h2 className={S.titulo}>
            Atletas em <span>destaque</span>
          </h2>

          <div className={S.boxInfo}>
            {/*modelo do card flip  */}

            <ul>
              <li>
                <div className={S.container}>
                  <div className={S.flip}>
                    <div className={S.frente}>
                      <img
                        className={S.PlayerFlip}
                        src={Jokic}
                        alt="Imagem-do-Nikola-Jokić"
                      />
                    </div>
                    <div className={S.tras}>
                      <div className={S.boxLogo}>
                        <img
                          className={S.Logo}
                          src={logoDenver}
                          alt="Imagem-do-Escudo-Denver-Nuggets"
                        />
                      </div>
                      <p>Nikola Jokic</p>
                    </div>
                  </div>
                </div>

                <div className={S.container}>
                  <div className={S.flip}>
                    <div className={S.frente}>
                      <img
                        className={S.PlayerFlip}
                        src={Shai}
                        alt="Imagem-do-Shai-Gilgeous-Alexander"
                      />
                    </div>
                    <div className={S.tras}>
                      <div className={S.boxLogo}>
                        <img
                          className={S.Logo}
                          src={logoOkc}
                          alt="Imagem-do-Escudo-Oklahoma-City-Thunder"
                        />
                      </div>
                      <p>Shai Gilgeous-Alexander</p>
                    </div>
                  </div>
                </div>

                <div className={S.container}>
                  <div className={S.flip}>
                    <div className={S.frente}>
                      <img
                        className={S.PlayerFlip}
                        src={Victor}
                        alt="Imagem-do-Victor-Wembanyama"
                      />
                    </div>
                    <div className={S.tras}>
                      <div className={S.boxLogo}>
                        <img
                          className={S.Logo}
                          src={logoSpurs}
                          alt="Imagem-do-Escudo-San-Antonio-Spurs"
                        />
                      </div>
                      <p>Victor Wembanyama</p>
                    </div>
                  </div>
                </div>
              </li>
            </ul>

            {/* Descrição sobre a parte de Atletas em destaques */}
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
            {/* botao que transfere para a pagina NBA */}
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
