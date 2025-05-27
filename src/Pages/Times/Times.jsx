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
          <section className={S.CardsAtletasNBA}>
            <div className={S.BoxImgAtletaNBA}>
              <div className={S.LogoAtletasNBA}>
                <img src={Lakers} alt="" />
              </div>
              <div className={S.BoxAtletaNba}>
                <img
                  className={S.ImgAtletaNBA}
                  src="https://www.rollingstone.com/wp-content/uploads/2023/02/LeBron-James-Breaks-NBA-Scoring-Record.jpg"
                  alt=""
                />
              </div>
              <div className={S.BoxInfoAtletaNBA}>
                <h4>
                  <span> Lebron James</span>
                </h4>
                <p>Altura: 2,06 m</p>
                <p>Peso: 113,4 Kg</p>
                <p>Posição: SF, PG, PF</p>
                <p>Idade: 40 Anos</p>
              </div>
              <div className={S.BoxTitulosAtletas}>
                <p>
                  <span>Título</span> da NBA: 4(2012/2013/2016/2020)/{" "}
                  <span>MVP</span> das Finais: 4/ <span>MVP</span> da Temporada:
                  4/ <span>All-Star:</span> 20 vezes/ Copa da NBA: 1(2023)/
                  <span> Maior Pontuador</span> da Historia da NBA +50mil pts/
                  <span>Único</span> com 30.000+ pts, 10.000+ reb 10.000+
                  assistências
                </p>
              </div>
            </div>
          </section>

          <section className={S.CardsAtletasNBA}>
            <div className={S.BoxImgAtletaNBA}>
              <div className={S.LogoAtletasNBA}>
                <img src={Denver} alt="" />
              </div>
              <div className={S.BoxAtletaNba}>
                <img
                  className={S.ImgAtletaNBA}
                  src="https://www.denverpost.com/wp-content/uploads/2023/01/TDP-L-NUGGETS-CLIPPERS_AAO9421xx.jpg?w=660"
                  alt=""
                />
              </div>
              <div className={S.BoxInfoAtletaNBA}>
                <h4>
                  <span> Nikola Jokić</span>
                </h4>
                <p>Altura: 2,11m</p>
                <p>Peso: 129Kg</p>
                <p>Posição: C</p>
                <p>Idade: 30 Anos</p>
              </div>
              <div className={S.BoxTitulosAtletas}>
                <p>
                  <span>Título</span> da NBA: 1(2023)/
                  <span> MVP</span> das Finais: 2/ <span>MVP</span> da
                  Temporada: 2/ <span>All-Star: </span>6 vezes
                </p>
              </div>
            </div>
          </section>

          <section className={S.CardsAtletasNBA}>
            <div className={S.BoxImgAtletaNBA}>
              <div className={S.LogoAtletasNBA}>
                <img src={Thunder} alt="" />
              </div>
              <div className={S.BoxAtletaNba}>
                <img
                  className={S.ImgAtletaNBA}
                  src="https://hoopshype.com/wp-content/uploads/sites/92/2022/09/i_c8_a9_96_shai-gilgeous-alexander.png?w=1200"
                  alt=""
                />
              </div>
              <div className={S.BoxInfoAtletaNBA}>
                <h4>
                  <span> Shai Gilgeous-Alexander</span>
                </h4>
                <p>Altura: ?</p>
                <p>Peso: ?</p>
                <p>Posição: ?</p>
                <p>Idade: ?</p>
              </div>
              <div>
                <p>?</p>
              </div>
            </div>
          </section>

          <section className={S.CardsAtletasNBA}>
            <div className={S.BoxImgAtletaNBA}>
              <div className={S.LogoAtletasNBA}>
                <img src={Bucks} alt="" />
              </div>
              <div className={S.BoxAtletaNba}>
                <img
                  className={S.ImgAtletaNBA}
                  src="https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/3032977.png"
                  alt=""
                />
              </div>
              <div className={S.BoxInfoAtletaNBA}>
                <h4>
                  <span> Giannis Antetokounmpo </span>
                </h4>
                <p>Altura: ?</p>
                <p>Peso: ?</p>
                <p>Posição: ?</p>
                <p>Idade: ?</p>
              </div>
              <div>
                <p>?</p>
              </div>
            </div>
          </section>

          <section className={S.CardsAtletasNBA}>
            <div className={S.BoxImgAtletaNBA}>
              <div className={S.LogoAtletasNBA}>
                <img src={Wolves} alt="" />
              </div>
              <div className={S.BoxAtletaNba}>
                <img
                  className={S.ImgAtletaNBA}
                  src="https://tse3.mm.bing.net/th?id=OIP.tWS03W4eRu0csJ-k6QMUAwHaE7&pid=Api&P=0&h=180"
                  alt=""
                />
              </div>
              <div className={S.BoxInfoAtletaNBA}>
                <h4>
                  <span> Anthony Edwards</span>
                </h4>
                <p>Altura: ?</p>
                <p>Peso: ?</p>
                <p>Posição: ?</p>
                <p>Idade: ?</p>
              </div>
              <div>
                <p>?</p>
              </div>
            </div>
          </section>

          <section className={S.CardsAtletasNBA}>
            <div className={S.BoxImgAtletaNBA}>
              <div className={S.LogoAtletasNBA}>
                <img src={Celtics} alt="" />
              </div>
              <div className={S.BoxAtletaNba}>
                <img
                  className={S.ImgAtletaNBA}
                  src="https://tse3.mm.bing.net/th?id=OIP.yE4t0ZL7CbgWkqtE06DofQHaE5&pid=Api&P=0&h=180"
                  alt=""
                />
              </div>
              <div className={S.BoxInfoAtletaNBA}>
                <h4>
                  <span> Jayson Tatum </span>
                </h4>
                <p>Altura: ?</p>
                <p>Peso: ?</p>
                <p>Posição: ?</p>
                <p>Idade: ?</p>
              </div>
              <div>
                <p>?</p>
              </div>
            </div>
          </section>

          <section className={S.CardsAtletasNBA}>
            <div className={S.BoxImgAtletaNBA}>
              <div className={S.LogoAtletasNBA}>
                <img src={Suns} alt="" />
              </div>
              <div className={S.BoxAtletaNba}>
                <img
                  className={S.ImgAtletaNBA}
                  src="https://media.kjzz.org/s3fs-public/styles/juicebox_large/public/kevin-durant-2-20230217.jpg?itok=tdOgaU0T"
                  alt=""
                />
              </div>
              <div className={S.BoxInfoAtletaNBA}>
                <h4>
                  <span> Kevin Durant </span>
                </h4>
                <p>Altura: ?</p>
                <p>Peso: ?</p>
                <p>Posição: ?</p>
                <p>Idade: ?</p>
              </div>
              <div>
                <p>?</p>
              </div>
            </div>
          </section>

          <section className={S.CardsAtletasNBA}>
            <div className={S.BoxImgAtletaNBA}>
              <div className={S.LogoAtletasNBA}>
                <img src={Warriors} alt="" />
              </div>
              <div className={S.BoxAtletaNba}>
                <img
                  className={S.ImgAtletaNBA}
                  src="https://tse1.mm.bing.net/th?id=OIP.4aZfcn1DLc3ZkoLSELZGxwHaEc&pid=Api&P=0&h=180"
                  alt=""
                />
              </div>
              <div className={S.BoxInfoAtletaNBA}>
                <h4>
                  <span>Stephen Curry </span>
                </h4>
                <p>Altura: ?</p>
                <p>Peso: ?</p>
                <p>Posição: ?</p>
                <p>Idade: ?</p>
              </div>
              <div>
                <p>?</p>
              </div>
            </div>
          </section>

          <section className={S.CardsAtletasNBA}>
            <div className={S.BoxImgAtletaNBA}>
              <div className={S.LogoAtletasNBA}>
                <img src={Philadelphia} alt="" />
              </div>
              <div className={S.BoxAtletaNba}>
                <img
                  className={S.ImgAtletaNBA}
                  src="https://www.si.com/.image/t_share/MTk3NjY2NjY2NzU3MjM2NTMw/usatsi_19685662_168388689_lowres.jpg"
                  alt=""
                />
              </div>
              <div className={S.BoxInfoAtletaNBA}>
                <h4>
                  <span> Joel Embiid</span>
                </h4>
                <p>Altura: ?</p>
                <p>Peso: ?</p>
                <p>Posição: ?</p>
                <p>Idade: ?</p>
              </div>
              <div>
                <p>?</p>
              </div>
            </div>
          </section>

          <section className={S.CardsAtletasNBA}>
            <div className={S.BoxImgAtletaNBA}>
              <div className={S.LogoAtletasNBA}>
                <img src={Spurs} alt="" />
              </div>
              <div className={S.BoxAtletaNba}>
                <img
                  className={S.ImgAtletaNBA}
                  src="https://static0.givemesportimages.com/wordpress/wp-content/uploads/2023/07/victor-wembanyama-poses-ahead-of-the-nba-2023-draft.jpg"
                  alt=""
                />
              </div>
              <div className={S.BoxInfoAtletaNBA}>
                <h4>
                  <span> Victor Wembanyama </span>
                </h4>
                <p>Altura: ?</p>
                <p>Peso: ?</p>
                <p>Posição: ?</p>
                <p>Idade: ?</p>
              </div>
              <div>
                <p>?</p>
              </div>
            </div>
          </section>

          <section className={S.CardsAtletasNBA}>
            <div className={S.BoxImgAtletaNBA}>
              <div className={S.LogoAtletasNBA}>
                <img src={Lakers} alt="" />
              </div>
              <div className={S.BoxAtletaNba}>
                <img
                  className={S.ImgAtletaNBA}
                  src="https://media2.ledevoir.com/images_galerie/nwd_1593243_1233986/image.jpg"
                  alt=""
                />
              </div>
              <div className={S.BoxInfoAtletaNBA}>
                <h4>
                  <span> Luka Dončić </span>
                </h4>
                <p>Altura: ?</p>
                <p>Peso: ?</p>
                <p>Posição: ?</p>
                <p>Idade: ?</p>
              </div>
              <div>
                <p>?</p>
              </div>
            </div>
          </section>

          <section className={S.CardsAtletasNBA}>
            <div className={S.BoxImgAtletaNBA}>
              <div className={S.LogoAtletasNBA}>
                <img src={Pistons} alt="" />
              </div>
              <div className={S.BoxAtletaNba}>
                <img
                  className={S.ImgAtletaNBA}
                  src="https://library.sportingnews.com/2022-01/cade-cunningham_roushvx0s26s1jcznc2nay8pd.jpg"
                  alt=""
                />
              </div>
              <div className={S.BoxInfoAtletaNBA}>
                <h4>
                  <span> Cade Cunningham </span>
                </h4>
                <p>Altura: ?</p>
                <p>Peso: ?</p>
                <p>Posição: ?</p>
                <p>Idade: ?</p>
              </div>
              <div>
                <p>?</p>
              </div>
            </div>
          </section>

          <section className={S.CardsAtletasNBA}>
            <div className={S.BoxImgAtletaNBA}>
              <div className={S.LogoAtletasNBA}>
                <img src={Indiana} alt="" />
              </div>
              <div className={S.BoxAtletaNba}>
                <img
                  className={S.ImgAtletaNBA}
                  src="https://cdn.theathletic.com/cdn-cgi/image/width=1920,format=auto/https://cdn.theathletic.com/app/uploads/2022/02/28174303/GettyImages-1372999214-scaled.jpg"
                  alt=""
                />
              </div>
              <div className={S.BoxInfoAtletaNBA}>
                <h4>
                  <span> Tyrese Haliburton </span>
                </h4>
                <p>Altura: ?</p>
                <p>Peso: ?</p>
                <p>Posição: ?</p>
                <p>Idade: ?</p>
              </div>
              <div>
                <p>?</p>
              </div>
            </div>
          </section>

          <section className={S.CardsAtletasNBA}>
            <div className={S.BoxImgAtletaNBA}>
              <div className={S.LogoAtletasNBA}>
                <img src={Memphis} alt="" />
              </div>
              <div className={S.BoxAtletaNba}>
                <img
                  className={S.ImgAtletaNBA}
                  src="https://e0.365dm.com/21/10/2048x1152/skysports-jaren-jackson-jr_5550931.jpg?20211018181614"
                  alt=""
                />
              </div>
              <div className={S.BoxInfoAtletaNBA}>
                <h4>
                  <span> Jaren Jackson Jr. </span>
                </h4>
                <p>Altura: ?</p>
                <p>Peso: ?</p>
                <p>Posição: ?</p>
                <p>Idade: ?</p>
              </div>
              <div>
                <p>?</p>
              </div>
            </div>
          </section>

          <section className={S.CardsAtletasNBA}>
            <div className={S.BoxImgAtletaNBA}>
              <div className={S.LogoAtletasNBA}>
                <img src={Suns} alt="" />
              </div>
              <div className={S.BoxAtletaNba}>
                <img
                  className={S.ImgAtletaNBA}
                  src="https://www.si.com/.image/t_share/MTk3NzQ0OTA0OTU1MjQyMjkw/devin-booker.png"
                  alt=""
                />
              </div>
              <div className={S.BoxInfoAtletaNBA}>
                <h4>
                  <span> Devin Booker </span>
                </h4>
                <p>Altura: ?</p>
                <p>Peso: ?</p>
                <p>Posição: ?</p>
                <p>Idade: ?</p>
              </div>
              <div>
                <p>?</p>
              </div>
            </div>
          </section>

          <section className={S.CardsAtletasNBA}>
            <div className={S.BoxImgAtletaNBA}>
              <div className={S.LogoAtletasNBA}>
                <img src={Warriors} alt="" />
              </div>
              <div className={S.BoxAtletaNba}>
                <img
                  className={S.ImgAtletaNBA}
                  src="https://athlonsports.com/.image/t_share/MjEyOTU2MTcxNTg0MTUzMjE2/usatsi_25425497.jpg"
                  alt=""
                />
              </div>
              <div className={S.BoxInfoAtletaNBA}>
                <h4>
                  <span> Jimmy Butler </span>
                </h4>
                <p>Altura: ?</p>
                <p>Peso: ?</p>
                <p>Posição: ?</p>
                <p>Idade: ?</p>
              </div>
              <div>
                <p>?</p>
              </div>
            </div>
          </section>

          <section className={S.CardsAtletasNBA}>
            <div className={S.BoxImgAtletaNBA}>
              <div className={S.LogoAtletasNBA}>
                <img src={Philadelphia} alt="" />
              </div>
              <div className={S.BoxAtletaNba}>
                <img
                  className={S.ImgAtletaNBA}
                  src="https://jumperbrasil.com.br/wp-content/uploads/2024/08/Paul-George-1.webp"
                  alt=""
                />
              </div>
              <div className={S.BoxInfoAtletaNBA}>
                <h4>
                  <span> Paul George </span>
                </h4>
                <p>Altura: ?</p>
                <p>Peso: ?</p>
                <p>Posição: ?</p>
                <p>Idade: ?</p>
              </div>
              <div>
                <p>?</p>
              </div>
            </div>
          </section>

          <section className={S.CardsAtletasNBA}>
            <div className={S.BoxImgAtletaNBA}>
              <div className={S.LogoAtletasNBA}>
                <img src={Knicks} alt="" />
              </div>
              <div className={S.BoxAtletaNba}>
                <img
                  className={S.ImgAtletaNBA}
                  src="https://www.hdwallpapers.in/download/lebron_james_american_basketball_player-wide.jpg"
                  alt=""
                />
              </div>
              <div className={S.BoxInfoAtletaNBA}>
                <h4>
                  <span> Karl-Anthony Towns </span>
                </h4>
                <p>Altura: ?</p>
                <p>Peso: ?</p>
                <p>Posição: ?</p>
                <p>Idade: ?</p>
              </div>
              <div>
                <p>?</p>
              </div>
            </div>
          </section>

          <section className={S.CardsAtletasNBA}>
            <div className={S.BoxImgAtletaNBA}>
              <div className={S.LogoAtletasNBA}>
                <img src={Memphis} alt="" />
              </div>
              <div className={S.BoxAtletaNba}>
                <img
                  className={S.ImgAtletaNBA}
                  src="https://www.hdwallpapers.in/download/lebron_james_american_basketball_player-wide.jpg"
                  alt=""
                />
              </div>
              <div className={S.BoxInfoAtletaNBA}>
                <h4>
                  <span> Ja Morant</span>
                </h4>
                <p>Altura: ?</p>
                <p>Peso: ?</p>
                <p>Posição: ?</p>
                <p>Idade: ?</p>
              </div>
              <div>
                <p>?</p>
              </div>
            </div>
          </section>

          <section className={S.CardsAtletasNBA}>
            <div className={S.BoxImgAtletaNBA}>
              <div className={S.LogoAtletasNBA}>
                <img src={Knicks} alt="" />
              </div>
              <div className={S.BoxAtletaNba}>
                <img
                  className={S.ImgAtletaNBA}
                  src="https://www.hdwallpapers.in/download/lebron_james_american_basketball_player-wide.jpg"
                  alt=""
                />
              </div>
              <div className={S.BoxInfoAtletaNBA}>
                <h4>
                  <span> Jalen Brunson </span>
                </h4>
                <p>Altura: ?</p>
                <p>Peso: ?</p>
                <p>Posição: ?</p>
                <p>Idade: ?</p>
              </div>
              <div>
                <p>?</p>
              </div>
            </div>
          </section>

          <section className={S.CardsAtletasNBA}>
            <div className={S.BoxImgAtletaNBA}>
              <div className={S.LogoAtletasNBA}>
                <img src={Bucks} alt="" />
              </div>
              <div className={S.BoxAtletaNba}>
                <img
                  className={S.ImgAtletaNBA}
                  src="https://www.hdwallpapers.in/download/lebron_james_american_basketball_player-wide.jpg"
                  alt=""
                />
              </div>
              <div className={S.BoxInfoAtletaNBA}>
                <h4>
                  <span> Damian Lillard </span>
                </h4>
                <p>Altura: ?</p>
                <p>Peso: ?</p>
                <p>Posição: ?</p>
                <p>Idade: ?</p>
              </div>
              <div>
                <p>?</p>
              </div>
            </div>
          </section>

          <section className={S.CardsAtletasNBA}>
            <div className={S.BoxImgAtletaNBA}>
              <div className={S.LogoAtletasNBA}>
                <img src={Dallas} alt="" />
              </div>
              <div className={S.BoxAtletaNba}>
                <img
                  className={S.ImgAtletaNBA}
                  src="https://www.hdwallpapers.in/download/lebron_james_american_basketball_player-wide.jpg"
                  alt=""
                />
              </div>
              <div className={S.BoxInfoAtletaNBA}>
                <h4>
                  <span> Anthony Davis</span>
                </h4>
                <p>Altura: ?</p>
                <p>Peso: ?</p>
                <p>Posição: ?</p>
                <p>Idade: ?</p>
              </div>
              <div>
                <p>?</p>
              </div>
            </div>
          </section>

          <section className={S.CardsAtletasNBA}>
            <div className={S.BoxImgAtletaNBA}>
              <div className={S.LogoAtletasNBA}>
                <img src={Cavs} alt="" />
              </div>
              <div className={S.BoxAtletaNba}>
                <img
                  className={S.ImgAtletaNBA}
                  src="https://www.hdwallpapers.in/download/lebron_james_american_basketball_player-wide.jpg"
                  alt=""
                />
              </div>
              <div className={S.BoxInfoAtletaNBA}>
                <h4>
                  <span> Donovan Mitchell </span>
                </h4>
                <p>Altura: ?</p>
                <p>Peso: ?</p>
                <p>Posição: ?</p>
                <p>Idade: ?</p>
              </div>
              <div>
                <p>?</p>
              </div>
            </div>
          </section>

          <section className={S.CardsAtletasNBA}>
            <div className={S.BoxImgAtletaNBA}>
              <div className={S.LogoAtletasNBA}>
                <img src={Celtics} alt="" />
              </div>
              <div className={S.BoxAtletaNba}>
                <img
                  className={S.ImgAtletaNBA}
                  src="https://www.hdwallpapers.in/download/lebron_james_american_basketball_player-wide.jpg"
                  alt=""
                />
              </div>
              <div className={S.BoxInfoAtletaNBA}>
                <h4>
                  <span> Jaylen Brown </span>
                </h4>
                <p>Altura: ?</p>
                <p>Peso: ?</p>
                <p>Posição: ?</p>
                <p>Idade: ?</p>
              </div>
              <div>
                <p>?</p>
              </div>
            </div>
          </section>

          <section className={S.CardsAtletasNBA}>
            <div className={S.BoxImgAtletaNBA}>
              <div className={S.LogoAtletasNBA}>
                <img src={Dallas} alt="" />
              </div>
              <div className={S.BoxAtletaNba}>
                <img
                  className={S.ImgAtletaNBA}
                  src="https://www.hdwallpapers.in/download/lebron_james_american_basketball_player-wide.jpg"
                  alt=""
                />
              </div>
              <div className={S.BoxInfoAtletaNBA}>
                <h4>
                  <span> Kyrie Irving</span>
                </h4>
                <p>Altura: ?</p>
                <p>Peso: ?</p>
                <p>Posição: ?</p>
                <p>Idade: ?</p>
              </div>
              <div>
                <p>?</p>
              </div>
            </div>
          </section>

          <section className={S.CardsAtletasNBA}>
            <div className={S.BoxImgAtletaNBA}>
              <div className={S.LogoAtletasNBA}>
                <img src={Magic} alt="" />
              </div>
              <div className={S.BoxAtletaNba}>
                <img
                  className={S.ImgAtletaNBA}
                  src="https://www.hdwallpapers.in/download/lebron_james_american_basketball_player-wide.jpg"
                  alt=""
                />
              </div>
              <div className={S.BoxInfoAtletaNBA}>
                <h4>
                  <span> Paolo Banchero</span>
                </h4>
                <p>Altura: ?</p>
                <p>Peso: ?</p>
                <p>Posição: ?</p>
                <p>Idade: ?</p>
              </div>
              <div>
                <p>?</p>
              </div>
            </div>
          </section>

          <section className={S.CardsAtletasNBA}>
            <div className={S.BoxImgAtletaNBA}>
              <div className={S.LogoAtletasNBA}>
                <img src={Cavs} alt="" />
              </div>
              <div className={S.BoxAtletaNba}>
                <img
                  className={S.ImgAtletaNBA}
                  src="https://www.hdwallpapers.in/download/lebron_james_american_basketball_player-wide.jpg"
                  alt=""
                />
              </div>
              <div className={S.BoxInfoAtletaNBA}>
                <h4>
                  <span> Evan Mobley</span>
                </h4>
                <p>Altura: ?</p>
                <p>Peso: ?</p>
                <p>Posição: ?</p>
                <p>Idade: ?</p>
              </div>
              <div>
                <p>?</p>
              </div>
            </div>
          </section>

          <section className={S.CardsAtletasNBA}>
            <div className={S.BoxImgAtletaNBA}>
              <div className={S.LogoAtletasNBA}>
                <img src={Magic} alt="" />
              </div>
              <div className={S.BoxAtletaNba}>
                <img
                  className={S.ImgAtletaNBA}
                  src="https://www.hdwallpapers.in/download/lebron_james_american_basketball_player-wide.jpg"
                  alt=""
                />
              </div>
              <div className={S.BoxInfoAtletaNBA}>
                <h4>
                  <span> Franz Wagner</span>
                </h4>
                <p>Altura: ?</p>
                <p>Peso: ?</p>
                <p>Posição: ?</p>
                <p>Idade: ?</p>
              </div>
              <div>
                <p>?</p>
              </div>
            </div>
          </section>

          <section className={S.CardsAtletasNBA}>
            <div className={S.BoxImgAtletaNBA}>
              <div className={S.LogoAtletasNBA}>
                <img src={Rockets} alt="" />
              </div>
              <div className={S.BoxAtletaNba}>
                <img
                  className={S.ImgAtletaNBA}
                  src="https://www.hdwallpapers.in/download/lebron_james_american_basketball_player-wide.jpg"
                  alt=""
                />
              </div>
              <div className={S.BoxInfoAtletaNBA}>
                <h4>
                  <span> Alperen Şengün</span>
                </h4>
                <p>Altura: ?</p>
                <p>Peso: ?</p>
                <p>Posição: ?</p>
                <p>Idade: ?</p>
              </div>
              <div>
                <p>?</p>
              </div>
            </div>
          </section>

          <section className={S.CardsAtletasNBA}>
            <div className={S.BoxImgAtletaNBA}>
              <div className={S.LogoAtletasNBA}>
                <img src={Kings} alt="" />
              </div>
              <div className={S.BoxAtletaNba}>
                <img
                  className={S.ImgAtletaNBA}
                  src="https://www.hdwallpapers.in/download/lebron_james_american_basketball_player-wide.jpg"
                  alt=""
                />
              </div>
              <div className={S.BoxInfoAtletaNBA}>
                <h4>
                  <span> Domantas Sabonis</span>
                </h4>
                <p>Altura: ?</p>
                <p>Peso: ?</p>
                <p>Posição: ?</p>
                <p>Idade: ?</p>
              </div>
              <div>
                <p>?</p>
              </div>
            </div>
          </section>

          <section className={S.CardsAtletasNBA}>
            <div className={S.BoxImgAtletaNBA}>
              <div className={S.LogoAtletasNBA}>
                <img src={Hawks} alt="" />
              </div>
              <div className={S.BoxAtletaNba}>
                <img
                  className={S.ImgAtletaNBA}
                  src="https://www.hdwallpapers.in/download/lebron_james_american_basketball_player-wide.jpg"
                  alt=""
                />
              </div>
              <div className={S.BoxInfoAtletaNBA}>
                <h4>
                  <span> Trae Young</span>
                </h4>
                <p>Altura: ?</p>
                <p>Peso: ?</p>
                <p>Posição: ?</p>
                <p>Idade: ?</p>
              </div>
              <div>
                <p>?</p>
              </div>
            </div>
          </section>

          <section className={S.CardsAtletasNBA}>
            <div className={S.BoxImgAtletaNBA}>
              <div className={S.LogoAtletasNBA}>
                <img src={Cavs} alt="" />
              </div>
              <div className={S.BoxAtletaNba}>
                <img
                  className={S.ImgAtletaNBA}
                  src="https://www.hdwallpapers.in/download/lebron_james_american_basketball_player-wide.jpg"
                  alt=""
                />
              </div>
              <div className={S.BoxInfoAtletaNBA}>
                <h4>
                  <span> Darius Garland</span>
                </h4>
                <p>Altura: ?</p>
                <p>Peso: ?</p>
                <p>Posição: ?</p>
                <p>Idade: ?</p>
              </div>
              <div>
                <p>?</p>
              </div>
            </div>
          </section>

          <section className={S.CardsAtletasNBA}>
            <div className={S.BoxImgAtletaNBA}>
              <div className={S.LogoAtletasNBA}>
                <img src={Heat} alt="" />
              </div>
              <div className={S.BoxAtletaNba}>
                <img
                  className={S.ImgAtletaNBA}
                  src="https://www.hdwallpapers.in/download/lebron_james_american_basketball_player-wide.jpg"
                  alt=""
                />
              </div>
              <div className={S.BoxInfoAtletaNBA}>
                <h4>
                  <span> Bam Adebayo</span>
                </h4>
                <p>Altura: ?</p>
                <p>Peso: ?</p>
                <p>Posição: ?</p>
                <p>Idade: ?</p>
              </div>
              <div>
                <p>?</p>
              </div>
            </div>
          </section>

          <section className={S.CardsAtletasNBA}>
            <div className={S.BoxImgAtletaNBA}>
              <div className={S.LogoAtletasNBA}>
                <img src={Pelicans} alt="" />
              </div>
              <div className={S.BoxAtletaNba}>
                <img
                  className={S.ImgAtletaNBA}
                  src="https://www.hdwallpapers.in/download/lebron_james_american_basketball_player-wide.jpg"
                  alt=""
                />
              </div>
              <div className={S.BoxInfoAtletaNBA}>
                <h4>
                  <span> Zion Williamson</span>
                </h4>
                <p>Altura: ?</p>
                <p>Peso: ?</p>
                <p>Posição: ?</p>
                <p>Idade: ?</p>
              </div>
              <div>
                <p>?</p>
              </div>
            </div>
          </section>

          <section className={S.CardsAtletasNBA}>
            <div className={S.BoxImgAtletaNBA}>
              <div className={S.LogoAtletasNBA}>
                <img src={Spurs} alt="" />
              </div>
              <div className={S.BoxAtletaNba}>
                <img
                  className={S.ImgAtletaNBA}
                  src="https://www.hdwallpapers.in/download/lebron_james_american_basketball_player-wide.jpg"
                  alt=""
                />
              </div>
              <div className={S.BoxInfoAtletaNBA}>
                <h4>
                  <span> De'Aaron Fox</span>
                </h4>
                <p>Altura: ?</p>
                <p>Peso: ?</p>
                <p>Posição: ?</p>
                <p>Idade: ?</p>
              </div>
              <div>
                <p>?</p>
              </div>
            </div>
          </section>

          <section className={S.CardsAtletasNBA}>
            <div className={S.BoxImgAtletaNBA}>
              <div className={S.LogoAtletasNBA}>
                <img src={Hornets} alt="" />
              </div>
              <div className={S.BoxAtletaNba}>
                <img
                  className={S.ImgAtletaNBA}
                  src="https://www.hdwallpapers.in/download/lebron_james_american_basketball_player-wide.jpg"
                  alt=""
                />
              </div>
              <div className={S.BoxInfoAtletaNBA}>
                <h4>
                  <span> LaMelo Ball</span>
                </h4>
                <p>Altura: ?</p>
                <p>Peso: ?</p>
                <p>Posição: ?</p>
                <p>Idade: ?</p>
              </div>
              <div>
                <p>?</p>
              </div>
            </div>
          </section>

          <section className={S.CardsAtletasNBA}>
            <div className={S.BoxImgAtletaNBA}>
              <div className={S.LogoAtletasNBA}>
                <img src={Raptors} alt="" />
              </div>
              <div className={S.BoxAtletaNba}>
                <img
                  className={S.ImgAtletaNBA}
                  src="https://www.hdwallpapers.in/download/lebron_james_american_basketball_player-wide.jpg"
                  alt=""
                />
              </div>
              <div className={S.BoxInfoAtletaNBA}>
                <h4>
                  <span> Brandon Ingram</span>
                </h4>
                <p>Altura: ?</p>
                <p>Peso: ?</p>
                <p>Posição: ?</p>
                <p>Idade: ?</p>
              </div>
              <div>
                <p>?</p>
              </div>
            </div>
          </section>

          <section className={S.CardsAtletasNBA}>
            <div className={S.BoxImgAtletaNBA}>
              <div className={S.LogoAtletasNBA}>
                <img src={Denver} alt="" />
              </div>
              <div className={S.BoxAtletaNba}>
                <img
                  className={S.ImgAtletaNBA}
                  src="https://www.hdwallpapers.in/download/lebron_james_american_basketball_player-wide.jpg"
                  alt=""
                />
              </div>
              <div className={S.BoxInfoAtletaNBA}>
                <h4>
                  <span> Jamal Murray</span>
                </h4>
                <p>Altura: ?</p>
                <p>Peso: ?</p>
                <p>Posição: ?</p>
                <p>Idade: ?</p>
              </div>
              <div>
                <p>?</p>
              </div>
            </div>
          </section>

          <section className={S.CardsAtletasNBA}>
            <div className={S.BoxImgAtletaNBA}>
              <div className={S.LogoAtletasNBA}>
                <img src={Knicks} alt="" />
              </div>
              <div className={S.BoxAtletaNba}>
                <img
                  className={S.ImgAtletaNBA}
                  src="https://www.hdwallpapers.in/download/lebron_james_american_basketball_player-wide.jpg"
                  alt=""
                />
              </div>
              <div className={S.BoxInfoAtletaNBA}>
                <h4>
                  <span> Mikal Bridges</span>
                </h4>
                <p>Altura: ?</p>
                <p>Peso: ?</p>
                <p>Posição: ?</p>
                <p>Idade: ?</p>
              </div>
              <div>
                <p>?</p>
              </div>
            </div>
          </section>

          <section className={S.CardsAtletasNBA}>
            <div className={S.BoxImgAtletaNBA}>
              <div className={S.LogoAtletasNBA}>
                <img src={Memphis} alt="" />
              </div>
              <div className={S.BoxAtletaNba}>
                <img
                  className={S.ImgAtletaNBA}
                  src="https://www.hdwallpapers.in/download/lebron_james_american_basketball_player-wide.jpg"
                  alt=""
                />
              </div>
              <div className={S.BoxInfoAtletaNBA}>
                <h4>
                  <span> Desmond Bane</span>
                </h4>
                <p>Altura: ?</p>
                <p>Peso: ?</p>
                <p>Posição: ?</p>
                <p>Idade: ?</p>
              </div>
              <div>
                <p>?</p>
              </div>
            </div>
          </section>

          <section className={S.CardsAtletasNBA}>
            <div className={S.BoxImgAtletaNBA}>
              <div className={S.LogoAtletasNBA}>
                <img src={Pelicans} alt="" />
              </div>
              <div className={S.BoxAtletaNba}>
                <img
                  className={S.ImgAtletaNBA}
                  src="https://www.hdwallpapers.in/download/lebron_james_american_basketball_player-wide.jpg"
                  alt=""
                />
              </div>
              <div className={S.BoxInfoAtletaNBA}>
                <h4>
                  <span> CJ McCollum</span>
                </h4>
                <p>Altura: ?</p>
                <p>Peso: ?</p>
                <p>Posição: ?</p>
                <p>Idade: ?</p>
              </div>
              <div>
                <p>?</p>
              </div>
            </div>
          </section>

          <section className={S.CardsAtletasNBA}>
            <div className={S.BoxImgAtletaNBA}>
              <div className={S.LogoAtletasNBA}>
                <img src={Heat} alt="" />
              </div>
              <div className={S.BoxAtletaNba}>
                <img
                  className={S.ImgAtletaNBA}
                  src="https://www.hdwallpapers.in/download/lebron_james_american_basketball_player-wide.jpg"
                  alt=""
                />
              </div>
              <div className={S.BoxInfoAtletaNBA}>
                <h4>
                  <span> Andrew Wiggins</span>
                </h4>
                <p>Altura: ?</p>
                <p>Peso: ?</p>
                <p>Posição: ?</p>
                <p>Idade: ?</p>
              </div>
              <div>
                <p>?</p>
              </div>
            </div>
          </section>

          <section className={S.CardsAtletasNBA}>
            <div className={S.BoxImgAtletaNBA}>
              <div className={S.LogoAtletasNBA}>
                <img src={Philadelphia} alt="" />
              </div>
              <div className={S.BoxAtletaNba}>
                <img
                  className={S.ImgAtletaNBA}
                  src="https://www.hdwallpapers.in/download/lebron_james_american_basketball_player-wide.jpg"
                  alt=""
                />
              </div>
              <div className={S.BoxInfoAtletaNBA}>
                <h4>
                  <span> Tyrese Maxey</span>
                </h4>
                <p>Altura: ?</p>
                <p>Peso: ?</p>
                <p>Posição: ?</p>
                <p>Idade: ?</p>
              </div>
              <div>
                <p>?</p>
              </div>
            </div>
          </section>

          <section className={S.CardsAtletasNBA}>
            <div className={S.BoxImgAtletaNBA}>
              <div className={S.LogoAtletasNBA}>
                <img src={Wolves} alt="" />
              </div>
              <div className={S.BoxAtletaNba}>
                <img
                  className={S.ImgAtletaNBA}
                  src="https://www.hdwallpapers.in/download/lebron_james_american_basketball_player-wide.jpg"
                  alt=""
                />
              </div>
              <div className={S.BoxInfoAtletaNBA}>
                <h4>
                  <span> Julius Randle</span>
                </h4>
                <p>Altura: ?</p>
                <p>Peso: ?</p>
                <p>Posição: ?</p>
                <p>Idade: ?</p>
              </div>
              <div>
                <p>?</p>
              </div>
            </div>
          </section>

          <section className={S.CardsAtletasNBA}>
            <div className={S.BoxImgAtletaNBA}>
              <div className={S.LogoAtletasNBA}>
                <img src={Celtics} alt="" />
              </div>
              <div className={S.BoxAtletaNba}>
                <img
                  className={S.ImgAtletaNBA}
                  src="https://www.hdwallpapers.in/download/lebron_james_american_basketball_player-wide.jpg"
                  alt=""
                />
              </div>
              <div className={S.BoxInfoAtletaNBA}>
                <h4>
                  <span> Kristaps Porziņģis</span>
                </h4>
                <p>Altura: ?</p>
                <p>Peso: ?</p>
                <p>Posição: ?</p>
                <p>Idade: ?</p>
              </div>
              <div>
                <p>?</p>
              </div>
            </div>
          </section>

          <section className={S.CardsAtletasNBA}>
            <div className={S.BoxImgAtletaNBA}>
              <div className={S.LogoAtletasNBA}>
                <img src={Rockets} alt="" />
              </div>
              <div className={S.BoxAtletaNba}>
                <img
                  className={S.ImgAtletaNBA}
                  src="https://www.hdwallpapers.in/download/lebron_james_american_basketball_player-wide.jpg"
                  alt=""
                />
              </div>
              <div className={S.BoxInfoAtletaNBA}>
                <h4>
                  <span>Fred VanVleet</span>
                </h4>
                <p>Altura: ?</p>
                <p>Peso: ?</p>
                <p>Posição: ?</p>
                <p>Idade: ?</p>
              </div>
              <div>
                <p>?</p>
              </div>
            </div>
          </section>

          <section className={S.CardsAtletasNBA}>
            <div className={S.BoxImgAtletaNBA}>
              <div className={S.LogoAtletasNBA}>
                <img src={Dallas} alt="" />
              </div>
              <div className={S.BoxAtletaNba}>
                <img
                  className={S.ImgAtletaNBA}
                  src="https://www.hdwallpapers.in/download/lebron_james_american_basketball_player-wide.jpg"
                  alt=""
                />
              </div>
              <div className={S.BoxInfoAtletaNBA}>
                <h4>
                  <span>Klay Thompson</span>
                </h4>
                <p>Altura: ?</p>
                <p>Peso: ?</p>
                <p>Posição: ?</p>
                <p>Idade: ?</p>
              </div>
              <div>
                <p>?</p>
              </div>
            </div>
          </section>
        </section>
      </main>
    </>
  );
}
