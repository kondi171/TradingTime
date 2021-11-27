import '../../assets/scss/application_page/application_main.scss';
import NavBar from './NavBar';
import { Outlet } from 'react-router-dom';
function MainLayout() {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  );
}

export default MainLayout;
