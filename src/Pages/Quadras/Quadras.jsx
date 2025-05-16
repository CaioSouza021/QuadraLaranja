import S from "./Quadras.module.scss";
import "bootstrap-icons/font/bootstrap-icons.css";
import Knicks from "../../assets/img/QuadraKnicks.png";
import Philadelphia from "../../assets/img/Arenas/PhiladelphiaArena.webp";
import Bulls from "../../assets/img/Arenas/BullsArena.jpg";
import Rockets from "../../assets/img/Arenas/RocketsArena.jpg";
import Celtics from "../../assets/img/Arenas/CelticsArena.jpg";
import Timberwolves from "../../assets/img/Arenas/TimberwolvesArena.jpg";
import Hawks from "../../assets/img/Arenas/HawksArena.jpg";
import Hornets from "../../assets/img/Arenas/HornetsArena.jpg";
import Pelicans from "../../assets/img/Arenas/PelicansArena.jpg";
import Raptors from "../../assets/img/Arenas/RaptorsArena.jpeg";
import Cavaliers from "../../assets/img/Arenas/CavaliersArena.jpg";
import Thunder from "../../assets/img/Arenas/ThunderArena.jpg";
import Blazers from "../../assets/img/Arenas/ArenaBlazers.jpg";
import Pistons from "../../assets/img/Arenas/ArenaPistons.avif";
import Magic from "../../assets/img/Arenas/MagicArena.jpg";
import Heat from "../../assets/img/Arenas/HeatArena.webp";
import Clippers from "../../assets/img/Arenas/ClippersArena.jpg";
import Sacramento from "../../assets/img/Arenas/SacramentoArena.jpg";
import Indiana from "../../assets/img/Arenas/IndianaArena.jpg";
import Spurs from "../../assets/img/Arenas/SpursArena.webp";
import Suns from "../../assets/img/Arenas/SunsArena.avif";
import Bucks from "../../assets/img/Arenas/BucksArena.jpg";
import Jazz from "../../assets/img/Arenas/JazzArena.jpg";
import Lakers from "../../assets/img/Arenas/LakersArena.jpg";
import Warriors from "../../assets/img/Arenas/WarriorsArena.jpg";
import Wizards from "../../assets/img/Arenas/WizardsArena.webp";
import Nets from "../../assets/img/Arenas/NetsArena.webp";
import Denver from "../../assets/img/Arenas/DenverArena.jpg";
import Dallas from "../../assets/img/Arenas/DallasArena.jpg";
import Memphis from "../../assets/img/Arenas/MemphisArena.webp";

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

          <section className={S.ContainerCardsQuadra}>
            <section className={S.BoxTituloQuadra}>
              <h2>
                ARENAS DA <span>NBA</span>
              </h2>
            </section>

            <div className={S.BoxCardsQuadra}>
              <div className={S.ImgCardsQuadra}>
                <img src={Dallas} alt="" />
              </div>
              <div className={S.BoxNameStadio}>
                {/* nome da Arena */}
                <h4>American Airlines Center</h4>
                {/* local */}
                <p>Dallas, Texas</p>
              </div>

              <div className={S.BoxInfoStadio1}>
                <i class="bi bi-house"></i>
                <p>Capacidade: 19.200</p>
              </div>
              <div className={S.BoxInfoStadio}>
                <i class="bi bi-list-stars"></i>
                <p>Time: Dallas Mavericks</p>
              </div>
            </div>

            <div className={S.BoxCardsQuadra}>
              <div className={S.ImgCardsQuadra}>
                <img src={Denver} alt="" />
              </div>
              <div className={S.BoxNameStadio}>
                {/* nome da Arena */}
                <h4>Ball Arena</h4>
                {/* local */}
                <p>Denver, Colorado</p>
              </div>

              <div className={S.BoxInfoStadio1}>
                <i class="bi bi-house"></i>
                <p>Capacidade: 19.520</p>
              </div>
              <div className={S.BoxInfoStadio}>
                <i class="bi bi-list-stars"></i>
                <p>Time: Denver Nuggets</p>
              </div>
            </div>

            <div className={S.BoxCardsQuadra}>
              <div className={S.ImgCardsQuadra}>
                <img src={Nets} alt="" />
              </div>
              <div className={S.BoxNameStadio}>
                {/* nome da Arena */}
                <h4>Barclays Center</h4>
                {/* local */}
                <p>Brooklyn, Nova York</p>
              </div>

              <div className={S.BoxInfoStadio1}>
                <i class="bi bi-house"></i>
                <p>Capacidade: 17.732</p>
              </div>
              <div className={S.BoxInfoStadio}>
                <i class="bi bi-list-stars"></i>
                <p>Time: Brooklyn Nets</p>
              </div>
            </div>

            <div className={S.BoxCardsQuadra}>
              <div className={S.ImgCardsQuadra}>
                <img src={Wizards} alt="" />
              </div>
              <div className={S.BoxNameStadio}>
                {/* nome da Arena */}
                <h4>Capital One Arena</h4>
                {/* local */}
                <p>Washington, D.C.</p>
              </div>

              <div className={S.BoxInfoStadio1}>
                <i class="bi bi-house"></i>
                <p>Capacidade: 20.356</p>
              </div>
              <div className={S.BoxInfoStadio}>
                <i class="bi bi-list-stars"></i>
                <p>Time: Washington Wizards</p>
              </div>
            </div>

            <div className={S.BoxCardsQuadra}>
              <div className={S.ImgCardsQuadra}>
                <img src={Lakers} alt="" />
              </div>
              <div className={S.BoxNameStadio}>
                {/* nome da Arena */}
                <h4>Crypto.com Arena</h4>
                {/* local */}
                <p>Los Angeles, Califórnia</p>
              </div>

              <div className={S.BoxInfoStadio1}>
                <i class="bi bi-house"></i>
                <p>Capacidade: 18.997</p>
              </div>
              <div className={S.BoxInfoStadio}>
                <i class="bi bi-list-stars"></i>
                <p>Time: Los Angeles Lakers</p>
              </div>
            </div>

            <div className={S.BoxCardsQuadra}>
              <div className={S.ImgCardsQuadra}>
                <img src={Jazz} alt="" />
              </div>
              <div className={S.BoxNameStadio}>
                {/* nome da Arena */}
                <h4>Delta Center</h4>
                {/* local */}
                <p>Salt Lake City, Utah</p>
              </div>

              <div className={S.BoxInfoStadio1}>
                <i class="bi bi-house"></i>
                <p>Capacidade: 18.306</p>
              </div>
              <div className={S.BoxInfoStadio}>
                <i class="bi bi-list-stars"></i>
                <p>Time: Utah Jazz</p>
              </div>
            </div>

            <div className={S.BoxCardsQuadra}>
              <div className={S.ImgCardsQuadra}>
                <img src={Bucks} alt="" />
              </div>
              <div className={S.BoxNameStadio}>
                {/* nome da Arena */}
                <h4>Fiserv Forum</h4>
                {/* local */}
                <p>Milwaukee, Wisconsin</p>
              </div>

              <div className={S.BoxInfoStadio1}>
                <i class="bi bi-house"></i>
                <p>Capacidade: 17.341</p>
              </div>
              <div className={S.BoxInfoStadio}>
                <i class="bi bi-list-stars"></i>
                <p>Time: Milwaukee Bucks</p>
              </div>
            </div>

            <div className={S.BoxCardsQuadra}>
              <div className={S.ImgCardsQuadra}>
                <img src={Suns} alt="" />
              </div>
              <div className={S.BoxNameStadio}>
                {/* nome da Arena */}
                <h4>Footprint Center</h4>
                {/* local */}
                <p>Phoenix, Arizona</p>
              </div>

              <div className={S.BoxInfoStadio1}>
                <i class="bi bi-house"></i>
                <p>Capacidade: 17.071</p>
              </div>
              <div className={S.BoxInfoStadio}>
                <i class="bi bi-list-stars"></i>
                <p>Time: Phoenix Suns</p>
              </div>
            </div>

            <div className={S.BoxCardsQuadra}>
              <div className={S.ImgCardsQuadra}>
                <img src={Spurs} alt="" />
              </div>
              <div className={S.BoxNameStadio}>
                {/* nome da Arena */}
                <h4>Frost Bank Center</h4>
                {/* local */}
                <p>San Antonio, Texas</p>
              </div>

              <div className={S.BoxInfoStadio1}>
                <i class="bi bi-house"></i>
                <p>Capacidade: 18.418</p>
              </div>
              <div className={S.BoxInfoStadio}>
                <i class="bi bi-list-stars"></i>
                <p>Time: San Antonio Spurs</p>
              </div>
            </div>

            <div className={S.BoxCardsQuadra}>
              <div className={S.ImgCardsQuadra}>
                <img src={Indiana} alt="" />
              </div>
              <div className={S.BoxNameStadio}>
                {/* nome da Arena */}
                <h4>Gainbridge Fieldhouse</h4>
                {/* local */}
                <p>Indianapolis, Indiana</p>
              </div>

              <div className={S.BoxInfoStadio1}>
                <i class="bi bi-house"></i>
                <p>Capacidade: 17.923</p>
              </div>
              <div className={S.BoxInfoStadio}>
                <i class="bi bi-list-stars"></i>
                <p>Time: Indiana Pacers</p>
              </div>
            </div>

            <div className={S.BoxCardsQuadra}>
              <div className={S.ImgCardsQuadra}>
                <img src={Sacramento} alt="" />
              </div>
              <div className={S.BoxNameStadio}>
                {/* nome da Arena */}
                <h4>Golden 1 Center</h4>
                {/* local */}
                <p>Sacramento, Califórnia</p>
              </div>

              <div className={S.BoxInfoStadio1}>
                <i class="bi bi-house"></i>
                <p>Capacidade: 17.583</p>
              </div>
              <div className={S.BoxInfoStadio}>
                <i class="bi bi-list-stars"></i>
                <p>Time: Sacramento Kings</p>
              </div>
            </div>

            <div className={S.BoxCardsQuadra}>
              <div className={S.ImgCardsQuadra}>
                <img src={Clippers} alt="" />
              </div>
              <div className={S.BoxNameStadio}>
                {/* nome da Arena */}
                <h4>Intuit Dome</h4>
                {/* local */}
                <p>Inglewood, Califórnia</p>
              </div>

              <div className={S.BoxInfoStadio1}>
                <i class="bi bi-house"></i>
                <p>Capacidade: 18.000</p>
              </div>
              <div className={S.BoxInfoStadio}>
                <i class="bi bi-list-stars"></i>
                <p>Time: Los Angeles Clippers</p>
              </div>
            </div>

            <div className={S.BoxCardsQuadra}>
              <div className={S.ImgCardsQuadra}>
                <img src={Heat} alt="" />
              </div>
              <div className={S.BoxNameStadio}>
                {/* nome da Arena */}
                <h4>Kaseya Center</h4>
                {/* local */}
                <p>Miami, Flórida</p>
              </div>

              <div className={S.BoxInfoStadio1}>
                <i class="bi bi-house"></i>
                <p>Capacidade: 19.600</p>
              </div>
              <div className={S.BoxInfoStadio}>
                <i class="bi bi-list-stars"></i>
                <p>Time: Miami Heat</p>
              </div>
            </div>

            <div className={S.BoxCardsQuadra}>
              <div className={S.ImgCardsQuadra}>
                <img src={Magic} alt="" />
              </div>
              <div className={S.BoxNameStadio}>
                {/* nome da Arena */}
                <h4>Kia Center</h4>
                {/* local */}
                <p>Orlando, Flórida</p>
              </div>

              <div className={S.BoxInfoStadio1}>
                <i class="bi bi-house"></i>
                <p>Capacidade: 18.846</p>
              </div>
              <div className={S.BoxInfoStadio}>
                <i class="bi bi-list-stars"></i>
                <p>Time: Orlando Magic</p>
              </div>
            </div>

            <div className={S.BoxCardsQuadra}>
              <div className={S.ImgCardsQuadra}>
                <img src={Pistons} alt="" />
              </div>
              <div className={S.BoxNameStadio}>
                {/* nome da Arena */}
                <h4>Little Ceasars Arena</h4>
                {/* local */}
                <p>Detroit, Michigan</p>
              </div>

              <div className={S.BoxInfoStadio1}>
                <i class="bi bi-house"></i>
                <p>Capacidade: 20.332</p>
              </div>
              <div className={S.BoxInfoStadio}>
                <i class="bi bi-list-stars"></i>
                <p>Time: Detroit Pistons</p>
              </div>
            </div>

            <div className={S.BoxCardsQuadra}>
              <div className={S.ImgCardsQuadra}>
                <img src={Knicks} alt="" />
              </div>
              <div className={S.BoxNameStadio}>
                {/* nome da Arena */}
                <h4>Madison Square Garden</h4>
                {/* local */}
                <p>Nova York, Nova York</p>
              </div>

              <div className={S.BoxInfoStadio1}>
                <i class="bi bi-house"></i>
                <p>Capacidade: 19.812</p>
              </div>
              <div className={S.BoxInfoStadio}>
                <i class="bi bi-list-stars"></i>
                <p>Time: New York Knicks</p>
              </div>
            </div>

            <div className={S.BoxCardsQuadra}>
              <div className={S.ImgCardsQuadra}>
                <img src={Blazers} alt="" />
              </div>
              <div className={S.BoxNameStadio}>
                {/* nome da Arena */}
                <h4>Moda Center</h4>
                {/* local */}
                <p>Portland, Oregon</p>
              </div>

              <div className={S.BoxInfoStadio1}>
                <i class="bi bi-house"></i>
                <p>Capacidade: 19.441</p>
              </div>
              <div className={S.BoxInfoStadio}>
                <i class="bi bi-list-stars"></i>
                <p>Time: Portand Trail Blazers</p>
              </div>
            </div>

            <div className={S.BoxCardsQuadra}>
              <div className={S.ImgCardsQuadra}>
                <img src={Thunder} alt="" />
              </div>
              <div className={S.BoxNameStadio}>
                {/* nome da Arena */}
                <h4>Paycom Center</h4>
                {/* local */}
                <p>Oklahoma City, Oklahoma</p>
              </div>

              <div className={S.BoxInfoStadio1}>
                <i class="bi bi-house"></i>
                <p>Capacidade: 18.203</p>
              </div>
              <div className={S.BoxInfoStadio}>
                <i class="bi bi-list-stars"></i>
                <p>Time: Oklahoma City Thunder</p>
              </div>
            </div>

            <div className={S.BoxCardsQuadra}>
              <div className={S.ImgCardsQuadra}>
                <img src={Cavaliers} alt="" />
              </div>
              <div className={S.BoxNameStadio}>
                {/* nome da Arena */}
                <h4>Rocket Mortgage FieldHouse</h4>
                {/* local */}
                <p>Cleveland, Ohio</p>
              </div>

              <div className={S.BoxInfoStadio1}>
                <i class="bi bi-house"></i>
                <p>Capacidade: 19.432</p>
              </div>
              <div className={S.BoxInfoStadio}>
                <i class="bi bi-list-stars"></i>
                <p>Time: Cleveland Cavaliers</p>
              </div>
            </div>

            <div className={S.BoxCardsQuadra}>
              <div className={S.ImgCardsQuadra}>
                <img src={Raptors} alt="" />
              </div>
              <div className={S.BoxNameStadio}>
                {/* nome da Arena */}
                <h4>Scotiabank Arena</h4>
                {/* local */}
                <p>Toronto, Ontário (Canadá)</p>
              </div>

              <div className={S.BoxInfoStadio1}>
                <i class="bi bi-house"></i>
                <p>Capacidade: 19.800</p>
              </div>
              <div className={S.BoxInfoStadio}>
                <i class="bi bi-list-stars"></i>
                <p>Time: Toronto Raptors</p>
              </div>
            </div>

            <div className={S.BoxCardsQuadra}>
              <div className={S.ImgCardsQuadra}>
                <img src={Pelicans} alt="" />
              </div>
              <div className={S.BoxNameStadio}>
                {/* nome da Arena */}
                <h4>Smoothie King Center</h4>
                {/* local */}
                <p>New Orleans, Louisiana</p>
              </div>

              <div className={S.BoxInfoStadio1}>
                <i class="bi bi-house"></i>
                <p>Capacidade: 16.867</p>
              </div>
              <div className={S.BoxInfoStadio}>
                <i class="bi bi-list-stars"></i>
                <p>Time: New Orleans Pelicans</p>
              </div>
            </div>

            <div className={S.BoxCardsQuadra}>
              <div className={S.ImgCardsQuadra}>
                <img src={Hornets} alt="" />
              </div>
              <div className={S.BoxNameStadio}>
                {/* nome da Arena */}
                <h4>Spectrum Center</h4>
                {/* local */}
                <p>Charlotte, Carolina do Norte</p>
              </div>

              <div className={S.BoxInfoStadio1}>
                <i class="bi bi-house"></i>
                <p>Capacidade: 19.077</p>
              </div>
              <div className={S.BoxInfoStadio}>
                <i class="bi bi-list-stars"></i>
                <p>Time: Charlotte Hornets</p>
              </div>
            </div>

            <div className={S.BoxCardsQuadra}>
              <div className={S.ImgCardsQuadra}>
                <img src={Hawks} alt="" />
              </div>
              <div className={S.BoxNameStadio}>
                {/* nome da Arena */}
                <h4>State Farm Arena</h4>
                {/* local */}
                <p>Atlanta, Geórgia</p>
              </div>

              <div className={S.BoxInfoStadio1}>
                <i class="bi bi-house"></i>
                <p>Capacidade: 17.044</p>
              </div>
              <div className={S.BoxInfoStadio}>
                <i class="bi bi-list-stars"></i>
                <p>Time: Atlanta Hawks</p>
              </div>
            </div>

            <div className={S.BoxCardsQuadra}>
              <div className={S.ImgCardsQuadra}>
                <img src={Timberwolves} alt="" />
              </div>
              <div className={S.BoxNameStadio}>
                {/* nome da Arena */}
                <h4>Target Center</h4>
                {/* local */}
                <p>Minneapolis, Minnesota</p>
              </div>

              <div className={S.BoxInfoStadio1}>
                <i class="bi bi-house"></i>
                <p>Capacidade: 20.000</p>
              </div>
              <div className={S.BoxInfoStadio}>
                <i class="bi bi-list-stars"></i>
                <p>Time: Minnesota Timberwolves</p>
              </div>
            </div>

            <div className={S.BoxCardsQuadra}>
              <div className={S.ImgCardsQuadra}>
                <img src={Celtics} alt="" />
              </div>
              <div className={S.BoxNameStadio}>
                {/* nome da Arena */}
                <h4>TD Garden</h4>
                {/* local */}
                <p>Boston, Massachusetts</p>
              </div>

              <div className={S.BoxInfoStadio1}>
                <i class="bi bi-house"></i>
                <p>Capacidade: 18.624</p>
              </div>
              <div className={S.BoxInfoStadio}>
                <i class="bi bi-list-stars"></i>
                <p>Time: Boston Celtics</p>
              </div>
            </div>

            <div className={S.BoxCardsQuadra}>
              <div className={S.ImgCardsQuadra}>
                <img src={Rockets} alt="" />
              </div>
              <div className={S.BoxNameStadio}>
                {/* nome da Arena */}
                <h4>Toyota Center</h4>
                {/* local */}
                <p>Houston, Texas</p>
              </div>

              <div className={S.BoxInfoStadio1}>
                <i class="bi bi-house"></i>
                <p>Capacidade: 18.055</p>
              </div>
              <div className={S.BoxInfoStadio}>
                <i class="bi bi-list-stars"></i>
                <p>Time: Houston Rockets</p>
              </div>
            </div>

            <div className={S.BoxCardsQuadra}>
              <div className={S.ImgCardsQuadra}>
                <img src={Bulls} alt="" />
              </div>
              <div className={S.BoxNameStadio}>
                {/* nome da Arena */}
                <h4>United Center</h4>
                {/* local */}
                <p>Chicago, Ilinois</p>
              </div>

              <div className={S.BoxInfoStadio1}>
                <i class="bi bi-house"></i>
                <p>Capacidade: 20.917</p>
              </div>
              <div className={S.BoxInfoStadio}>
                <i class="bi bi-list-stars"></i>
                <p>Time: Chicago Bulls</p>
              </div>
            </div>

            <div className={S.BoxCardsQuadra}>
              <div className={S.ImgCardsQuadra}>
                <img src={Philadelphia} alt="" />
              </div>
              <div className={S.BoxNameStadio}>
                {/* nome da Arena */}
                <h4>Wells Fargo Center</h4>
                {/* local */}
                <p>Filadélfia, Pensilvânia</p>
              </div>

              <div className={S.BoxInfoStadio1}>
                <i class="bi bi-house"></i>
                <p>Capacidade: 20.007</p>
              </div>
              <div className={S.BoxInfoStadio}>
                <i class="bi bi-list-stars"></i>
                <p>Time: Philadelphia 76ers</p>
              </div>
            </div>

            <div className={S.BoxCardsQuadra}>
              <div className={S.ImgCardsQuadra}>
                <img src={Memphis} alt="" />
              </div>
              <div className={S.BoxNameStadio}>
                {/* nome da Arena */}
                <h4>FedExForum</h4>
                {/* local */}
                <p>Memphis, Tennessee</p>
              </div>

              <div className={S.BoxInfoStadio1}>
                <i class="bi bi-house"></i>
                <p>Capacidade: 18.119</p>
              </div>
              <div className={S.BoxInfoStadio}>
                <i class="bi bi-list-stars"></i>
                <p>Time: Memphis Grizzlies</p>
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
