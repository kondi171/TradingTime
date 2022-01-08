import { Outlet, NavLink } from 'react-router-dom';

const SettingsPage = () => {
  const isAdmin = true;
  return (
    <>
      <main className='settings-page'>
        <aside className='settings-page__categories'>
          <h1 id='settings-theme'>Ustawienia</h1>
          <ul>
            <li className='aside-theme'>
              <NavLink
                className='settings-page__categories--navigation'
                to='userpreferences'
              >
                <i className='fa fa-user' aria-hidden='true'></i>Ustawienia
                użytkownika
              </NavLink>
            </li>
            <li className='aside-theme'>
              <NavLink
                className='settings-page__categories--navigation'
                to='applicationpreferences'
              >
                <i className='fa fa-cogs' aria-hidden='true'></i>
                Ustawienia aplikacji
              </NavLink>
            </li>
            <li className='aside-theme'>
              <NavLink
                className='settings-page__categories--navigation'
                to='walletpreferences'
              >
                <i className='fa fa-credit-card-alt' aria-hidden='true'></i>
                Ustawienia portfela
              </NavLink>
            </li>

            {isAdmin ? (
              <li className='aside-theme'>
                <NavLink
                  className='settings-page__categories--navigation'
                  to='adminoptions'
                >
                  <i className='fa fa-cog' aria-hidden='true'></i>
                  Ustawienia administracyjne
                </NavLink>
              </li>
            ) : null}
          </ul>
        </aside>

        <Outlet />
      </main>
    </>
  );
};

export default SettingsPage;
