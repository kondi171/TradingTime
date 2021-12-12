import '../../assets/scss/application_page/application_main.scss';
import PanBogdan from '../../assets/img/Pan_Bogdan.png';
import { NavLink } from 'react-router-dom';

function NavBar() {
  return (
    <>
      <nav className='app__nav'>
        <NavLink to='/app/home' className='nav-option'>
          <i className='fa fa-home'></i> Główny Panel
        </NavLink>
        <NavLink to='/app/search' className='nav-option'>
          <i className='fa fa-search'></i> Wyszukaj
        </NavLink>
        <NavLink to='/app/wallet' className='nav-option'>
          <i className='fa fa-money'></i> Portfel
        </NavLink>
        <NavLink to='/app/marketplace' className='nav-option'>
          <i className='fa fa-line-chart'></i> Rynek
        </NavLink>
        <div className='app__user-panel'>
          <img src={PanBogdan} alt='Twój Awatar' />
          <ul>
            <li>
              <div className='app__user-panel--username'>
                <i className='fa fa-user'></i>Bogdan Ryjec
              </div>
            </li>

            <li>
              <NavLink
                className='app__user-panel--link'
                to='/app/options/userpreferences'
              >
                <i className='fa fa-cogs'></i> Konto
              </NavLink>
            </li>
            <li>
              <NavLink
                className='app__user-panel--link'
                to='/app/preferences/help'
              >
                <i className='fa fa-question-circle'></i> Pomoc
              </NavLink>
            </li>
            <li>
              <NavLink
                className='app__user-panel--link'
                to='/app/preferences/logout'
              >
                <i className='fa fa-sign-out'></i> Wyloguj
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
