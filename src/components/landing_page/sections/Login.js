import React from 'react';
import 'font-awesome/css/font-awesome.min.css';
import { Link } from 'react-router-dom';
function Login() {
  return (
    <div className='login-wrapper'>
      <form className='form'>
        <h2>Zaloguj się</h2>
        <label htmlFor='login'>
          <i className='fa fa-user'></i> Login
        </label>
        <input
          type='text'
          name='login'
          placeholder='Wprowadź nazwę użytkownika'
        />
        <label htmlFor='password'>
          <i className='fa fa-key'></i> Hasło
        </label>
        <input type='password' name='password' placeholder='Wprowadź hasło' />
        <input type='button' value='Zaloguj się' />
        <button className='facebook'>
          <i className='fa fa-facebook'></i>
          <span>Zaloguj się z Facebook</span>
        </button>
      </form>
      <div className="links">
          <Link to="/register">Nie masz jeszcze konta? Załóż je!</Link>
          <Link to="/">Powrót do Strony Głównej</Link>
        </div>
    </div>
  );
}
export default Login;
