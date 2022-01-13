import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import InfoModal from '../../features/modals/InfoModal';
import Validation from '../../features/Validation';
const Register = () => {
  const [infoVisible, setInfoVisible] = useState(false);
  const [isLogged, setIsLogged] = useState(false);

  const [login, setLogin] = useState('');
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [personalId, setPersonalId] = useState('');
  const [pesel, setPesel] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [street, setStreet] = useState('');
  const [city, setCity] = useState('');
  const [postalCode, setPostalCode] = useState('');
  const [telephone, setTelephone] = useState('');
  const [bankNumber, setBankNumber] = useState('');

  const [infoMessage, setInfoMessage] = useState('');

  const basicForm = document.getElementById('basicForm');
  const personalForm = document.getElementById('personalForm');
  const adressForm = document.getElementById('adressForm');

  const loginField = document.getElementById('login');
  const mailField = document.getElementById('mail');
  const password1Field = document.getElementById('password1');
  const password2Field = document.getElementById('password2');
  const nameField = document.getElementById('name');
  const lastnameField = document.getElementById('lastname');
  const personalIdField = document.getElementById('personalId');
  const peselField = document.getElementById('pesel');
  const dateOfBirthField = document.getElementById('dateOfBirth');
  const streetField = document.getElementById('street');
  const cityField = document.getElementById('city');
  const postcodeField = document.getElementById('postcode');
  const phoneField = document.getElementById('phone');
  const accountNumberField = document.getElementById('accountNumber');

  const handleLogin = () => {
    setInfoVisible(true);
    setInfoMessage('Login musi mieścić się w przedziale od 6 do 12 znaków');
  };
  const handleMail = () => {
    setInfoVisible(true);
    setInfoMessage('Mail musi mieć domenę poprzedzoną znakiem at(@)');
  };
  const handlePassword1 = () => {
    setInfoVisible(true);
    setInfoMessage('Hasło musi miec conajmniej 8 znaków');
  };
  const handlePassword2 = () => {
    setInfoVisible(true);
    setInfoMessage('Hasła muszą być identyczne');
  };
  const handleName = () => {
    setInfoVisible(true);
    setInfoMessage('Imię musi mieścić się w przedziale od 3 do 16 znaków');
  };
  const handleLastName = () => {
    setInfoVisible(true);
    setInfoMessage('Nazwisko musi mieścić się w przedziale od 3 do 18 znaków');
  };
  const handleId = () => {
    setInfoVisible(true);
    setInfoMessage('Nr dowodu musi składać się z trzech liter i sześciu cyfr');
  };
  const handlePesel = () => {
    setInfoVisible(true);
    setInfoMessage('PESEL musi mieć dokładnie 11 cyfr');
  };
  const handleDateOfBirth = () => {
    setInfoVisible(true);
    setInfoMessage('Musisz mieć conajmniej 18 lat');
  };
  const handleStreet = () => {
    setInfoVisible(true);
    setInfoMessage('Ulica musi zawierać conajmniej 5 znaków');
  };
  const handleCity = () => {
    setInfoVisible(true);
    setInfoMessage('Miasto musi zawierać conajmniej 3 znaki');
  };
  const handlePostCode = () => {
    setInfoVisible(true);
    setInfoMessage('Kod pocztowy musi być w formacie 12-345');
  };
  const handlePhone = () => {
    setInfoVisible(true);
    setInfoMessage('Numer telefonu musi mieć dokładnie 9 cyfr');
  };
  const handleAccountNumber = () => {
    setInfoVisible(true);
    setInfoMessage('Numer konta musi zawierać dokładnie 26 cyfr');
  };

  const handleRemoveActiveInfo = () => {
    if (loginField === document.activeElement) setInfoVisible(true);
    else if (mailField === document.activeElement) setInfoVisible(true);
    else if (password1Field === document.activeElement) setInfoVisible(true);
    else if (password2Field === document.activeElement) setInfoVisible(true);
    else if (nameField === document.activeElement) setInfoVisible(true);
    else if (lastnameField === document.activeElement) setInfoVisible(true);
    else if (personalIdField === document.activeElement) setInfoVisible(true);
    else if (peselField === document.activeElement) setInfoVisible(true);
    else if (dateOfBirthField === document.activeElement) setInfoVisible(true);
    else if (streetField === document.activeElement) setInfoVisible(true);
    else if (cityField === document.activeElement) setInfoVisible(true);
    else if (postcodeField === document.activeElement) setInfoVisible(true);
    else if (phoneField === document.activeElement) setInfoVisible(true);
    else if (accountNumberField === document.activeElement)
      setInfoVisible(true);
    else setInfoVisible(false);
  };

  // const validate
  const handleRemoveDisplay = () => {
    basicForm.classList.remove('active-form');
    personalForm.classList.remove('active-form');
    adressForm.classList.remove('active-form');
  };

  const handleBasicForm = () => {
    handleRemoveDisplay();
    basicForm.classList.add('active-form');
  };
  const handlePersonalForm = async () => {
    const password1Value = document.getElementById('password1').value;
    const password2Value = document.getElementById('password2').value;

    const API = `http://localhost/api/v1/usercheck/`;
    const ifLoginExists = await fetch(API + login + '&login')
      .then((response) => response.json())
      .catch((err) => console.log(err));

    const ifEmailExists = await fetch(API + email + '&email')
      .then((response) => response.json())
      .catch((err) => console.log(err));

    if (
      login !== '' &&
      email !== '' &&
      password1Value !== '' &&
      password2Value !== ''
    ) {
      if (
        Validation('email', email) &&
        Validation('password', password1Value, password2Value) &&
        Validation('password', password1Value, password2Value) !==
          'DifferentValues' &&
        !ifLoginExists.success &&
        !ifEmailExists.success
      ) {
        handleRemoveDisplay();
        personalForm.classList.add('active-form');
      } else {
        if (!Validation('email', email)) alert('Niepoprawny email');
        if (!Validation('password', password1Value, password2Value))
          alert('Niepoprawne hasło');
        if (
          Validation('password', password1Value, password2Value) ===
          'DifferentValues'
        )
          alert('Podane hasła nie są zgodne');

        if (ifLoginExists.success)
          alert('użytkownik o podanym loginie istnieje w bazie');
        if (ifEmailExists.success)
          alert('użytkownik o podanym emailu istnieje w bazie');
      }
    } else alert('Wypełnij wszystkie pola!');
  };

  const handleAdressForm = () => {
    if (
      firstName !== '' &&
      lastName !== '' &&
      personalId !== '' &&
      pesel !== '' &&
      dateOfBirth !== ''
    ) {
      if (
        Validation('name', firstName) &&
        Validation('name', lastName) &&
        Validation('personalId', personalId) &&
        Validation('pesel', pesel) &&
        Validation('birthDate', dateOfBirth)
      ) {
        handleRemoveDisplay();
        adressForm.classList.add('active-form');
      } else {
        if (!Validation('name', firstName))
          alert('Wprowadź imię w poprawnym formacie!');
        if (!Validation('name', lastName))
          alert('Wprowadź nazwisko w poprawnym formacie!');
        if (!Validation('personalId', personalId))
          alert(
            'Wprowadź numer dowodu osobistego w poprawnym formacie! (ABC123456)'
          );
        if (!Validation('pesel', pesel))
          alert('Wprowadź numer PESEL w poprawnym formacie!');
        if (!Validation('birthDate', dateOfBirth))
          alert('Musisz mieć ukończone 18 lat!');
      }
    } else alert('Wszystkie pola muszą być wypełnione!');
  };

  const handleRegister = () => {
    if (
      street !== '' &&
      city !== '' &&
      postalCode !== '' &&
      telephone !== '' &&
      bankNumber !== ''
    ) {
      if (
        Validation('name', street) &&
        Validation('name', city) &&
        Validation('postalCode', postalCode) &&
        Validation('telephone', telephone) &&
        Validation('accountNumber', bankNumber)
      ) {
        alert('Rejestruję!');
      } else {
        if (!Validation('name', street))
          alert('Wprowadź nazwę ulicy w poprawnym formacie!');
        if (!Validation('name', city))
          alert('Wprowadź nazwę miasta w poprawnym formacie!');
        if (!Validation('postalCode', postalCode))
          alert('Wprowadź kod pocztowy w poprawnym formacie! (ABC-12345)');
        if (!Validation('telephone', telephone))
          alert('Wprowadź numer telefonu w poprawnym formacie!');
        if (!Validation('accountNumber', bankNumber))
          alert('Wprowadź poprawny numer konta bankowego!');
      }
    } else alert('Wszystkie pola muszą być wypełnione!');
  };

  return (
    <div onClick={handleRemoveActiveInfo} className='register-wrapper'>
      <h2 className='register-header'>Zarejestruj się</h2>
      <form className='form'>
        <div id='basicForm' className='basic-data active-form'>
          <h2>1. Dane Podstawowe</h2>
          <label htmlFor='login'>
            <i className='fa fa-user'></i> Login
          </label>
          <input
            onClick={handleLogin}
            id='login'
            type='text'
            name='login'
            placeholder='Wprowadź nazwę użytkownika'
            value={login}
            onChange={(e) => setLogin(e.target.value)}
          />
          <label htmlFor='email'>
            <i className='fa fa-envelope'></i> E-mail
          </label>
          <input
            onClick={handleMail}
            id='mail'
            type='email'
            name='email'
            placeholder='Wprowadź adres e-mail'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor='password1'>
            <i className='fa fa-unlock'></i> Hasło
          </label>
          <input
            onClick={handlePassword1}
            id='password1'
            type='password'
            name='password1'
            placeholder='Wprowadź hasło'
          />
          <label htmlFor='password2'>
            <i className='fa fa-unlock-alt'></i> Powtórz Hasło
          </label>
          <input
            onClick={handlePassword2}
            id='password2'
            type='password'
            name='password2'
            placeholder='Powtórz hasło'
          />
          <div className='btn-wrapper'>
            <input onClick={handlePersonalForm} type='button' value='Dalej' />
          </div>
        </div>
        <div id='personalForm' className='personal-data'>
          <h2>2. Dane Osobowe</h2>
          <label htmlFor='name'>
            <i className='fa fa-user-circle-o'></i> Imię
          </label>
          <input
            onClick={handleName}
            id='name'
            type='text'
            name='name'
            placeholder='Wprowadź imię'
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <label htmlFor='lastname'>
            <i className='fa fa-user-circle'></i> Nazwisko
          </label>
          <input
            onClick={handleLastName}
            id='lastname'
            type='text'
            name='lastname'
            placeholder='Wprowadź nazwisko'
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
          <label htmlFor='personalId'>
            <i className='fa fa-user'></i> Nr dowodu
          </label>
          <input
            onClick={handleId}
            id='personalId'
            type='text'
            name='personalId'
            placeholder='Wprowadź numer dowodu osobistego'
            value={personalId}
            onChange={(e) => setPersonalId(e.target.value)}
          />
          <label htmlFor='pesel'>
            <i className='fa fa-user'></i> PESEL
          </label>
          <input
            onClick={handlePesel}
            id='pesel'
            type='text'
            name='pesel'
            placeholder='Wprowadź PESEL'
            value={pesel}
            onChange={(e) => setPesel(e.target.value)}
          />
          <label htmlFor='dateOfBirth'>
            <i className='fa fa-calendar'></i> Data Urodzenia
          </label>
          <input
            onClick={handleDateOfBirth}
            id='dateOfBirth'
            type='date'
            name='date'
            placeholder='Wprowadź Datę Urodzenia'
            value={dateOfBirth}
            onChange={(e) => setDateOfBirth(e.target.value)}
          />
          <div className='btn-wrapper'>
            <input onClick={handleBasicForm} type='button' value='Wstecz' />
            <input onClick={handleAdressForm} type='button' value='Dalej' />
          </div>
        </div>
        <div id='adressForm' className='adress-data'>
          <h2>3. Adres</h2>
          <label htmlFor='street'>
            <i className='fa fa-address-card'></i> Ulica
          </label>
          <input
            onClick={handleStreet}
            id='street'
            type='text'
            name='street'
            placeholder='Wprowadź ulice'
            value={street}
            onChange={(e) => setStreet(e.target.value)}
          />
          <label htmlFor='city'>
            <i className='fa fa-map-marker'></i> Miasto
          </label>
          <input
            onClick={handleCity}
            id='city'
            type='text'
            name='city'
            placeholder='Wprowadź miasto'
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
          <label htmlFor='postcode'>
            <i className='fa fa-location-arrow'></i> Kod Pocztowy
          </label>
          <input
            onClick={handlePostCode}
            id='postcode'
            type='text'
            name='postcode'
            placeholder='Wprowadź kod pocztowy'
            value={postalCode}
            onChange={(e) => setPostalCode(e.target.value)}
          />
          <label htmlFor='phone'>
            <i className='fa fa-phone'></i> Nr telefonu
          </label>
          <input
            onClick={handlePhone}
            id='phone'
            type='text'
            name='phone'
            placeholder='Wprowadź numer telefonu'
            value={telephone}
            onChange={(e) => setTelephone(e.target.value)}
          />
          <label htmlFor='accountNumber'>
            <i className='fa fa-university'></i> Nr Konta
          </label>
          <input
            onClick={handleAccountNumber}
            id='accountNumber'
            type='text'
            name='accountNumber'
            placeholder='Wprowadź numer konta bankowego'
            value={bankNumber}
            onChange={(e) => setBankNumber(e.target.value)}
          />
          <div className='btn-wrapper'>
            <input onClick={handlePersonalForm} type='button' value='Wstecz' />
            <input
              onClick={handleRegister}
              type='button'
              value='Zarejestruj się'
            />
          </div>
        </div>
      </form>
      <InfoModal position='left' visible={infoVisible} message={infoMessage} />
      <div className='links'>
        <Link to='/login'>Masz już konto? Zaloguj się!</Link>
        <Link to='/'>Powrót do Strony Głównej</Link>
      </div>
    </div>
  );
};

export default Register;
