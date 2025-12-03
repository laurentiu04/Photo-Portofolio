import Navbar from "./Navbar";
import eu from "./assets/eu.png";
import "./AboutMe.css";

function AboutMe() {
	return (
		<>
			<Navbar />
			<div className="wrapper">
				<img className="me-pic" src={eu} />
				<div className="desc">
					<p>
						<strong>Salutări! </strong>👋🏼 <br></br>
						Eu sunt <strong>Laurențiu</strong>, un tânăr pasionat de{" "}
						<strong>arta fotografiei</strong>. Îmi place să opresc timpul cu
						ajutorul aparatului foto și să salvez{" "}
						<strong>cele mai frumoase momente</strong> din viața unei persoane.
						<br></br>
						Cănd nu fac pe fotograful, fac pe <strong>studentul</strong> la
						Facultatea de Automatică și Calculatoare, Iași, anul 3. Sunt
						pasionat și de
						<strong>tehnologie</strong> și urmăresc să creez noi invenții pentru
						viitor. Sunt mereu calm, calculat, și “un pic”{" "}
						<strong>perfecționist</strong> în ceea ce fac.
						<br></br>
						La ce să te aștepți dacă mă alegi pe mine pentru următorul tău
						eveniment?
					</p>
					{
						<ul>
							<li>O mulțime de stiluri de unde poți alege</li>
							<li>Propuneri și idei potrivite pentru evenimentul tău</li>
							<li>Deschidere totală și implicare maximă</li>
							<li>Și desigur, atenție la detalii</li>
						</ul>
					}
					<p>
						Deci dacă îți place cum sună, nu ezita să mă contactezi pentru a
						imortaliza momente de neuitat!
					</p>
				</div>
			</div>
		</>
	);
}

export default AboutMe;
