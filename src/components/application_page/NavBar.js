import '../../assets/scss/application_page/application_main.scss';
import PanBogdan from '../../assets/img/Pan_Bogdan.png';
import { NavLink } from 'react-router-dom';

function NavBar() {
  return (
    <>
      <nav className='app__nav'>
        <NavLink to='/app/home' className='nav-option'>
          <i class='fa fa-home'></i> Główny Panel
        </NavLink>
        <NavLink to='/app/search' className='nav-option'>
          <i class='fa fa-search'></i> Wyszukaj
        </NavLink>
        <NavLink to='/app/wallet' className='nav-option'>
          <i class='fa fa-money'></i> Portfel
        </NavLink>
        <div className='app__user-panel'>
          <span>
            <i class='fa fa-user'></i> Bogdan Ryjec
          </span>
          <img src={PanBogdan} alt='Twój Awatar' />
          <ul>
            <li>
              <NavLink className='app__user-panel--link' to='/app/options'>
                <i class='fa fa-cogs'></i> Konto
              </NavLink>
            </li>
            <li>
              <NavLink
                className='app__user-panel--link'
                to='/app/preferences/help'
              >
                <i class='fa fa-question-circle'></i> Pomoc
              </NavLink>
            </li>
            <li>
              <NavLink
                className='app__user-panel--link'
                to='/app/preferences/logout'
              >
                <i class='fa fa-sign-out'></i> Wyloguj
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
