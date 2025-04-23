// // import axios from "axios";
import { useState, useEffect } from "react";

import S from "./Home.module.scss";
import videoBG from "../../assets/videos/teste1.mp4";
import bola from "../../assets/img/BolaDec.jpeg";

export default function Home() {
  const [showVideo, setShowVideo] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setShowVideo(true);
    }, 1000);
  }, []);
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
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias,
                similique possimus totam inventore eum quaerat eligendi expedita
                sint, repellendus sed voluptatum culpa maiores qui corrupti
                dolore exercitationem necessitatibus aut temporibus!{" "}
              </p>
              <a className={S.botaoLink} href="#">
                Saiba Mais
              </a>
            </div>
          </section>
        </div>
        <section className={S.boxSobre}>
          <h2 className={S.titulo}>
            <span>Sobre</span> Nós
          </h2>
          <div className={S.boxDescricao}>
            <div className={S.sobreImagem}>
              <img src={bola} alt="" />
            </div>
            <div className={S.sobreTexto}>
              <h3>O que faz de especial?</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
                sapiente repellendus aliquam ex minus recusandae reiciendis
                cumque unde? Sit, quasi. Facilis quas accusantium maiores
                accusamus molestiae veritatis odit enim quae.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
                reprehenderit a aperiam impedit! Reiciendis saepe molestiae eius
                adipisci animi obcaecati consequatur ducimus consequuntur ipsa,
                aliquid molestias voluptatibus fuga officiis aut.
              </p>
              <a className={S.botaoLink} href="#">
                saiba mais
              </a>
            </div>
          </div>
        </section>
        <section>
          <div className={S.modal}>
            <h3 className={S.titulo}>
              <span>Quadras</span> pelo RJ
            </h3>
            <iframe
              src="https://www.google.com/maps/d/u/0/embed?mid=1ZhPb3GlIZAAtrojrrIIk3o2YeulwEIc&ehbc=2E312F&noprof=1"
              width="640"
              height="480"
            ></iframe>
          </div>
          <div className={S.mascaraModal}></div>
        </section>
      </div>
    </>
  );
}
