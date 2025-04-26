import { useEffect, useRef, useState } from "react";
import S from "./Sobre.module.scss";
import Bill from "../../assets/img/billRussel.jpg";
import Lebron from "../../assets/img/BlockLebron.webp";
import Jordan from "../../assets/img/JordanDunk1.jpg";
import Wade from "../../assets/img/Wade.jpeg";
import Wilt from "../../assets/img/Wilt.jpg";

export default function Sobre() {
  // efeito carrossel
  const images = [Bill, Wade, Jordan, Wilt, Lebron];

  const [index, setIndex] = useState(0);
  const intervalRef = useRef(null);

  // Troca automática
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 7000);
    return () => clearInterval(intervalRef.current);
  }, []);

  const handleManualClick = (i) => {
    setIndex(i);
    clearInterval(intervalRef.current); // Reinicia intervalo
    intervalRef.current = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 7000);
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
    </main>
  );
}
