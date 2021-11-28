function WalletAction({
  name,
  price,
  image,
  isFavourite,
  lastUpdate,
  numberOfActions,
  toggleFavourite,
}) {
  return (
    <div className='wallet-page__actions__action'>
      <span className='wallet-page__actions__action--action-image'>
        <img src={image} alt='' />{' '}
      </span>
      <p className='wallet-page__actions__action--action-name'>{name}</p>
      <p className='wallet-page__actions__action--number'>
        {numberOfActions} szt.
      </p>
      <p className='wallet-page__actions__action--price'>
        {price.toFixed(2)} zł
        <span> {lastUpdate} </span>
      </p>
      <p className='wallet-page__actions__action--total-price'>
        {(price * numberOfActions).toFixed(2)} zł
      </p>
      <span className='wallet-page__actions__action--options'>
        <i
          className={`fa fa-heart${
            isFavourite ? '' : '-o'
          } wallet-page__actions__action--options--favouriteHeart`}
          onClick={toggleFavourite}
        ></i>
        <i className='fa fa-line-chart'></i>
        {/* {displayHeart()} */}
      </span>
    </div>
  );
}

export default WalletAction;
