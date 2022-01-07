import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
function ActionInfo({
  actionName,
  id,
  price,
  lastUpdate,
  isFavourite,
  isBought,
  toggleFavourite,
  short,
  volume,
  open,
  close,
  handleShowInfo,
  change,
  changePercentage,
}) {
  const changeColor = () => {
    document
      .querySelectorAll('.search-page__action-value')
      .forEach((element) => {
        if (change < 0) {
          element.classList.add('search-page__action-value--red');
          element.classList.remove('search-page__action-value--green');
        } else {
          element.classList.remove('search-page__action-value--red');
          element.classList.add('search-page__action-value--green');
        }
      });
  };

  useEffect(changeColor);

  return (
    <>
      <aside className='search-page__info'>
        <div className='search-page__options'>
          <i
            className='fa fa-times'
            aria-hidden='true'
            onClick={handleShowInfo}
          ></i>

          <i
            onClick={toggleFavourite}
            className='fa search-page_info--favouriteHeart'
          ></i>

          {(isBought && (
            <NavLink to={`/app/marketplace/${id}`} className='navlink--casual'>
              <i className='fa fa-line-chart'></i>
            </NavLink>
          )) || (
            <NavLink to={`/app/marketplace/${id}`} className='navlink--casual'>
              <i className='fa fa-cart-plus' aria-hidden='true'></i>
            </NavLink>
          )}
        </div>

        <div className='search-page__action-properties'>
          <ul>
            <li>
              <h1 className='search-page__action-title'>{actionName}</h1>
            </li>
            <li>
              <p className='search-page__action-property'>
                Skrót akcji: {short}
              </p>
            </li>
            <li>
              <p className='search-page__action-property'>
                Cena akcji: {price}zł
              </p>
            </li>
            <li>
              <p className='search-page__action-property'>Wolumen: {volume}</p>
            </li>
            <li>
              <p className='search-page__action-property'>
                Dzisiejsze otwarcie: {open}
              </p>
            </li>
            <li>
              <p className='search-page__action-property'>
                Ostatnie zamknięcie: {close}
              </p>
            </li>
            <li>
              <p className='search-page__action-property'>
                Zmiana:{' '}
                <span className='search-page__action-value'>
                  {change} ({changePercentage}%)
                </span>
              </p>
            </li>
          </ul>
        </div>

        <section className='search-page__info-footer'>
          <p className='search-page__last-update'>
            Ostatnia aktualizacja danych: {lastUpdate}
          </p>
        </section>
      </aside>
    </>
  );
}

export default ActionInfo;
