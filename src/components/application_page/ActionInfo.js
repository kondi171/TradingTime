function ActionInfo({
  price,
  lastUpdate,
  isFavourite,
  isBought,
  toggleFavourite,
}) {
  return (
    <>
      <aside className='search-page_info'>
        <div className='search-page_info--favourite'>
          <i
            onClick={toggleFavourite}
            className='fa search-page_info--favouriteHeart'
          ></i>
          <p>{(isFavourite && `Usuń z ulubionych`) || `Dodaj do ulubionych`}</p>
        </div>

        <h2>Aktualne dane {lastUpdate}</h2>
        <ul>
          <li>Cena akcji: 40,22zł</li>
          <li>Wolumen: 3.54m</li>
          <li>Dzisiejsze otwarcie:</li>
        </ul>
      </aside>
    </>
  );
}

export default ActionInfo;
