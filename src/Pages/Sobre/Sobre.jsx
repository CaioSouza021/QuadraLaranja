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
            Momentos Que Definem a <span>NBA</span>
          </h2>
          <p>
            Conheça a história e os momentos mais marcantes da NBA, das grandes
            rivalidades às lendas que definiram a liga. Explore recordes
            impressionantes, defesas icônicas e descubra os novos talentos que
            estão moldando o futuro do basquete.
          </p>
        </div>
      </section>

      <section className={S.ContainerHistoria}>
        <div className={S.boxInfo}>
          <div className={S.boxText}>
            <img src={Logo} alt="" />
            <div className={S.CaixaText}>
              <h3>Historia da NBA</h3>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias,
                aliquid consequatur architecto dolorem debitis maiores, suscipit
                quam labore eius obcaecati sint dicta dolor rem, fugit vel.
                Autem sequi voluptatem dolorem?Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Tenetur voluptatum exercitationem
                nulla adipisci optio facilis debitis, explicabo nesciunt soluta
                architecto, consequatur deserunt doloribus, modi eius cupiditate
                impedit quibusdam! Sit, vel.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className={S.ContainerEstrangeiro}>
        <div className={S.boxEstrangeiro}>
          <div className={S.EstrangeiroText}>
            <h3>A Globalização do Basquete</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias,
              aliquid consequatur architecto dolorem debitis maiores, suscipit
              quam labore eius obcaecati sint dicta dolor rem, fugit vel. Autem
              sequi voluptatem dolorem?Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Tenetur voluptatum exercitationem nulla adipisci
              optio facilis debitis, explicabo nesciunt soluta architecto,
              consequatur deserunt doloribus, modi eius cupiditate impedit
              quibusdam! Sit, vel.
            </p>
          </div>
          <div className={S.EstrangeiroImg2}>
            <img src={Estrangeiro} alt="" />
          </div>
        </div>
      </section>

      <section className={S.ContainerHistoria}>
        <div className={S.boxInfo}>
          <div className={S.boxText}>
            <img src={Rival} alt="" />
            <div className={S.CaixaText}>
              <h3> Grandes Rivalidades da NBA</h3>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias,
                aliquid consequatur architecto dolorem debitis maiores, suscipit
                quam labore eius obcaecati sint dicta dolor rem, fugit vel.
                Autem sequi voluptatem dolorem?Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Tenetur voluptatum exercitationem
                nulla adipisci optio facilis debitis, explicabo nesciunt soluta
                architecto, consequatur deserunt doloribus, modi eius cupiditate
                impedit quibusdam! Sit, vel.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className={S.ContainerEstrangeiro}>
        <div className={S.boxEstrangeiro}>
          <div className={S.EstrangeiroText}>
            <h3>Lendas que Marcaram Épocas</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias,
              aliquid consequatur architecto dolorem debitis maiores, suscipit
              quam labore eius obcaecati sint dicta dolor rem, fugit vel. Autem
              sequi voluptatem dolorem?Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Tenetur voluptatum exercitationem nulla adipisci
              optio facilis debitis, explicabo nesciunt soluta architecto,
              consequatur deserunt doloribus, modi eius cupiditate impedit
              quibusdam! Sit, vel.
            </p>
          </div>
          <div className={S.EstrangeiroImg2}>
            <img src={Lendas} alt="" />
          </div>
        </div>
      </section>

      <section className={S.ContainerHistoria}>
        <div className={S.boxInfo}>
          <div className={S.boxText}>
            <img src={Curry} alt="" />
            <div className={S.CaixaText}>
              <h3>Recordes que Pareciam Impossíveis</h3>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias,
                aliquid consequatur architecto dolorem debitis maiores, suscipit
                quam labore eius obcaecati sint dicta dolor rem, fugit vel.
                Autem sequi voluptatem dolorem?Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Tenetur voluptatum exercitationem
                nulla adipisci optio facilis debitis, explicabo nesciunt soluta
                architecto, consequatur deserunt doloribus, modi eius cupiditate
                impedit quibusdam! Sit, vel.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className={S.ContainerEstrangeiro}>
        <div className={S.boxEstrangeiro}>
          <div className={S.EstrangeiroText}>
            <h3>Momentos que Definiram a História</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias,
              aliquid consequatur architecto dolorem debitis maiores, suscipit
              quam labore eius obcaecati sint dicta dolor rem, fugit vel. Autem
              sequi voluptatem dolorem?Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Tenetur voluptatum exercitationem nulla adipisci
              optio facilis debitis, explicabo nesciunt soluta architecto,
              consequatur deserunt doloribus, modi eius cupiditate impedit
              quibusdam! Sit, vel.
            </p>
          </div>
          <div className={S.EstrangeiroImg2}>
            <img src={TheShot} alt="" />
          </div>
        </div>
      </section>

      <section className={S.ContainerHistoria}>
        <div className={S.boxInfo}>
          <div className={S.boxText}>
            <img src={Rodman} alt="" />
            <div className={S.CaixaText}>
              <h3>As Defesas Mais Icônicas</h3>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias,
                aliquid consequatur architecto dolorem debitis maiores, suscipit
                quam labore eius obcaecati sint dicta dolor rem, fugit vel.
                Autem sequi voluptatem dolorem?Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Tenetur voluptatum exercitationem
                nulla adipisci optio facilis debitis, explicabo nesciunt soluta
                architecto, consequatur deserunt doloribus, modi eius cupiditate
                impedit quibusdam! Sit, vel.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className={S.ContainerEstrangeiro}>
        <div className={S.boxEstrangeiro}>
          <div className={S.EstrangeiroText}>
            <h3>Os Novos Rostos da NBA</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias,
              aliquid consequatur architecto dolorem debitis maiores, suscipit
              quam labore eius obcaecati sint dicta dolor rem, fugit vel. Autem
              sequi voluptatem dolorem?Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Tenetur voluptatum exercitationem nulla adipisci
              optio facilis debitis, explicabo nesciunt soluta architecto,
              consequatur deserunt doloribus, modi eius cupiditate impedit
              quibusdam! Sit, vel.
            </p>
          </div>
          <div className={S.EstrangeiroImg2}>
            <img src={NewGen} alt="" />
          </div>
        </div>
      </section>
    </main>
  );
}
