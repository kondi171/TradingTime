import Footer from '../../landing_page/landing_sections/Footer';
function HelpPage() {
	return (
		<>
			<div className='help-page'>
				<h1 className='help-page__header'>Witaj w centrum pomocy TradingTime</h1>
				<div className='flex-container'>
					<aside className='help-page__aside'>
						<h2 className='help-page__aside--header'>Warto odwiedzić</h2>
						<ul className='help-page__aside--list'>
							<li>
								<span>Co to jest giełda papierów wartościowych?</span>
								<a href="https://www.gpw.pl">www.gpw.pl</a>
							</li>
							<li>
								<span>O co chodzi w giełdzie papierów wartościowych?</span>
								<a href="https://businessinsider.com.pl/poradnik-finansowy/akcje-co-warto-o-nich-wiedziec/g2cltc5">https://businessinsider.com.pl/akcje-co-warto-o-nich-wiedziec/</a>
							</li>
							<li>
								<span>Jak zacząć grać na giełdzie?</span>
								<a href="https://businessinsider.com.pl/poradnik-finansowy/inwestowanie-w-akcje-sposoby-zasady-ryzyko-i-korzysci/eq35v39">https://businessinsider.com.pl/poradnik-finansowy/inwestowanie-w-akcje-sposoby-zasady-ryzyko-i-korzysci</a>
							</li>
							<li>
								<span>Jak inwestować w akcje?</span>
								<a href="https://inwestowanieodpodstaw.pl/akcje/">https://inwestowanieodpodstaw.pl</a>
							</li>
						</ul>
					</aside>
					<main className='help-page__main'>
						<div className='help-page__main--tile'>
							<h3>Jak działa system?</h3>
							<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe iste, numquam assumenda unde fugiat temporibus rem sed sint odio neque?</p>
						</div>
						<div className='help-page__main--tile'>
							<h3>Co potrzeba na start?</h3>
							<p>
								Pierwszym krokiem będzie rejestracja, następnym krokiem będzie poznanie systemu, nie musisz się martwić o pieniądze, gdyż nasz system
								umożliwia ci praktyczne ćwiczenia na GPW za pomocą swojego trybu wirtualnego. Sprawdzisz dzięki temu działanie systemu, przez podgląd
								ile mogłeś zarobić a ile stracić. Po takich ćwiczeniach możesz zacząć zarabiać! Oczywiście jeżeli wiesz o co w tym chodzi możesz zrobić to od razu.
							</p>
						</div>
						<div className='help-page__main--tile'>
							<h3>Jak korzystać z systemu?</h3>
							<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe iste, numquam assumenda unde fugiat temporibus rem sed sint odio neque?</p>
						</div>
						<div className='help-page__main--tile'>
							<h3>Czy warto inwestować?</h3>
							<p>
								W świecie stale zmieniającym wartość pieniądza, trudno o jakieś oszczędności, dlaczego zatem by nie przełamać tego systemu? Dzięki naszemu
								systemowi jest to możliwe! Giełda Papierów Wartościowych to stale rozwijający się temat, inwestycje w GPW pozwolą ci wzbogacić się w stosunkowo
								krótkim czasie, wszystko dzięki systemowi, który podpowiada kiedy akcje kupić a kiedy sprzedać.
							</p>
						</div>
						<div className='help-page__main--tile'>
							<h3>Jak można się z nami skontaktować?</h3>
							<p>
								W stopce podane są informacje kontaktowe za pomocą których, jesteś w stanie się z nami skontaktować, odpowiadamy w dni robocze w czasie
								nie przekraczającym 24 godzin!
							</p>
						</div>
						<div className='help-page__main--tile'>
							<h3>Czy założenie konta jest konieczne?</h3>
							<p>
								Tak, dzięki założeniu konta, jesteśmy w stanie sprawdzić twoją tożsamość w celu bezpiecznego przeprowadzenia płatności internetowych.
								Założenie konta również daje ci możliwość zapisywania swoich czynności związanych z GPW, dzięki temu system zrobi wszystko za ciebie!
								Nie martw się, twoje dane są bezpiecznie przechowywane w naszej bazie danych, nawet my nie mamy dostępu do twoich danych osobowych.
							</p>
						</div>
					</main>
				</div>
				<section className='help-page__contact'>Nie udało ci się znaleźć odpowiedzi na swoje pytania? <span>Skontaktuj się z naszymi ekspertami!</span></section>
			</div>
			<Footer />
		</>
	);
}
export default HelpPage;