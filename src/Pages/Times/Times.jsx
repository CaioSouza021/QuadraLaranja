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
                  <span>Título</span> da NBA: 4(2012/2013/2016/2020)/
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
              <div className={S.BoxTitulosAtletas}>
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
                  src="https://sports.inquirer.net/files/2021/11/063_1352747760-scaled.jpg"
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
              <div className={S.BoxTitulosAtletas}>
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
              <div className={S.BoxTitulosAtletas}>
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
              <div className={S.BoxTitulosAtletas}>
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
              <div className={S.BoxTitulosAtletas}>
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
              <div className={S.BoxTitulosAtletas}>
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
              <div className={S.BoxTitulosAtletas}>
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
              <div className={S.BoxTitulosAtletas}>
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
                  src="https://ichef.bbci.co.uk/ace/standard/1600/cpsprodpb/5ed6/live/d4fba1f0-e83b-11ef-a5f2-c764ce18a01f.jpg"
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
              <div className={S.BoxTitulosAtletas}>
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
              <div className={S.BoxTitulosAtletas}>
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
                <p>Altura: 1,88 m</p>
                <p>Peso: 91 kg</p>
                <p>Posição: PG</p>
                <p>Idade: 24</p>
              </div>
              <div className={S.BoxTitulosAtletas}>
                <p>
                  Jogador que Mais Evoluiu da NBA (2023–24)/ Prêmio de
                  Esportividade da NBA (2023–24)
                </p>
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
              <div className={S.BoxTitulosAtletas}>
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
                <p>Altura: 1,96 m</p>
                <p>Peso: 93 kg</p>
                <p>Posição: SG</p>
                <p>Idade: 28 anos</p>
              </div>
              <div className={S.BoxTitulosAtletas}>
                <p>
                  4× NBA All-Star/ All-NBA First Team/ All-NBA Third Team/NBA
                  All-Rookie First Team/Campeão do Three-Point Contest{" "}
                </p>
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
                <p>Altura: 2,01 m</p>
                <p>Peso: 104 kg</p>
                <p>Posição: SF</p>
                <p>Idade: 35 anos</p>
              </div>
              <div className={S.BoxTitulosAtletas}>
                <p>
                  6× NBA All-Star/ 5× All-NBA Team/ 5× NBA All-Defensive Team/
                  NBA Most Improved Player (2015)/ NBA Eastern Conference Finals
                  MVP (2023)
                </p>
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
                <p>Altura: 2,03 m</p>
                <p>Peso: 100 kg</p>
                <p>Posição: SF/SG</p>
                <p>Idade: 35 anos</p>
              </div>
              <div className={S.BoxTitulosAtletas}>
                <p>
                  8× NBA All-Star/ 6× All-NBA Team/ 4× NBA All-Defensive Team/
                  NBA Most Improved Player (2013)
                </p>
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
                  src="https://cdn1.nbaanalysis.net/uploads/16/2025/01/GettyImages-2191706970-1-1140x755.jpg"
                  alt=""
                />
              </div>
              <div className={S.BoxInfoAtletaNBA}>
                <h4>
                  <span> Karl-Anthony Towns </span>
                </h4>
                <p>Altura: 2,11 m</p>
                <p>Peso: 112 kg</p>
                <p>Posição: C/PF</p>
                <p>Idade: 29 anos</p>
              </div>
              <div className={S.BoxTitulosAtletas}>
                <p>
                  3× NBA All-Star/ 3× All-NBA Third Team/ NBA Rookie of the Year
                  (2016)/ Campeão do Three-Point Contest
                </p>
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
                  src="https://wallpapers.com/images/hd/ja-morant-1920-x-1080-background-eib12xt1a4lqef3z.jpg"
                  alt=""
                />
              </div>
              <div className={S.BoxInfoAtletaNBA}>
                <h4>
                  <span> Ja Morant</span>
                </h4>
                <p>Altura: 1,91 m</p>
                <p>Peso: 79 kg</p>
                <p>Posição: PG</p>
                <p>Idade: 25 anos</p>
              </div>
              <div className={S.BoxTitulosAtletas}>
                <p>
                  NBA Rookie of the Year (2020)/ 2× NBA All-Star/ All-NBA Second
                  Team
                </p>
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
                  src="https://nypost.com/wp-content/uploads/sites/2/2022/10/Jalen-Brunson-2-1.jpg?quality=75&strip=all"
                  alt=""
                />
              </div>
              <div className={S.BoxInfoAtletaNBA}>
                <h4>
                  <span> Jalen Brunson </span>
                </h4>
                <p>Altura: 1,88 m </p>
                <p>Peso: 86 kg</p>
                <p>Posição: PG</p>
                <p>Idade: 28 anos</p>
              </div>
              <div className={S.BoxTitulosAtletas}>
                <p>2× All-NBA Second Team/ NBA Clutch Player of the Year</p>
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
                  src="https://www.sportszion.com/wp-content/uploads/2024/03/damian_lillard_bucks_ap_wi_1116_23311562887561.webp"
                  alt=""
                />
              </div>
              <div className={S.BoxInfoAtletaNBA}>
                <h4>
                  <span> Damian Lillard </span>
                </h4>
                <p>Altura: 1,88 m </p>
                <p>Peso: 88 kg</p>
                <p>Posição: PG</p>
                <p>Idade: 34 anos</p>
              </div>
              <div className={S.BoxTitulosAtletas}>
                <p>
                  Campeão da NBA Cup (2024)/ 9× NBA All-Star/ NBA All-Star Game
                  MVP/ All-NBA First Team/ 4× All-NBA Second Team/ 2× All-NBA
                  Third Team/ NBA Rookie of the Year (2013)/ NBA All-Rookie
                  First Team/ 2× Campeão Three-Point Contest
                </p>
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
                  src="https://sportshub.cbsistatic.com/i/r/2025/02/08/2fd0b8ac-5ad7-4419-a281-1816ec761df6/thumbnail/1200x675/be9b50df2e59d1092ebf806f0c6a9750/anthony-davis-mavericks-g.jpg"
                  alt=""
                />
              </div>
              <div className={S.BoxInfoAtletaNBA}>
                <h4>
                  <span> Anthony Davis</span>
                </h4>
                <p>Altura: 2,08 m</p>
                <p>Peso: 114 kg</p>
                <p>Posição: C/PF</p>
                <p>Idade: 32 anos</p>
              </div>
              <div className={S.BoxTitulosAtletas}>
                <p>
                  Campeão da NBA (2020)/ 10× NBA All-Star/ NBA All-Star Game MVP
                  (2017)/ 4× All-NBA First Team/ 5× NBA All-Defensive Team/ 3×
                  Líder em bloqueios da NBA/ NBA All-Rookie First Team
                </p>
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
                  src="https://www.si.com/.image/t_share/MTk0ODk4MDg1NDcyNjQyMjEw/de6b9ddd-dd5e-420d-a501-d50d9c25ed45.jpg"
                  alt=""
                />
              </div>
              <div className={S.BoxInfoAtletaNBA}>
                <h4>
                  <span> Donovan Mitchell </span>
                </h4>
                <p>Altura: 1,91 m</p>
                <p>Peso: 97 kg</p>
                <p>Posição: SG/PG</p>
                <p>Idade: 28 anos</p>
              </div>
              <div className={S.BoxTitulosAtletas}>
                <p>
                  6× NBA All-Star/ All-NBA Second Team (2023)/ NBA All-Rookie
                  First Team (2018)
                </p>
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
                  src="https://cdn.nba.com/manage/2023/01/GettyImages-1455400887-scaled-e1673568422430.jpg"
                  alt=""
                />
              </div>
              <div className={S.BoxInfoAtletaNBA}>
                <h4>
                  <span> Jaylen Brown </span>
                </h4>
                <p>Altura: 1,98 m</p>
                <p>Peso: 101 kg</p>
                <p>Posição: SG/PG</p>
                <p>Idade: 28 anos</p>
              </div>
              <div className={S.BoxTitulosAtletas}>
                <p>
                  Campeão da NBA (2024)/ NBA Finals MVP (2024)/ 4× NBA All-Star/
                  All-NBA Second Team/ NBA All-Rookie Second Team
                </p>
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
                  src="https://assets.dmagstatic.com/wp-content/uploads/2023/03/USATSI_20170027-scaled.jpg"
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
              <div className={S.BoxTitulosAtletas}>
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
                  src="https://www.rappler.com/tachyon/2023/04/reuters-paolo-banchero-april-26-2023.jpg?resize=1396%2C826&zoom=1"
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
              <div className={S.BoxTitulosAtletas}>
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
                  src="https://e0.365dm.com/21/11/1600x900/skysports-cavaliers-evan-mobley_5578547.jpg?20211205151159"
                  alt=""
                />
              </div>
              <div className={S.BoxInfoAtletaNBA}>
                <h4>
                  <span> Evan Mobley</span>
                </h4>
                <p>Altura: 2,13 m</p>
                <p>Peso: 98 kg</p>
                <p>Posição: PF/C</p>
                <p>Idade: 23 anos</p>
              </div>
              <div className={S.BoxTitulosAtletas}>
                <p>NBA Defensive Player of the Year (2025)</p>
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
                  src="http://res.cloudinary.com/ybmedia/image/upload/c_crop,h_1123,w_2000,x_0,y_62/c_fill,f_auto,h_900,q_auto,w_1600/v1/m/4/7/474d8a06fd94314a2409874250e70f7db17dbc43/franz-wagner-proves-magic-two-future-stars.jpg"
                  alt=""
                />
              </div>
              <div className={S.BoxInfoAtletaNBA}>
                <h4>
                  <span> Franz Wagner</span>
                </h4>
                <p>Altura: 2,06 m</p>
                <p>Peso: 100 kg</p>
                <p>Posição: SF</p>
                <p>Idade: 23 anos</p>
              </div>
              <div className={S.BoxTitulosAtletas}>
                <p></p>
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
                  src="https://www.sportscasting.com/wp-content/uploads/2025/01/0x0.webp"
                  alt=""
                />
              </div>
              <div className={S.BoxInfoAtletaNBA}>
                <h4>
                  <span> Alperen Şengün</span>
                </h4>
                <p>Altura: 2,11 m</p>
                <p>Peso: 106 kg</p>
                <p>Posição: C</p>
                <p>Idade: 22 anos</p>
              </div>
              <div className={S.BoxTitulosAtletas}>
                <p></p>
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
                  src="https://cdn.i24news.tv/uploads/23/53/7e/df/75/c8/1e/a8/8b/1d/73/84/bc/e6/9a/8e/23537edf75c81ea88b1d7384bce69a8e.jpg?width=1000"
                  alt=""
                />
              </div>
              <div className={S.BoxInfoAtletaNBA}>
                <h4>
                  <span> Domantas Sabonis</span>
                </h4>
                <p>Altura: 2,11 m</p>
                <p>Peso: 109 kg </p>
                <p>Posição: C/PF</p>
                <p>Idade: 29 anos</p>
              </div>
              <div className={S.BoxTitulosAtletas}>
                <p>3× NBA All-Star/ NBA All-NBA Third Team (2023)</p>
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
                  src="https://static.foxnews.com/foxnews.com/content/uploads/2022/12/GettyImages-1245552227.jpg"
                  alt=""
                />
              </div>
              <div className={S.BoxInfoAtletaNBA}>
                <h4>
                  <span> Trae Young</span>
                </h4>
                <p>Altura: 1,85 m</p>
                <p>Peso: 74 kg</p>
                <p>Posição: PG</p>
                <p>Idade: 26 anos</p>
              </div>
              <div className={S.BoxTitulosAtletas}>
                <p>
                  4× NBA All-Star/ All-NBA Third Team (2022)/ NBA All-Rookie
                  First Team (2019)
                </p>
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
                  src="https://wallpaperaccess.com/full/8486878.jpg"
                  alt=""
                />
              </div>
              <div className={S.BoxInfoAtletaNBA}>
                <h4>
                  <span> Darius Garland</span>
                </h4>
                <p>Altura: 1,85 m</p>
                <p>Peso: 87 kg</p>
                <p>Posição: PG</p>
                <p>Idade: 25 anos</p>
              </div>
              <div className={S.BoxTitulosAtletas}>
                <p>2× NBA All-Star</p>
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
                  src="https://wallpapers.com/images/hd/bam-adebayo-slam-dunk-focus-shot-k5wv9m8p60oggjso.jpg"
                  alt=""
                />
              </div>
              <div className={S.BoxInfoAtletaNBA}>
                <h4>
                  <span> Bam Adebayo</span>
                </h4>
                <p>Altura: 2,06 m</p>
                <p>Peso: 116 kg</p>
                <p>Posição: C/PF</p>
                <p>Idade: 27 anos</p>
              </div>
              <div className={S.BoxTitulosAtletas}>
                <p>
                  3× NBA All-Star/ NBA All-Defensive First Team/ 4× NBA
                  All-Defensive Second Team
                </p>
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
                  src="https://www.casino.org/news/wp-content/uploads/2022/12/ZonDunkPelicansSuns.jpg"
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
              <div className={S.BoxTitulosAtletas}>
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
                  src="https://athlonsports.com/.image/t_share/MjEzMDkwMjcwOTMyMTE3MzQx/deaaron-fox.jpg"
                  alt=""
                />
              </div>
              <div className={S.BoxInfoAtletaNBA}>
                <h4>
                  <span> De'Aaron Fox</span>
                </h4>
                <p>Altura: 1,91 m</p>
                <p>Peso: 84 kg</p>
                <p>Posição: PG</p>
                <p>Idade: 27 anos</p>
              </div>
              <div className={S.BoxTitulosAtletas}>
                <p>
                  NBA All-Star (2023)/ NBA Clutch Player of the Year (2023)/
                  All-NBA Third Team (2023)/ Líder em roubos de bola na
                  temporada (2024)
                </p>
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
                  src="https://www.whittierdailynews.com/wp-content/uploads/2021/03/AP21073181373049.jpg?w=1280"
                  alt=""
                />
              </div>
              <div className={S.BoxInfoAtletaNBA}>
                <h4>
                  <span> LaMelo Ball</span>
                </h4>
                <p>Altura: 2,01 m</p>
                <p>Peso: 81 kg</p>
                <p>Posição: PG</p>
                <p>Idade: 23 anos</p>
              </div>
              <div className={S.BoxTitulosAtletas}>
                <p>NBA Rookie of the Year (2021)/ NBA All-Star (2022)</p>
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
                  src="https://athlonsports.com/.image/t_share/MjExNjczMTI5MjkyOTMzMDk2/brandon-ingram.jpg"
                  alt=""
                />
              </div>
              <div className={S.BoxInfoAtletaNBA}>
                <h4>
                  <span> Brandon Ingram</span>
                </h4>
                <p>Altura: 2,03 m</p>
                <p>Peso: 86 kg</p>
                <p>Posição: PF</p>
                <p>Idade: 27 anos</p>
              </div>
              <div className={S.BoxTitulosAtletas}>
                <p>NBA Most Improved Player (2020)/ NBA All-Star (2020)</p>
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
                  src="https://www.thecoldwire.com/wp-content/uploads/2023/03/Jamal-Murray-scaled.jpg"
                  alt=""
                />
              </div>
              <div className={S.BoxInfoAtletaNBA}>
                <h4>
                  <span> Jamal Murray</span>
                </h4>
                <p>Altura: 1,93 m</p>
                <p>Peso: 98 kg</p>
                <p>Posição: PG</p>
                <p>Idade: 28 anos</p>
              </div>
              <div className={S.BoxTitulosAtletas}>
                <p>Campeão da NBA (2023)</p>
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
                  src="https://cf-img-a-in.tosshub.com/lingo/stak/images/story/202505/6830ad305fbf8-mikal-bridges-in-the-frame-231522632-16x9.png?size=1600:900"
                  alt=""
                />
              </div>
              <div className={S.BoxInfoAtletaNBA}>
                <h4>
                  <span> Mikal Bridges</span>
                </h4>
                <p>Altura: 1,98 m</p>
                <p>Peso: 95 kg</p>
                <p>Posição: SF</p>
                <p>Idade: 28 anos</p>
              </div>
              <div className={S.BoxTitulosAtletas}>
                <p>
                  NBA All-Defensive First Team (2022)/ NBA All-Defensive Second
                  Team (2023)
                </p>
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
                  src="https://cdn.nba.com/manage/2022/02/GettyImages-1362634342-scaled-e1643761978574.jpg"
                  alt=""
                />
              </div>
              <div className={S.BoxInfoAtletaNBA}>
                <h4>
                  <span> Desmond Bane</span>
                </h4>
                <p>Altura: 1,96 m</p>
                <p>Peso: 98 kg</p>
                <p>Posição: SG/SF</p>
                <p>Idade: 26 anos</p>
              </div>
              <div className={S.BoxTitulosAtletas}>
                <p>NBA All-Rookie Second Team (2021)</p>
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
                  src="https://a2.espncdn.com/combiner/i?img=/photo/2022/0412/r998808_1296x729_16-9.jpg"
                  alt=""
                />
              </div>
              <div className={S.BoxInfoAtletaNBA}>
                <h4>
                  <span> CJ McCollum</span>
                </h4>
                <p>Altura: 1,91 m</p>
                <p>Peso: 86 kg</p>
                <p>Posição: SG/PG</p>
                <p>Idade: 33 anos</p>
              </div>
              <div className={S.BoxTitulosAtletas}>
                <p>NBA Most Improved Player (2016)</p>
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
                  src="https://staticg.sportskeeda.com/editor/2025/02/aac36-17401601786087-1920.jpg"
                  alt=""
                />
              </div>
              <div className={S.BoxInfoAtletaNBA}>
                <h4>
                  <span> Andrew Wiggins</span>
                </h4>
                <p>Altura: 2,01 m</p>
                <p>Peso: 89 kg</p>
                <p>Posição: SF</p>
                <p>Idade: 30 anos</p>
              </div>
              <div className={S.BoxTitulosAtletas}>
                <p>
                  Campeão da NBA (2022)/ NBA All-Star (2022)/ NBA Rookie of the
                  Year (2015)
                </p>
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
                  src="https://cdn.nba.com/teams/uploads/sites/1610612755/2022/10/GettyImages-1244301273.jpg"
                  alt=""
                />
              </div>
              <div className={S.BoxInfoAtletaNBA}>
                <h4>
                  <span> Tyrese Maxey</span>
                </h4>
                <p>Altura: 1,88 m</p>
                <p>Peso: 91 kg</p>
                <p>Posição: PG</p>
                <p>Idade: 24</p>
              </div>
              <div className={S.BoxTitulosAtletas}>
                <p>
                  Jogador que Mais Evoluiu da NBA (2023–24)/ Prêmio de
                  Esportividade da NBA (2023–24)
                </p>
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
                  src="http://res.cloudinary.com/ybmedia/image/upload/c_crop,e_improve,h_1123,w_2000,x_0,y_71/c_fill,f_auto,h_900,q_auto,w_1600/v1/m/c/a/ca01d5f773de6cea653f7d3e6738a2d44ee47df9/randle-praises-star-teammates-leadership-win-over.jpg"
                />
              </div>
              <div className={S.BoxInfoAtletaNBA}>
                <h4>
                  <span> Julius Randle</span>
                </h4>
                <p>Altura: 2,03 m</p>
                <p>Peso: 113 kg</p>
                <p>Posição: PF/C</p>
                <p>Idade: 30 anos</p>
              </div>
              <div className={S.BoxTitulosAtletas}>
                <p>
                  2× NBA All-Star/ NBA Most Improved Player (2021)/ All-NBA
                  Second Team (2021)
                </p>
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
                  src="https://www.bostonherald.com/wp-content/uploads/2024/03/CELTICSsc012-e1717504653318.jpg?w=1371"
                  alt=""
                />
              </div>
              <div className={S.BoxInfoAtletaNBA}>
                <h4>
                  <span> Kristaps Porziņģis</span>
                </h4>
                <p>Altura: 2,21 </p>
                <p>Peso: 109 kg</p>
                <p>Posição: PF/C</p>
                <p>Idade: 29 anos</p>
              </div>
              <div className={S.BoxTitulosAtletas}>
                <p>NBA All-Star (2018)/ NBA All-Rookie First Team (2016)</p>
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
                  src="http://res.cloudinary.com/ybmedia/image/upload/c_crop,h_988,w_1760,x_240,y_105/c_fill,f_auto,h_900,q_auto,w_1600/v1/m/a/d/adeaa65192696bf9ba15b3b87b5fe18130b4ea08/oct-2-2023-houston-tx-usa-houston-rockets-guard.jpg"
                  alt=""
                />
              </div>
              <div className={S.BoxInfoAtletaNBA}>
                <h4>
                  <span>Fred VanVleet</span>
                </h4>
                <p>Altura: 1,85 m</p>
                <p>Peso: 89kg</p>
                <p>Posição: PG</p>
                <p>Idade: 31 anos</p>
              </div>
              <div className={S.BoxTitulosAtletas}>
                <p>Campeão da NBA (2019)</p>
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
                  src="https://cdn1.nbaanalysis.net/uploads/16/2025/01/GettyImages-2194952978-1140x760.jpg"
                  alt=""
                />
              </div>
              <div className={S.BoxInfoAtletaNBA}>
                <h4>
                  <span>Klay Thompson</span>
                </h4>
                <p>Altura: 1,98 m</p>
                <p>Peso: 98 kg</p>
                <p>Posição: SG</p>
                <p>Idade: 34 Anos</p>
              </div>
              <div className={S.BoxTitulosAtletas}>
                <p>
                  Campeão da NBA (2015, 2017, 2018, 2022)/ 5× All-Star da NBA/
                  2× All-NBA Third Team/ NBA All-Defensive Second Team
                </p>
              </div>
            </div>
          </section>
        </section>
      </main>
    </>
  );
}
