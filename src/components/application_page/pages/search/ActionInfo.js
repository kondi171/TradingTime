import React from 'react';
import { NavLink } from 'react-router-dom';
function ActionInfo({
  actionName,
  id_action,
  value,
  actionDate,
  isBought,
  toggleFavourite,
  symbol,
  volume,
  openValue,
  closeValue,
  handleShowInfo,
}) {
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
            <NavLink
              to={`/app/marketplace/${id_action}`}
              className='navlink--casual'
            >
              <i className='fa fa-line-chart'></i>
            </NavLink>
          )) || (
            <NavLink
              to={`/app/marketplace/${id_action}`}
              className='navlink--casual'
            >
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
                Skrót akcji: {symbol}
              </p>
            </li>
            <li>
              <p className='search-page__action-property'>
                Cena akcji: {value}zł
              </p>
            </li>
            <li>
              <p className='search-page__action-property'>Wolumen: {volume}</p>
            </li>
            <li>
              <p className='search-page__action-property'>
                Dzisiejsze otwarcie: {openValue}zł
              </p>
            </li>
            <li>
              <p className='search-page__action-property'>
                Ostatnie zamknięcie: {closeValue}zł
              </p>
            </li>
          </ul>
        </div>

        <section className='search-page__info-footer'>
          <p className='search-page__last-update'>
            Ostatnia aktualizacja danych: {actionDate}
          </p>
        </section>
      </aside>
    </>
  );
}

export default ActionInfo;
