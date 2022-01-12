import React from 'react';
import { Link } from 'react-router-dom';
import InfoModal from '../../features/modals/InfoModal';

class Register extends React.Component {

  state = {
    infoVisible: false,
    isLogged: false,
  }

  componentDidMount() {
    this.basicForm = document.getElementById('basicForm');
    this.personalForm = document.getElementById('personalForm');
    this.adressForm = document.getElementById('adressForm');
    this.basicForm.classList.add('active-form');

    this.login = document.getElementById('login');
    this.mail = document.getElementById('mail');
    this.password1 = document.getElementById('password1');
    this.password2 = document.getElementById('password2');
    this.name = document.getElementById('name');
    this.lastname = document.getElementById('lastname');
    this.personalId = document.getElementById('personalId');
    this.pesel = document.getElementById('pesel');
    this.dateOfBirth = document.getElementById('dateOfBirth');
    this.street = document.getElementById('street');
    this.city = document.getElementById('city');
    this.postcode = document.getElementById('postcode');
    this.phone = document.getElementById('phone');
    this.accountNumber = document.getElementById('accountNumber');
  }

  handleLogin = () => {
    this.setState({ infoVisible: true });
    this.infoMessage = 'Login musi mieścić się w przedziale od 6 do 12 znaków';
  }
  handleMail = () => {
    this.setState({ infoVisible: true });
    this.infoMessage = 'Mail musi mieć domenę poprzedzoną znakiem at(@)';
  }
  handlePassword1 = () => {
    this.setState({ infoVisible: true });
    this.infoMessage = 'Hasło musi miec conajmniej 8 znaków';
  }
  handlePassword2 = () => {
    this.setState({ infoVisible: true });
    this.infoMessage = 'Hasła muszą być identyczne';
  }
  handleName = () => {
    this.setState({ infoVisible: true });
    this.infoMessage = 'Imię musi mieścić się w przedziale od 3 do 16 znaków';
  }
  handleLastName = () => {
    this.setState({ infoVisible: true });
    this.infoMessage = 'Nazwisko musi mieścić się w przedziale od 3 do 18 znaków';
  }
  handleId = () => {
    this.setState({ infoVisible: true });
    this.infoMessage = 'Nr dowodu musi składać się z trzech liter i sześciu cyfr';
  }
  handlePesel = () => {
    this.setState({ infoVisible: true });
    this.infoMessage = 'PESEL musi mieć dokładnie 11 cyfr';
  }
  handleDateOfBirth = () => {
    this.setState({ infoVisible: true });
    this.infoMessage = 'Musisz mieć conajmniej 18 lat';
  }
  handleStreet = () => {
    this.setState({ infoVisible: true });
    this.infoMessage = 'Ulica musi zawierać conajmniej 5 znaków';
  }
  handleCity = () => {
    this.setState({ infoVisible: true });
    this.infoMessage = 'Miasto musi zawierać conajmniej 3 znaki';
  }
  handlePostCode = () => {
    this.setState({ infoVisible: true });
    this.infoMessage = 'Kod pocztowy musi być w formacie 12-345';
  }
  handlePhone = () => {
    this.setState({ infoVisible: true });
    this.infoMessage = 'Numer telefonu musi mieć dokładnie 9 cyfr';
  }
  handleAccountNumber = () => {
    this.setState({ infoVisible: true });
    this.infoMessage = 'Numer konta musi zawierać dokładnie 26 cyfr'
  }

  handleRemoveActiveInfo = () => {
    if (this.login === document.activeElement) this.setState({ infoVisible: true });
    else if (this.mail === document.activeElement) this.setState({ infoVisible: true });
    else if (this.password1 === document.activeElement) this.setState({ infoVisible: true });
    else if (this.password2 === document.activeElement) this.setState({ infoVisible: true });
    else if (this.name === document.activeElement) this.setState({ infoVisible: true });
    else if (this.lastname === document.activeElement) this.setState({ infoVisible: true });
    else if (this.personalId === document.activeElement) this.setState({ infoVisible: true });
    else if (this.pesel === document.activeElement) this.setState({ infoVisible: true });
    else if (this.dateOfBirth === document.activeElement) this.setState({ infoVisible: true });
    else if (this.street === document.activeElement) this.setState({ infoVisible: true });
    else if (this.city === document.activeElement) this.setState({ infoVisible: true });
    else if (this.postcode === document.activeElement) this.setState({ infoVisible: true });
    else if (this.phone === document.activeElement) this.setState({ infoVisible: true });
    else if (this.accountNumber === document.activeElement) this.setState({ infoVisible: true });

    else this.setState({ infoVisible: false });
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

  render() {
    return (
      <div onClick={this.handleRemoveActiveInfo} className="register-wrapper">
        <h2 className="register-header">Zarejestruj się</h2>
        <form className="form">
          <div id="basicForm" className="basic-data">
            <h2>1. Dane Podstawowe</h2>
            <label htmlFor="login"><i className="fa fa-user"></i> Login</label>
            <input onClick={this.handleLogin} id="login" type="text" name="login" placeholder="Wprowadź nazwę użytkownika" />
            <label htmlFor="email"><i className="fa fa-envelope"></i> E-mail</label>
            <input onClick={this.handleMail} id="mail" type="email" name="email" placeholder="Wprowadź adres e-mail" />
            <label htmlFor="password1"><i className="fa fa-unlock"></i> Hasło</label>
            <input onClick={this.handlePassword1} id="password1" type="password" name="password1" placeholder="Wprowadź hasło" />
            <label htmlFor="password2"><i className="fa fa-unlock-alt"></i> Powtórz Hasło</label>
            <input onClick={this.handlePassword2} id="password2" type="password" name="password2" placeholder="Powtórz hasło" />
            <div className="btn-wrapper">
              <input onClick={this.handlePersonalForm} type="button" value="Dalej" />
            </div>
          </div>
          <div id="personalForm" className="personal-data">
            <h2>2. Dane Osobowe</h2>
            <label htmlFor="name"><i className="fa fa-user-circle-o"></i> Imię</label>
            <input onClick={this.handleName} id="name" type="text" name="name" placeholder="Wprowadź imię" />
            <label htmlFor="lastname"><i className="fa fa-user-circle"></i> Nazwisko</label>
            <input onClick={this.handleLastName} id="lastname" type="text" name="lastname" placeholder="Wprowadź nazwisko" />
            <label htmlFor="personalId"><i className="fa fa-user"></i> Nr dowodu</label>
            <input onClick={this.handleId} id="personalId" type="text" name="personalId" placeholder="Wprowadź numer dowodu osobistego" />
            <label htmlFor="pesel"><i className="fa fa-user"></i> PESEL</label>
            <input onClick={this.handlePesel} id="pesel" type="text" name="pesel" placeholder="Wprowadź PESEL" />
            <label htmlFor="dateOfBirth"><i className="fa fa-calendar"></i> Data Urodzenia</label>
            <input onClick={this.handleDateOfBirth} id="dateOfBirth" type="date" name="date" placeholder="Wprowadź Datę Urodzenia" />
            <div className="btn-wrapper">
              <input onClick={this.handleBasicForm} type="button" value="Wstecz" />
              <input onClick={this.handleAdressForm} type="button" value="Dalej" />
            </div>
          </div>
          <div id="adressForm" className="adress-data">
            <h2>3. Adres</h2>
            <label htmlFor="street"><i className="fa fa-address-card"></i> Ulica</label>
            <input onClick={this.handleStreet} id="street" type="text" name="street" placeholder="Wprowadź ulice" />
            <label htmlFor="city"><i className="fa fa-map-marker"></i> Miasto</label>
            <input onClick={this.handleCity} id="city" type="text" name="city" placeholder="Wprowadź miasto" />
            <label htmlFor="postcode"><i className="fa fa-location-arrow"></i> Kod Pocztowy</label>
            <input onClick={this.handlePostCode} id="postcode" type="text" name="postcode" placeholder="Wprowadź kod pocztowy" />
            <label htmlFor="phone"><i className="fa fa-phone"></i> Nr telefonu</label>
            <input onClick={this.handlePhone} id="phone" type="text" name="phone" placeholder="Wprowadź numer telefonu" />
            <label htmlFor="accountNumber"><i className="fa fa-university"></i> Nr Konta</label>
            <input onClick={this.handleAccountNumber} id="accountNumber" type="text" name="accountNumber" placeholder="Wprowadź numer konta bankowego" />
            <div className="btn-wrapper">
              <input onClick={this.handlePersonalForm} type="button" value="Wstecz" />
              <input onClick={this.handleRegister} type="button" value="Zarejestruj się" />
            </div>
          </div>

        </form>
        <InfoModal position="left" visible={this.state.infoVisible} message={this.infoMessage} />
        <div className="links">
          <Link to="/login">Masz już konto? Zaloguj się!</Link>
          <Link to="/">Powrót do Strony Głównej</Link>
        </div>
      </div>
    );
  }
}

export default Register;