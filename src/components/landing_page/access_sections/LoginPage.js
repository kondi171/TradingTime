import React, { useState, useContext } from 'react';
import 'font-awesome/css/font-awesome.min.css';
import { Link, useNavigate } from 'react-router-dom';
import { AppContext } from '../../../AppContext';
import InfoModal from '../../features/modals/InfoModal';
import FacebookLoginPage from './FacebookLoginPage';

const LoginPage = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');

  const { toggleLoggedState } = useContext(AppContext);
  const { fetchUserData } = useContext(AppContext);
  const { fetchUserSettings } = useContext(AppContext);
  const { fetchAccountBalance } = useContext(AppContext);
  const { fetchUserFavouriteActions } = useContext(AppContext);
  const { fetchUserBoughtActions } = useContext(AppContext);
  const { fetchAllInfoProvided } = useContext(AppContext);
  const { setUserIdNumber } = useContext(AppContext);
  const [infoVisible, setInfoVisible] = useState(false);
  const [infoMessage, setInfoMessage] = useState('');

  const loadUserAccountData = async (id_user) => {
    toggleLoggedState();
    fetchUserData(id_user);
    fetchUserSettings(id_user);
    fetchUserFavouriteActions(id_user);
    fetchUserBoughtActions(id_user);
    fetchAccountBalance(id_user);
    fetchAllInfoProvided(id_user);
    setUserIdNumber(id_user);
  };

  const login = async (e) => {
    e.preventDefault();

    const API = 'http://localhost/api/v1/login';
    const formParams = new URLSearchParams({
      login: username,
      password: e.target.password.value,
      grant_type: 'password',
    });

    const login = await fetch(API, {
      method: 'POST',
      body: formParams,
    })
      .then((response) => response.json())
      .catch((err) => console.log(err));

    if (login.success) {
      await loadUserAccountData(login.id_user);
      navigate('/app/home');
    } else {
      displayInfoModal(login.message.toUpperCase());
    }
  };
  const displayInfoModal = (message) => {
    setInfoVisible(true);
    setInfoMessage(message);
    setTimeout(() => {
      setInfoVisible(false);
      setInfoMessage('');
    }, 4000);
  };

  return (
    <div className='login-wrapper'>
      <form className='form' onSubmit={login}>
        <h2>Zaloguj si??</h2>
        <label htmlFor='login'>
          <i className='fa fa-user'></i> Login
        </label>
        <input
          type='text'
          name='login'
          placeholder='Wprowad?? nazw?? u??ytkownika'
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <label htmlFor='password'>
          <i className='fa fa-key'></i> Has??o
        </label>
        <input type='password' name='password' placeholder='Wprowad?? has??o' />
        <input type='submit' className='login' value='Zaloguj si??' />
        <FacebookLoginPage
          loadUserAccountData={loadUserAccountData}
          setInfoVisible={setInfoVisible}
          setInfoMessage={setInfoMessage}
        />
      </form>
      <div className='links'>
        <Link to='/register'>Nie masz jeszcze konta? Za?????? je!</Link>
        <Link to='/'>Powr??t do Strony G????wnej</Link>
      </div>
      <InfoModal message={infoMessage} visible={infoVisible} position='right' />
    </div>
  );
};
export default LoginPage;
