function Footer() {
  return (
    <footer className='footer'>
      <div className='footer__team-contact'>
        <h4>Kontakt</h4>
        <ul>
          <li>
            Kamil Wypych - <i>kwypych4@gmail.com</i>
          </li>
          <li>
            Konrad Nowak - <i>wk.k.nowak@gmail.com</i>
          </li>
          <li>
            Krystian Łabęcki - <i>krystian.l@gmail.com</i>
          </li>
          <li>
            Agnieszka Rabiej - <i>a.rabiej@gmail.com</i>
          </li>
        </ul>
      </div>
      <div className='footer__wrapper'>
        <div className='footer__wrapper--privacy-policy'>
          <h4>Polityka Prywatności</h4>
          <p>
            Traktując jako priorytet bezpieczeństwo danych osobowych przetwarzanych przez system dbamy aby wszystkie nasze działania pozostawały
            w zgodzie z Rozporządzeniem Parlamentu Europejskiego i Rady (UE) 2016/679 z dnia 27 kwietnia 2016 r. w sprawie ochrony osób fizycznych
            w związku z przetwarzaniem danych osobowych i w sprawie swobodnego przepływu takich danych oraz uchylenia dyrektywy 95/46/WE
            (ogólne rozporządzenie o ochronie danych), dalej także jako RODO.
          </p>
        </div>
        <div className='footer__wrapper--copyrights'>
          Wszelkie prawa Zastrzeżone &copy; Trading Time - 2021r
        </div>
      </div>
    </footer>
  );
}

/* <div>Icons made by <a href="https://www.flaticon.com/authors/erifqi-zetiawan" title="Erifqi Zetiawan">Erifqi Zetiawan</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div> */
export default Footer;
