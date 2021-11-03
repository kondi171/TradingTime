import Konrad from "./../resources/img/team/konradnowak.jpg"
import Kamil from "./../resources/img/team/kamilwypych.jpg"
import Agnieszka from "./../resources/img/team/agnieszkarabiej.jpg"
import Krystian from "./../resources/img/team/krystianlabecki.jpg"

function About() {
  return ( 
    <>
      <section class="about">
        <h2>Kim jesteśmy?</h2>
        <p>Trading Time to firma, która pozwoli Ci pomnożyć Twój kapitał nawet w kilka dni!</p>
        <p>Nasza spółka działa od 2005 roku. Możemy pochwalić się gronem klientów którzy nam zaufali. Dzięki naszym
          usługom pozwoliliśmy spełnić marzenia wialu osobom.</p>
        <div class="opinions">
          <blockquote>"Dzięki TradingTime zyskałem niezależność finansową. Zainwestowałem w akcje 30% moich
            oszczędności i już po roku mogłem cieszyć się nowym autem z salonu."</blockquote>
          <p class="person">Marek Owczarek ze Szczecina</p>
        </div>
      </section>
      <section class="team">
        <h2>Nasz zespół</h2>
        <div class="team-gallery">
          <div class="team-member">
            {/* <img src={Konrad} alt="Konrad Nowak - Frontend Developer, UI/UX designer"/> */}
            <h2>Konrad Nowak</h2>
            <span>
              <p>Frontend Developer, UI/UX designer</p>
            </span>
          </div>
          <div class="team-member">
          {/* <img src={Kamil} alt="Kamil Wypych - Frontend Developer, Analityk rynku"/> */}
            <h2>Kamil Wypych</h2>
            <span>
              <p>Frontend Developer, Analityk rynku</p>
            </span>
          </div>
          <div class="team-member">
            {/* <img src={Agnieszka} alt="Agnieszka Rabiej - Analityk rynku, Zarządca dokumentacji"/> */}
            <h2>Agnieszka Rabiej</h2>
            <span>
              <p>Analityk rynku, Zarządca dokumentacji</p>
            </span>
          </div>
          <div class="team-member">
            {/* <img src={Krystian} alt="Krystian Łabęcki - Backend Developer, Database Modeller"/> */}
            <h2>Krystian Łabęcki</h2>
            <span>
              <p>Backend Developer, Database Modeller</p>
            </span>
          </div>
        </div>
      </section> 
    </>
  );
}

export default About;