import { NavLink } from 'react-router-dom';
function WalletAction({
  actionId,
  actionName,
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
      <p className='wallet-page__actions__action--action-name'>{actionName}</p>
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
        <NavLink
          to={`/app/marketplace/${actionId}`}
          className='navlink--casual'
        >
          <i className='fa fa-line-chart'></i>
        </NavLink>

        {/* {displayHeart()} */}
      </span>
    </div>
  );
}

export default WalletAction;
