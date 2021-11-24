function ActionInfo({
  price,
  lastUpdate,
  isFavourite,
  isBought,
  toggleFavourite,
}) {
  // console.log(props);

  const checkFavourite = () => {};

  return (
    <>
      <aside className='search-page_info'>
        <p>
          {(isFavourite && `Usuń z ulubionych`) || `Dodaj do ulubionych`}
          <i
            onClick={toggleFavourite}
            className='fa search-page_info--favouriteHeart'
          ></i>
        </p>
        <h2>Aktualne dane {lastUpdate}</h2>
        <ul>
          <li>Cena akcji: 40,22zł</li>
          <li>Wolumen: 3.54m</li>
          <li>Dzisiejsze otwarcie:</li>
        </ul>
        <p></p>
        <p></p>
        <p></p>
      </aside>
    </>
  );
}

export default ActionInfo;
