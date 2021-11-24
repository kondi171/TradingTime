import '../../assets/scss/application_page/application_main.scss';
import { NavLink } from 'react-router-dom';

function NavBar () {
  return (
    <>
      <nav className='app-nav'>
        <NavLink to='/app/home' className='nav-option'>
        <i class="fa fa-home"></i> Główny Panel
        </NavLink>
        <NavLink to='/app/search' className='nav-option'>
        <i class="fa fa-search"></i> Wyszukaj
        </NavLink>
        <NavLink to='/app/wallet' className='nav-option'>
        <i class="fa fa-money"></i> Portfel
        </NavLink>
        <NavLink to='/option' className='nav-option'>
        <i class="fa fa-cog"></i> option
        </NavLink>
      </nav>
    </>
  );
}

export default NavBar;
