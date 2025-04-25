import { Link } from "react-router-dom";
import { useEffect, useRef } from "react";
import S from "./Home.module.scss";
import videoBG from "../../assets/videos/VideoBG.mp4";
import Nba from "../../assets/img/nbaLogo.png";
import logoDenver from "../../assets/img/denverLogo.png";
import logoOkc from "../../assets/img/okcLogo.png";
import logoSpurs from "../../assets/img/spursLogo.png";
import Victor from "../../assets/img/victor.jpg";
import Shai from "../../assets/img/shai.jpg";
import Jokic from "../../assets/img/jokic.jpg";

export default function Home() {
  // Cria duas referências diferentes para os dois botões
  const btnRef1 = useRef(null);
  const btnRef2 = useRef(null);

  // Efeito de animação nos botões
  useEffect(() => {
    const animateButton = (btn) => {
      // Evento de movimento do mouse dentro do botão
      const handleMouseMove = (e) => {
        const rect = btn.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        // Define as variáveis
        btn.style.setProperty("--eixoX", `${x}px`);
        btn.style.setProperty("--eixoY", `${y}px`);
      };

      const handleMouseLeave = (e) => {
        const rect = btn.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        btn.style.setProperty("--eixoX", `${x}px`);
        btn.style.setProperty("--eixoY", `${y}px`);
      };

      btn.addEventListener("mousemove", handleMouseMove);
      btn.addEventListener("mouseleave", handleMouseLeave);
      // Função de limpeza
      return () => {
        btn.removeEventListener("mousemove", handleMouseMove);
        btn.removeEventListener("mouseleave", handleMouseLeave);
      };
    };

    const cleanups = [];
    // Aplica a função de animação nos dois botões
    if (btnRef1.current) cleanups.push(animateButton(btnRef1.current));
    if (btnRef2.current) cleanups.push(animateButton(btnRef2.current));

    return () => {
      cleanups.forEach((cleanup) => cleanup && cleanup());
    };
  }, []);

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
              <div>
                <Link to="/Sobre" className={S.botaoLink} ref={btnRef1}>
                  <span> Sobre Nós</span>
                </Link>
              </div>
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
                      <p className={S.boxNome}>Nikola Jokic</p>
                      <ul className={S.geralAtleta}>
                        <li>
                          <strong>Idade:</strong> <p>29 anos (19/02/95)</p>
                        </li>
                        <li>
                          <strong>Altura:</strong>
                          <p>2,11m</p>
                        </li>
                        <li>
                          <strong>Peso:</strong>
                          <p>129kg</p>
                        </li>
                        <li>
                          <strong>Posição:</strong>
                          <p>Pivô (C)</p>
                        </li>
                        <li>
                          <strong>Destaques: </strong>
                          <p>
                            MVP NBA(21/22)/ MVP das Finais(2023)/ Campeão da
                            NBA(2023)/ 6x All-Star
                          </p>
                        </li>
                      </ul>
                      <div className={S.BoxNbaCard}>
                        <img className={S.nbaCard} src={Nba} alt="" />
                      </div>
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
                      <p className={S.boxNome}>Shai Gilgeous-Alexander</p>
                      <ul className={S.geralAtleta}>
                        <li>
                          <strong>Idade: </strong> <p>25 anos (12/07/98)</p>
                        </li>
                        <li>
                          <strong>Altura:</strong>
                          <p>1,98m</p>
                        </li>
                        <li>
                          <strong>Peso:</strong>
                          <p>88kg</p>
                        </li>
                        <li>
                          <strong>Posição:</strong>
                          <p>Armador (PG)</p>
                        </li>
                        <li>
                          <strong>Destaques: </strong>
                          <p>All-Star 2024</p>
                        </li>
                      </ul>
                      <div className={S.BoxNbaCard}>
                        <img className={S.nbaCard} src={Nba} alt="" />
                      </div>
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
                      <p className={S.boxNome}>Victor Wembanyama</p>
                      <ul className={S.geralAtleta}>
                        <li>
                          <strong>Idade:</strong> <p>20 anos (04/01/04)</p>
                        </li>
                        <li>
                          <strong>Altura:</strong>
                          <p>2,24m</p>
                        </li>
                        <li>
                          <strong>Peso:</strong>
                          <p> 95kg</p>
                        </li>
                        <li>
                          <strong>Posição:</strong>
                          <p>Pivô/ Ala-Pivô (C/PF)</p>
                        </li>
                        <li>
                          <strong>Destaques:</strong>
                          <p>Provável Rookie 2024</p>
                        </li>
                      </ul>
                      <div className={S.BoxNbaCard}>
                        <img className={S.nbaCard} src={Nba} alt="" />
                      </div>
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
                Nikola Jokić, Shai Gilgeous-Alexander e Victor Wembanyama
                mostram por que estão entre os principais nomes da liga.
              </p>
            </div>
            {/* botao que transfere para a pagina NBA */}
            <div className={S.boxBtn}>
              <div>
                <Link to="/Sobre" className={S.botaoLink} ref={btnRef2}>
                  <span> Sobre Nós</span>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
