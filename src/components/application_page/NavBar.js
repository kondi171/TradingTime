import React, { useState, useEffect, useContext } from 'react';
import '../../assets/scss/application_page/application_main.scss';
import PanBogdan from '../../assets/img/Pan_Bogdan.png';
import male1 from '../../assets/img/avatars/avatar_male_blonde_red_glasses.png';
import male2 from '../../assets/img/avatars/avatar_male_dark_blue_sunglasses.png';
import female1 from '../../assets/img/avatars/avatar_female_auburn_blue_glasses.png';
import female2 from '../../assets/img/avatars/avatar_female_blonde_pink.png';
import avatarDefault from '../../assets/img/avatars/default_blank.png';
import { NavLink } from 'react-router-dom';
import { AppContext } from '../../AppContext';
const NavBar = () => {
  // const [avatar, setAvatar] = useState(5);
  const { userSettings } = useContext(AppContext);
  const [currentAvatar, setCurrentAvatar] = useState();
  useEffect(() => setAvatar(), [currentAvatar]);
  const setAvatar = () => {
    console.log(userSettings.avatar);
    if (userSettings.avatar === 1) setCurrentAvatar(male1);
    else if (userSettings.avatar === 2) setCurrentAvatar(male2);
    else if (userSettings.avatar === 3) setCurrentAvatar(female1);
    else if (userSettings.avatar === 4) setCurrentAvatar(female2);
    else setCurrentAvatar(avatarDefault);
  }

  return (
    <>
      <nav id="app__nav" className='app__nav'>
        <NavLink to='/app/home' className='nav-option'>
          <i className='fa fa-home'></i> Główny Panel
        </NavLink>
        <NavLink to='/app/search' className='nav-option'>
          <i className='fa fa-search'></i> Wyszukaj
        </NavLink>
        <NavLink to='/app/wallet' className='nav-option'>
          <i className='fa fa-money'></i> Portfel
        </NavLink>
        <NavLink to='/app/marketplace/1' className='nav-option'>
          <i className='fa fa-line-chart'></i> Rynek
        </NavLink>
        <div className='app__user-panel'>
          <img src={currentAvatar} alt='Twój Awatar' />
          <ul>
            <li>
              <div className='app__user-panel--username'>
                <i className='fa fa-user'></i>
                <span>Bogdan Ryjec</span>
                <hr />
              </div>
            </li>

            <li>
              <NavLink
                className='app__user-panel--link border-none'
                to='/app/options/userpreferences'
              >
                <i className='fa fa-cogs'></i> Konto
              </NavLink>
            </li>
            <li>
              <NavLink
                className='app__user-panel--link border-none'
                to='/app/preferences/help'
              >
                <i className='fa fa-question-circle'></i> Pomoc
              </NavLink>
            </li>
            <li>
              <NavLink
                className='app__user-panel--link border-none'
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
