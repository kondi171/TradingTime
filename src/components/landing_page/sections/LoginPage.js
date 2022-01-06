import React, { useState, useContext } from 'react';
import 'font-awesome/css/font-awesome.min.css';
import { Link, useNavigate } from 'react-router-dom';
import { AppContext } from '../../../AppContext';
import { useEffect } from 'react/cjs/react.development';

const LoginPage = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');

  const { toggleLoggedState } = useContext(AppContext);
  const { isUserLogged } = useContext(AppContext);
  const { fetchUserData } = useContext(AppContext);
  const { userPersonalData } = useContext(AppContext);
  const { setUserActions } = useContext(AppContext);
  const { fetchUserSettings } = useContext(AppContext);

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
    }).then((response) => response.json());

    console.log(login);

    if (login.success) {
      toggleLoggedState();
      fetchUserData(login.id_user);
      fetchUserSettings(login.id_user);
      navigate('/app/home');
    }
  };

  return (
    <div className='login-wrapper'>
      <form className='form' onSubmit={login}>
        <h2>Zaloguj się</h2>
        <label htmlFor='login'>
          <i className='fa fa-user'></i> Login
        </label>
        <input
          type='text'
          name='login'
          placeholder='Wprowadź nazwę użytkownika'
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <label htmlFor='password'>
          <i className='fa fa-key'></i> Hasło
        </label>
        <input type='password' name='password' placeholder='Wprowadź hasło' />
        <input type='submit' value='Zaloguj się' />
        <button className='facebook'>
          <i className='fa fa-facebook'></i>
          <span>Zaloguj się z Facebook</span>
        </button>
      </form>
      <div className='links'>
        <Link to='/register'>Nie masz jeszcze konta? Załóż je!</Link>
        <Link to='/'>Powrót do Strony Głównej</Link>
      </div>
    </div>
  );
};
export default LoginPage;
