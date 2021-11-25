import React from 'react';
import { Link } from 'react-router-dom';

class Register extends React.Component {

  state = {
    errorMessage: '',
  }

  componentDidMount() {
    this.login = document.getElementById('login');
    this.name = document.getElementById('name');
    this.lastname = document.getElementById('lastname');
    this.password1 = document.getElementById('password1');
    this.password2= document.getElementById('password2');
    this.mail = document.getElementById('mail');
    this.phone= document.getElementById('phone');
    this.adress = document.getElementById('adress');
    this.personalId = document.getElementById('personalId');
    this.pesel = document.getElementById('pesel');
    this.error = document.getElementById('errorModal');
    this.handleCheckActive();
  }

  componentDidUpdate() { this.handleCheckActive(); }

  handleCheckActive = () => {
    if(this.state.errorMessage === '') this.error.classList.add('active');
    else this.error.classList.remove('active');
  }
  handleLogin = () => {
    this.login.addEventListener('keyup', (event) => {
      if(this.login.value.length < 6 || this.login.value.length > 12) this.setState({ errorMessage: 'Login musi mieścić się w przedziale od 6 do 12 znaków' });
      // console.log(event.which);
      // if(event.which < 65 || event.which > 90) this.setState({ errorMessage: 'Login musi mieć conajmniej jedną dużą literę' });
      else this.setState({ errorMessage: '' });
    });
  }

  handleName = () => {
    if(this.name.value.length < 3 || this.name.value.length > 12) this.setState({ errorMessage: 'Imię musi mieścić się w przedziale od 3 do 12 znaków' });
    else this.setState({ errorMessage: '' });
  }

  handleLastName = () => {
    if(this.lastname.value.length < 3 || this.lastname.value.length > 18) this.setState({ errorMessage: 'Nazwisko musi mieścić się w przedziale od 3 do 18 znaków' });
    else this.setState({ errorMessage: '' });
  }

  handlePassword1 = () => {
    if(this.password1.value.length < 8) this.setState({ errorMessage: 'Hasło musi miec conajmniej 8 znaków' });
    else this.setState({ errorMessage: '' });
  }

  handlePassword2 = () => {
    if(this.password1.value != this.password2.value) this.setState({ errorMessage: 'Hasła muszą być identyczne' });
    else this.setState({ errorMessage: '' });
  }

  handlePhone = () => {
    if(this.phone.value.length != 9) this.setState({ errorMessage: 'Numer telefonu musi mieć dokładnie 9 cyfr' });
    else this.setState({ errorMessage: '' });
  }

  handlePesel = () => {
    if(this.pesel.value.length != 11) this.setState({ errorMessage: 'PESEL musi mieć dokładnie 11 cyfr' });
    else this.setState({ errorMessage: '' });
  }

  render(){
    return ( 
      <div className="register-wrapper">
        <form className="form"> 
            <h2>Zarejestruj się</h2>
            <div className="data-wrapper">
              <div className="account-data">
                <label htmlFor="login"><i class="fa fa-user"></i> Login</label>
                <input onClick={this.handleLogin} id="login" type="text" name="login" placeholder="Wprowadź nazwę użytkownika"/>
                <label htmlFor="name"><i class="fa fa-user-circle-o"></i> Imię</label>
                <input onClick={this.handleName} id="name" type="text" name="name" placeholder="Wprowadź imię"/>
                <label htmlFor="lastname"><i class="fa fa-user-circle"></i> Nazwisko</label>
                <input onClick={this.handleLastName} id="lastname" type="text" name="lastname" placeholder="Wprowadź nazwisko"/> 
                <label htmlFor="password1"><i class="fa fa-unlock"></i> Hasło</label>
                <input onChange={this.handlePassword1} id="password1" type="password" name="password1" placeholder="Wprowadź hasło"/>
                <label htmlFor="password2"><i class="fa fa-unlock-alt"></i> Powtórz Hasło</label>
                <input onChange={this.handlePassword2} id="password2" type="password" name="password2" placeholder="Powtórz hasło"/>
              </div>
              <div className="adress-data">
                <label htmlFor="email"><i class="fa fa-envelope"></i> E-mail</label>
                <input id="mail" type="email" name="email" placeholder="Wprowadź adres e-mail"/>
                <label htmlFor="phone"><i class="fa fa-phone"></i> Nr telefonu</label>
                <input onChange={this.handlePhone} id="phone" type="text" name="phone" placeholder="Wprowadź numer telefonu"/>
                <label htmlFor="adress"><i class="fa fa-address-card"></i> Adres</label>
                <input id="adress" type="text" name="adress" placeholder="Wprowadź adres"/>
                <label htmlFor="personalId"><i class="fa fa-user"></i> Nr dowodu</label>
                <input id="personalId" type="text" name="personalId" placeholder="Wprowadź numer dowodu osobistego"/>
                <label htmlFor="pesel"><i class="fa fa-user"></i> PESEL</label>
                <input onChange={this.handlePesel} id="pesel" type="text" name="pesel" placeholder="Wprowadź PESEL"/>
              </div>
            </div>
            <Link to="/login">Masz już konto? Zaloguj się!</Link>
            <input type="button" value="Zarejestruj się" />
            <Link to="/">Powrót do Strony Głównej</Link>
        </form>
        <div className="error-modal" id="errorModal"><i class="fa fa-times-circle-o"></i>{ this.state.errorMessage }</div>
      </div>
    );
  }
}

export default Register;