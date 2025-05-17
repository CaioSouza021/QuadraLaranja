import { useEffect, useRef, useState } from "react";
import S from "./Sobre.module.scss";
import Bill from "../../assets/img/billRussel.jpg";
import Lebron from "../../assets/img/BlockLebron.webp";
import Jordan from "../../assets/img/JordanDunk1.jpg";
import Wade from "../../assets/img/Wade.jpeg";
import Wilt from "../../assets/img/Wilt.jpg";
import Logo from "../../assets/img/primeiraLogo.png";
import Rival from "../../assets/img/Rival.jpg";
import Estrangeiro from "../../assets/img/estrangeiro.webp";
import Lendas from "../../assets/img/Lendas.jpg";
import Rodman from "../../assets/img/Rodman.jpg";
import NewGen from "../../assets/img/novaGen.jpeg";
import Curry from "../../assets/img/Curry.jpg";
import TheShot from "../../assets/img/theShot.avif";
export default function Sobre() {
  // Array de imagens
  const images = [Wade, Jordan, Wilt, Lebron, Bill];
  // controle da imagem atual
  const [index, setIndex] = useState(0);
  // armazenamento do carrossel
  const intervalRef = useRef(null);
  // Troca automática
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length); //Avança para próxima imagem
    }, 5000);
    return () => clearInterval(intervalRef.current);
  }, []);
  // trocar manualmente o slide
  const handleManualClick = (i) => {
    setIndex(i); // Atualiza a imagem para a clicada
    clearInterval(intervalRef.current); // Reinicia intervalo
    intervalRef.current = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 5000);
  };

  return (
    <main className={S.TamanhoSobre}>
      <section className={S.containerCarrossel}>
        <div
          className={S.CarrosselCont}
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {images.map((img, i) => (
            <div key={i} className={S.CarrosselBox}>
              <img className={S.imgDesktop} src={img} alt={`Imagem ${i + 1}`} />
              <p>olhaol</p>
            </div>
          ))}
        </div>

        <div className={S.navManual}>
          {images.map((_, i) => (
            <button
              key={i}
              className={`${S.manualBtn} ${index === i ? S.active : ""}`}
              onClick={() => handleManualClick(i)}
            ></button>
          ))}
        </div>
      </section>
      {/* fim do carrosseel */}

      <section className={S.BoxTitulo}>
        <div className={S.Titulo}>
          <h2>
            Sobre a Essência da <span>NBA</span>
          </h2>
          <p>
            Conheça a história e os momentos mais marcantes da NBA, das grandes
            rivalidades às lendas que definiram a liga. Explore recordes
            impressionantes, defesas icônicas e descubra os novos talentos que
            estão moldando o futuro do basquete.
          </p>
        </div>
      </section>
      {/* inicio das informações */}
      <div className={S.TamanhoBoxInfoSobre}>
        <section className={S.ContainerEsq}>
          <div className={S.esqInfo}>
            <div className={S.esqText}>
              <img src={Logo} alt="Primeira Logo da NBA" />
              <div className={S.CaixaTextEsq}>
                <h3>Historia da NBA</h3>
                <p>
                  A NBA nasceu em 1946 como BAA (Basketball Association of
                  America) e se fundiu com a ABA em 1976. Desde então, o
                  basquete profissional evoluiu para se tornar um dos esportes
                  mais assistidos do mundo. Com grandes estrelas como Bill
                  Russell, Larry Bird, Magic Johnson e Michael Jordan, a liga
                  cresceu em audiência, espetáculo e influência global.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className={S.ContainerDir}>
          <div className={S.boxDir}>
            <div className={S.TextDir}>
              <h3>A Globalização do Basquete</h3>
              <p>
                O basquete deixou de ser um esporte americano para se tornar
                verdadeiramente global. Jogadores internacionais como Dirk
                Nowitzki (Alemanha), Manu Ginóbili (Argentina) e Yao Ming
                (China) abriram as portas para talentos do mundo todo. Hoje,
                nomes como Jokic, Doncic e Antetokounmpo dominam a NBA,
                mostrando que o basquete pertence ao planeta inteiro.
              </p>
            </div>
            <div>
              <img src={Estrangeiro} alt="Yao Ming e shaquille o'neal" />
            </div>
          </div>
        </section>

        <section className={S.ContainerEsq}>
          <div className={S.esqInfo}>
            <div className={S.esqText}>
              <img src={Rival} alt="Magic Johnson e Larry Bird" />
              <div className={S.CaixaTextEsq}>
                <h3>Grandes Rivalidades da NBA</h3>
                <p>
                  As rivalidades são o coração da NBA. Nos anos 80, Celtics e
                  Lakers travaram batalhas lendárias. Nos 90, os Pistons fizeram
                  Jordan sofrer antes de dominar. Já nos anos 2010, Warriors e
                  Cavaliers protagonizaram uma das maiores finais modernas.
                  Essas disputas são o que tornam cada temporada tão intensa.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className={S.ContainerDir}>
          <div className={S.boxDir}>
            <div className={S.TextDir}>
              <h3>Lendas que Marcaram Épocas</h3>
              <p>
                Algumas estrelas vão além das quadras e entram para a
                eternidade. Michael Jordan redefiniu o marketing e o jogo.
                LeBron James é um símbolo de consistência e impacto fora das
                quadras. Kobe Bryant é lembrado por sua mentalidade. Kareem
                Abdul-Jabbar ainda é o maior pontuador de todos os tempos. E
                Stephen Curry revolucionou o jogo com os arremessos de 3.
              </p>
            </div>
            <div>
              <img
                src={Lendas}
                alt="Kobe bryant, Allen Iverson, Lebron James, Michael Jordan, Larry Bird, Wilt Chamberlain"
              />
            </div>
          </div>
        </section>

        <section className={S.ContainerEsq}>
          <div className={S.esqInfo}>
            <div className={S.esqText}>
              <img src={Curry} alt="Stephen Curry" />
              <div className={S.CaixaTextEsq}>
                <h3>Recordes que Pareciam Impossíveis</h3>
                <p>
                  A NBA é palco de feitos que desafiam a lógica. Wilt
                  Chamberlain marcou 100 pontos em um único jogo, um feito ainda
                  não superado. Kareem Abdul-Jabbar manteve por décadas o
                  recorde de mais pontos na carreira, até LeBron ultrapassá-lo.
                  E Stephen Curry mudou a maneira como o basquete é jogado com
                  seus arremessos de longa distância. Esses recordes mostram
                  que, na NBA, o impossível acontece.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className={S.ContainerDir}>
          <div className={S.boxDir}>
            <div className={S.TextDir}>
              <h3>Momentos que Definiram a História</h3>
              <p>
                Alguns momentos são tão intensos que ficam gravados para sempre.
                Quando Michael Jordan acertou "The Shot" em 1989, ou quando
                LeBron James fez "o toco" mais famoso da história em 2016, o
                mundo parou para assistir. Cestas milagrosas, jogos épicos e
                finais inesquecíveis criaram a lenda da NBA
              </p>
            </div>
            <div>
              <img src={TheShot} alt="Arremeço de Jordan The Shot" />
            </div>
          </div>
        </section>
        <section className={S.ContainerEsq}>
          <div className={S.esqInfo}>
            <div className={S.esqText}>
              <img src={Rodman} alt="Dennis Rodman" />
              <div className={S.CaixaTextEsq}>
                <h3>As Defesas Mais Icônicas</h3>
                <p>
                  Embora o ataque brilhe, foram as grandes defesas que
                  construíram dinastias. O "Bad Boys" Detroit Pistons intimidou
                  a liga nos anos 80. Nos anos 2000, o San Antonio Spurs e o
                  Boston Celtics mostraram que defesa também vence campeonatos.
                  Jogadores como Dennis Rodman, Dikembe Mutombo e Ben Wallace se
                  tornaram lendas sem precisar marcar muitos pontos — bastava
                  parar os adversários.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className={S.ContainerDir}>
          <div className={S.boxDir}>
            <div className={S.TextDir}>
              <h3>Os Novos Rostos da NBA</h3>
              <p>
                Uma nova geração já está moldando o futuro da liga. Victor
                Wembanyama, com seu talento único para alguém de seu tamanho,
                Anthony Edwards com sua explosão atlética e Ja Morant com suas
                jogadas espetaculares prometem levar a NBA a novos patamares. O
                próximo capítulo da história já começou a ser escrito.
              </p>
            </div>
            <div>
              <img
                src={NewGen}
                alt="Anthony Edwards, Victor Wembanyama, Ja Morant"
              />
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
