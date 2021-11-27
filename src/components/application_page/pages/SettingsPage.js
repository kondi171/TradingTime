import { Outlet, NavLink } from 'react-router-dom';

function SettingsPage() {
  return (
    <>
      <main className='settings-page'>
        <aside className='settings-page__categories'>
          <ul>
            <li>
              <NavLink
                className='settings-page__categories--navigation'
                to='userpreferences'
              >
                <i class='fa fa-user' aria-hidden='true'></i>Ustawienia
                użytkownika
              </NavLink>
            </li>
            <li>
              <NavLink
                className='settings-page__categories--navigation'
                to='applicationpreferences'
              >
                <i class='fa fa-cogs' aria-hidden='true'></i>
                Ustawienia aplikacji
              </NavLink>
            </li>
            <li>
              <NavLink
                className='settings-page__categories--navigation'
                to='walletpreferences'
              >
                <i class='fa fa-credit-card-alt' aria-hidden='true'></i>
                Ustawienia portfela
              </NavLink>
            </li>
          </ul>
        </aside>

        <Outlet />
      </main>
    </>
  );
}

export default SettingsPage;
