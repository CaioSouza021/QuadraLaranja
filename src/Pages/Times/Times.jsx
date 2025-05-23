import S from "./Times.module.scss";
import Celtics from "../../assets/img/LogoTimes/BostonLogo.png";
import Knicks from "../../assets/img/LogoTimes/KnicksLogo.png";
import Nets from "../../assets/img/LogoTimes/NetsLogo.png";
import Philadelphia from "../../assets/img/LogoTimes/PhiladelphiaLogo.png";
import Raptors from "../../assets/img/LogoTimes/RaptorsLogo.png";
import Bucks from "../../assets/img/LogoTimes/BucksLogo.png";
import Bulls from "../../assets/img/LogoTimes/bullsLogo.png";
import Cavs from "../../assets/img/LogoTimes/CavsLogo.webp";
import Hawks from "../../assets/img/LogoTimes/HawksLogo.png";
import Hornets from "../../assets/img/LogoTimes/HornetsLogo.png";
import Heat from "../../assets/img/LogoTimes/HeatLogo.png";
import Indiana from "../../assets/img/LogoTimes/indianaLogo.png";
import Magic from "../../assets/img/LogoTimes/MagicLogo.webp";
import Pistons from "../../assets/img/LogoTimes/PistonsLogo.png";
import Wizards from "../../assets/img/LogoTimes/WizardsLogo.png";
import Blazers from "../../assets/img/LogoTimes/BlazersLogo.png";
import Clippers from "../../assets/img/LogoTimes/ClippersLogo.png";
import Dallas from "../../assets/img/LogoTimes/DallasLogo.png";
import Jazz from "../../assets/img/LogoTimes/JazzLogo.png";
import Kings from "../../assets/img/LogoTimes/KingsLogo.png";
import Lakers from "../../assets/img/LogoTimes/Lakerslogo.png";
import Memphis from "../../assets/img/LogoTimes/MemphisLogo.png";
import Pelicans from "../../assets/img/LogoTimes/PelicansLogo.png";
import Rockets from "../../assets/img/LogoTimes/RocketsLogo.png";
import Suns from "../../assets/img/LogoTimes/SunsLogo.png";
import Warriors from "../../assets/img/LogoTimes/WarriorsLogo.png";
import Wolves from "../../assets/img/LogoTimes/WolvesLogo.webp";
import Denver from "../../assets/img/LogoTimes/denverLogo.png";
import Thunder from "../../assets/img/LogoTimes/okcLogo.png";
import Spurs from "../../assets/img/LogoTimes/spursLogo.png";

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

        <section className={S.Conferencia}>
          <h2>
            Conferência <span>Leste</span>
          </h2>
          <section className={S.Local}>
            <div className={S.TituloRegiao}>
              <h3>Divisão Atlântica</h3>
            </div>
            <div className={S.times}>
              <img src={Celtics} alt="" />
              <div className={S.NomeDosTimes}>
                <h4>Boston Celtics</h4>
                <p>Celtics</p>
              </div>
            </div>

            <div className={S.times}>
              <img src={Nets} alt="" />
              <div className={S.NomeDosTimes}>
                <h4>Brooklyn Nets</h4>
                <p>Nets</p>
              </div>
            </div>

            <div className={S.times}>
              <img src={Knicks} alt="" />
              <div className={S.NomeDosTimes}>
                <h4>New York Knicks</h4>
                <p>Knicks</p>
              </div>
            </div>

            <div className={S.times}>
              <img src={Philadelphia} alt="" />
              <div className={S.NomeDosTimes}>
                <h4>Philadelphia 76ers</h4>
                <p>76ers ou Sixers</p>
              </div>
            </div>

            <div className={S.times}>
              <img src={Raptors} alt="" />
              <div className={S.NomeDosTimes}>
                <h4>Toronto Raptors</h4>
                <p>Raptors</p>
              </div>
            </div>
          </section>

          <section className={S.Local}>
            <div className={S.TituloRegiao}>
              <h3>Divisão Central</h3>
            </div>
            <div className={S.times}>
              <img src={Bulls} alt="" />
              <div className={S.NomeDosTimes}>
                <h4>Chicago Bulls</h4>
                <p>Bulls</p>
              </div>
            </div>

            <div className={S.times}>
              <img src={Cavs} alt="" />
              <div className={S.NomeDosTimes}>
                <h4>Cleveland Cavaliers</h4>
                <p>Cavaliers ou Cavs</p>
              </div>
            </div>

            <div className={S.times}>
              <img src={Pistons} alt="" />
              <div className={S.NomeDosTimes}>
                <h4>Detroit Pistons</h4>
                <p>Pistons</p>
              </div>
            </div>

            <div className={S.times}>
              <img src={Indiana} alt="" />
              <div className={S.NomeDosTimes}>
                <h4>Indiana Pacers</h4>
                <p>Pacers</p>
              </div>
            </div>

            <div className={S.times}>
              <img src={Bucks} alt="" />
              <div className={S.NomeDosTimes}>
                <h4>Milwaukee Bucks</h4>
                <p>Bucks</p>
              </div>
            </div>
          </section>

          <section className={S.Local}>
            <div className={S.TituloRegiao}>
              <h3>Divisão Sudeste</h3>
            </div>
            <div className={S.times}>
              <img src={Hawks} alt="" />
              <div className={S.NomeDosTimes}>
                <h4>Atlanta Hawks</h4>
                <p>Hawks</p>
              </div>
            </div>

            <div className={S.times}>
              <img src={Hornets} alt="" />
              <div className={S.NomeDosTimes}>
                <h4>Charlotte Hornets</h4>
                <p>Hornets</p>
              </div>
            </div>

            <div className={S.times}>
              <img src={Heat} alt="" />
              <div className={S.NomeDosTimes}>
                <h4>Miami Heat</h4>
                <p>Heat</p>
              </div>
            </div>

            <div className={S.times}>
              <img src={Magic} alt="" />
              <div className={S.NomeDosTimes}>
                <h4>Orlando Magic</h4>
                <p>Magic</p>
              </div>
            </div>

            <div className={S.times}>
              <img src={Wizards} alt="" />
              <div className={S.NomeDosTimes}>
                <h4>Washington Wizards</h4>
                <p>Wizards</p>
              </div>
            </div>
          </section>
        </section>

        {/* Coferência Oeste */}
        <section className={S.Conferencia}>
          <h2>
            Conferência <span>Oeste</span>
          </h2>
          <section className={S.Local}>
            <div className={S.TituloRegiao}>
              <h3>Divisão Noroeste</h3>
            </div>
            <div className={S.times}>
              <img src={Denver} alt="" />
              <div className={S.NomeDosTimes}>
                <h4>Denver Nuggets</h4>
                <p>Nuggets</p>
              </div>
            </div>

            <div className={S.times}>
              <img src={Wolves} alt="" />
              <div className={S.NomeDosTimes}>
                <h4>Minnesota Timberwolves</h4>
                <p>Timberwolves ou Wolves</p>
              </div>
            </div>

            <div className={S.times}>
              <img src={Thunder} alt="" />
              <div className={S.NomeDosTimes}>
                <h4>Oklahoma City Thunder</h4>
                <p>Thunder</p>
              </div>
            </div>

            <div className={S.times}>
              <img src={Blazers} alt="" />
              <div className={S.NomeDosTimes}>
                <h4>Portland Trail Blazers</h4>
                <p>Trail Blazers ou Blazers</p>
              </div>
            </div>

            <div className={S.times}>
              <img src={Jazz} alt="" />
              <div className={S.NomeDosTimes}>
                <h4>Utah Jazz</h4>
                <p>Jazz</p>
              </div>
            </div>
          </section>

          <section className={S.Local}>
            <div className={S.TituloRegiao}>
              <h3>Divisão Pacífico</h3>
            </div>
            <div className={S.times}>
              <img src={Warriors} alt="" />
              <div className={S.NomeDosTimes}>
                <h4>Golden State Warriors</h4>
                <p>Warriors</p>
              </div>
            </div>

            <div className={S.times}>
              <img src={Clippers} alt="" />
              <div className={S.NomeDosTimes}>
                <h4>Los Angeles Clippers</h4>
                <p>Clippers</p>
              </div>
            </div>

            <div className={S.times}>
              <img src={Lakers} alt="" />
              <div className={S.NomeDosTimes}>
                <h4>Los Angeles Lakers</h4>
                <p>Lakers</p>
              </div>
            </div>

            <div className={S.times}>
              <img src={Suns} alt="" />
              <div className={S.NomeDosTimes}>
                <h4>Phoenix Suns</h4>
                <p>Suns</p>
              </div>
            </div>

            <div className={S.times}>
              <img src={Kings} alt="" />
              <div className={S.NomeDosTimes}>
                <h4>Sacramento Kings</h4>
                <p>Kings</p>
              </div>
            </div>
          </section>

          <section className={S.Local}>
            <div className={S.TituloRegiao}>
              <h3>Divisão Sudoeste</h3>
            </div>
            <div className={S.times}>
              <img src={Dallas} alt="" />
              <div className={S.NomeDosTimes}>
                <h4>Dallas Mavericks</h4>
                <p>Mavericks ou Mavs</p>
              </div>
            </div>

            <div className={S.times}>
              <img src={Rockets} alt="" />
              <div className={S.NomeDosTimes}>
                <h4>Houston Rockets</h4>
                <p>Rockets</p>
              </div>
            </div>

            <div className={S.times}>
              <img src={Memphis} alt="" />
              <div className={S.NomeDosTimes}>
                <h4>Memphis Grizzlies</h4>
                <p>Grizzlies</p>
              </div>
            </div>

            <div className={S.times}>
              <img src={Pelicans} alt="" />
              <div className={S.NomeDosTimes}>
                <h4>New Orleans Pelicans</h4>
                <p>Pelicans ou Pels</p>
              </div>
            </div>

            <div className={S.times}>
              <img src={Spurs} alt="" />
              <div className={S.NomeDosTimes}>
                <h4>San Antonio Spurs</h4>
                <p>Spurs</p>
              </div>
            </div>
          </section>
        </section>

        <section className={S.TextAtletasNBA}>
          <h2>
            <span>Principais</span> Atletas de Cada Elenco
          </h2>
        </section>

        <section className={S.AtletasNBA}>
          <section>
            <div>
              <img src="" alt="" />
            </div>
            <div>
              <h4></h4>
              <p></p>
            </div>
          </section>
        </section>
      </main>
    </>
  );
}
