import React from 'react';
import { Link } from 'react-router-dom';

class Register extends React.Component {

  state = {
    infoMessage: '',
  }

  componentDidMount() {
    this.basicForm = document.getElementById('basicForm');
    this.personalForm = document.getElementById('personalForm');
    this.adressForm = document.getElementById('adressForm');
    this.basicForm.classList.add('active-form');

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
    this.info = document.getElementById('infoModal');
    this.handleCheckActive();
  }

  componentDidUpdate() { this.handleCheckActive(); }

  handleCheckActive = () => {
    if(this.state.infoMessage === '') this.info.classList.add('active');
    else this.info.classList.remove('active');
  }
  handleLogin = () => {
      if(this.login === document.activeElement) console.log('active!');
      if(this.login.value.length < 6 || this.login.value.length > 12) this.setState({ infoMessage: 'Login musi mieścić się w przedziale od 6 do 12 znaków' });
      else this.setState({ infoMessage: '' });
  }

  handleName = () => {
    if(this.name.value.length < 3 || this.name.value.length > 12) this.setState({ infoMessage: 'Imię musi mieścić się w przedziale od 3 do 12 znaków' });
    else this.setState({ infoMessage: '' });
  }

  handleLastName = () => {
    if(this.lastname.value.length < 3 || this.lastname.value.length > 18) this.setState({ infoMessage: 'Nazwisko musi mieścić się w przedziale od 3 do 18 znaków' });
    else this.setState({ infoMessage: '' });
  }

  handlePassword1 = () => {
    if(this.password1.value.length < 8) this.setState({ infoMessage: 'Hasło musi miec conajmniej 8 znaków' });
    else this.setState({ infoMessage: '' });
  }

  handlePassword2 = () => {
    if(this.password1.value !== this.password2.value) this.setState({ infoMessage: 'Hasła muszą być identyczne' });
    else this.setState({ infoMessage: '' });
  }

  handlePhone = () => {
    if(this.phone.value.length !== 9) this.setState({ infoMessage: 'Numer telefonu musi mieć dokładnie 9 cyfr' });
    else this.setState({ infoMessage: '' });
  }

  handlePesel = () => {
    if(this.pesel.value.length !== 11) this.setState({ infoMessage: 'PESEL musi mieć dokładnie 11 cyfr' });
    else this.setState({ infoMessage: '' });
  }

  handleRemoveDisplay = () => {
    this.basicForm.classList.remove('active-form');
    this.personalForm.classList.remove('active-form');
    this.adressForm.classList.remove('active-form');
  }
  handleBasicForm = () => {
    this.handleRemoveDisplay();
    this.basicForm.classList.add('active-form');
  }
  handlePersonalForm = () => {
    this.handleRemoveDisplay();
    this.personalForm.classList.add('active-form');
  }
  handleAdressForm = () => {
    this.handleRemoveDisplay();
    this.adressForm.classList.add('active-form');
  }

  render(){
    return ( 
      <div className="register-wrapper">
        <h2 className="register-header">Zarejestruj się</h2>
        <form className="form"> 
              <div id="basicForm" className="basic-data">
                <h2>1. Dane Podstawowe</h2>
                <label htmlFor="login"><i class="fa fa-user"></i> Login</label>
                <input onClick={this.handleLogin} id="login" type="text" name="login" placeholder="Wprowadź nazwę użytkownika"/>
                <label htmlFor="email"><i class="fa fa-envelope"></i> E-mail</label>
                <input id="mail" type="email" name="email" placeholder="Wprowadź adres e-mail"/>
                <label htmlFor="password1"><i class="fa fa-unlock"></i> Hasło</label>
                <input onChange={this.handlePassword1} id="password1" type="password" name="password1" placeholder="Wprowadź hasło"/>
                <label htmlFor="password2"><i class="fa fa-unlock-alt"></i> Powtórz Hasło</label>
                <input onChange={this.handlePassword2} id="password2" type="password" name="password2" placeholder="Powtórz hasło"/>  
                <div className="btn-wrapper">
                  <input onClick={this.handlePersonalForm} type="button" value="Dalej" />  
                </div>
              </div>
              <div id="personalForm" className="personal-data">
                <h2>2. Dane Osobowe</h2>
                <label htmlFor="name"><i class="fa fa-user-circle-o"></i> Imię</label>
                <input onClick={this.handleName} id="name" type="text" name="name" placeholder="Wprowadź imię"/>
                <label htmlFor="lastname"><i class="fa fa-user-circle"></i> Nazwisko</label>
                <input onClick={this.handleLastName} id="lastname" type="text" name="lastname" placeholder="Wprowadź nazwisko"/>
                <label htmlFor="personalId"><i class="fa fa-user"></i> Nr dowodu</label>
                <input id="personalId" type="text" name="personalId" placeholder="Wprowadź numer dowodu osobistego"/>
                <label htmlFor="pesel"><i class="fa fa-user"></i> PESEL</label>
                <input onChange={this.handlePesel} id="pesel" type="text" name="pesel" placeholder="Wprowadź PESEL"/> 
                <div className="btn-wrapper">
                  <input onClick={this.handleBasicForm} type="button" value="Wstecz" />
                  <input onClick={this.handleAdressForm} type="button" value="Dalej" />
                </div>
              </div>
              <div id="adressForm" className="adress-data">
                <h2>3. Adres</h2>
                <label htmlFor="street"><i class="fa fa-address-card"></i> Ulica</label>
                <input id="street" type="text" name="street" placeholder="Wprowadź ulice"/>
                <label htmlFor="city"><i class="fa fa-map-marker"></i> Miasto</label>
                <input id="city" type="text" name="city" placeholder="Wprowadź miasto"/>
                <label htmlFor="postcode"><i class="fa fa-location-arrow"></i> Kod Pocztowy</label>
                <input id="postcode" type="text" name="postcode" placeholder="Wprowadź kod pocztowy"/>
                <label htmlFor="phone"><i class="fa fa-phone"></i> Nr telefonu</label>
                <input onChange={this.handlePhone} id="phone" type="text" name="phone" placeholder="Wprowadź numer telefonu"/>
                <div className="btn-wrapper">
                  <input onClick={this.handlePersonalForm} type="button" value="Wstecz" />
                  <input onClick={this.handleRegister} type="button" value="Zarejestruj się" />
                </div>
              </div>
              
        </form>
        <div className="info-modal" id="infoModal"><i class="fa fa-info-circle"></i> { this.state.infoMessage }</div>
        <div className="links">
          <Link to="/login">Masz już konto? Zaloguj się!</Link>
          <Link to="/">Powrót do Strony Głównej</Link>
        </div>
      </div>
    );
  }
}

export default Register;