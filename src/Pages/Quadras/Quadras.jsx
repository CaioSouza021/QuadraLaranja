import S from "./Quadras.module.scss";
import "bootstrap-icons/font/bootstrap-icons.css";
import BG from "../../assets/img/Hero.jpg";
import Knicks from "../../assets/img/QuadraKnicks.png";

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
                <img src={Knicks} alt="" />
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
                <img src={Knicks} alt="" />
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
                <img src={Knicks} alt="" />
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
                <img src={Knicks} alt="" />
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
                <img src={Knicks} alt="" />
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
                <img src={Knicks} alt="" />
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
                <img src={Knicks} alt="" />
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
                <img src={Knicks} alt="" />
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
                <img src={Knicks} alt="" />
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
                <img src={Knicks} alt="" />
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
                <img src={Knicks} alt="" />
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
                <img src={Knicks} alt="" />
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
                <img src={Knicks} alt="" />
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
                <img src={Knicks} alt="" />
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
                <img src={Knicks} alt="" />
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
                <img src={Knicks} alt="" />
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
                <img src={Knicks} alt="" />
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
                <img src={Knicks} alt="" />
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
                <img src={Knicks} alt="" />
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
                <img src={Knicks} alt="" />
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
                <img src={Knicks} alt="" />
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
                <img src={Knicks} alt="" />
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
                <img src={Knicks} alt="" />
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
                <img src={Knicks} alt="" />
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
                <img src={Knicks} alt="" />
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
                <img src={Knicks} alt="" />
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
                <img src={Knicks} alt="" />
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
                <img src={Knicks} alt="" />
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
                <img src={Knicks} alt="" />
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
                <img src={Knicks} alt="" />
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
                <img src={Knicks} alt="" />
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
                <img src={Knicks} alt="" />
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
          </section>
        </div>
      </main>
    </>
  );
}
