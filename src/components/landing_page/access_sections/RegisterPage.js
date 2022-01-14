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
  const [telephone, setTelephone] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [street, setStreet] = useState('');
  const [city, setCity] = useState('');
  const [houseNumber, setHouseNumber] = useState('');
  const [apartmentNumber, setApartmentNumber] = useState('');
  const [postalCode, setPostalCode] = useState('');
  const [bankNumber, setBankNumber] = useState('');

  const [infoMessage, setInfoMessage] = useState('');
  const [errorVisible, setErrorVisible] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
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
  const phoneField = document.getElementById('phone');
  const dateOfBirthField = document.getElementById('dateOfBirth');
  const streetField = document.getElementById('street');
  const cityField = document.getElementById('city');
  const houseNumberField = document.getElementById('houseNumber');
  const apartmentNumberField = document.getElementById('apartmentNumber');
  const postcodeField = document.getElementById('postcode');
  const accountNumberField = document.getElementById('accountNumber');


  const displayErrorModal = (message) => {
    setErrorVisible(true);
    setErrorMessage(message);
    setTimeout(() => {
      setErrorVisible(false);
      setErrorMessage('');
    }, 4000);
  };
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
    setInfoMessage('Hasło musi miec conajmniej 8 znaków, zawierać jedną dużą literę i jeden znak specjalny');
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
    setInfoMessage('Nazwisko musi mieścić się w przedziale od 3 do 22 znaków');
  };
  const handleId = () => {
    setInfoVisible(true);
    setInfoMessage('Nr dowodu musi składać się z trzech liter i sześciu cyfr');
  };
  const handlePesel = () => {
    setInfoVisible(true);
    setInfoMessage('PESEL musi mieć dokładnie 11 cyfr');
  };
  const handlePhone = () => {
    setInfoVisible(true);
    setInfoMessage('Numer telefonu musi mieć dokładnie 9 cyfr');
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
  const handleHouseNumber = () => {
    setInfoVisible(true);
    setInfoMessage('Numer domu może mieć maksymalnie 4 znaki');
  };
  const handleApartmentNumber = () => {
    setInfoVisible(true);
    setInfoMessage('Numer mieszkania może mieć maksymalnie 4 znaki');
  };
  const handlePostCode = () => {
    setInfoVisible(true);
    setInfoMessage('Kod pocztowy musi być w formacie 12-345');
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
    else if (phoneField === document.activeElement) setInfoVisible(true);
    else if (dateOfBirthField === document.activeElement) setInfoVisible(true);
    else if (streetField === document.activeElement) setInfoVisible(true);
    else if (cityField === document.activeElement) setInfoVisible(true);
    else if (houseNumberField === document.activeElement) setInfoVisible(true);
    else if (apartmentNumberField === document.activeElement) setInfoVisible(true);

    else if (postcodeField === document.activeElement) setInfoVisible(true);
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
      /* Validate always true, not checking a length in Validation(name) */
      if (
        /* login validate */
        Validation('email', email) &&
        Validation('password', password1Value, password2Value) &&
        Validation('password', password1Value, password2Value) !==
        'DifferentValues' &&
        !ifLoginExists.success &&
        !ifEmailExists.success
      ) {
        handleRemoveDisplay();
        personalForm.classList.add('active-form');
        loginField.classList.remove('fail');
        mailField.classList.remove('fail');
        password1Field.classList.remove('fail');
        password2Field.classList.remove('fail');
      } else {
        if (loginField.value.length < 6 || loginField.value.length > 12) {
          displayErrorModal('Wprowadź login w poprawnym formacie!');
          loginField.classList.add('fail');
        }
        else { loginField.classList.remove('fail'); }
        if (!Validation('email', email)) {
          displayErrorModal('Wprowadź mail w poprawnym formacie!');
          mailField.classList.add('fail');
        }
        else { mailField.classList.remove('fail'); }
        if (!Validation('password', password1Value, password2Value)) {
          displayErrorModal('Wprowadź hasło w poprawnym formacie!');
          password1Field.classList.add('fail');
          password2Field.classList.add('fail');
        } else {
          password1Field.classList.remove('fail');
          password2Field.classList.remove('fail');
        }
        if (
          Validation('password', password1Value, password2Value) ===
          'DifferentValues'
        ) {
          displayErrorModal('Podane hasła nie są zgodne!');
          password1Field.classList.add('fail');
          password2Field.classList.add('fail');
        }
        if (ifLoginExists.success)
          displayErrorModal('Użytkownik o podanym loginie istnieje w bazie!');
        if (ifEmailExists.success)
          displayErrorModal('Użytkownik o podanym emailu istnieje w bazie!');
      }
    } else displayErrorModal('Uzupełnij wszystkie pola!');
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
        /* firstname & lastname validate */
        Validation('name', firstName) &&
        Validation('name', lastName) &&
        /* Validation('personalId', personalId) && */
        Validation('telephone', telephone) &&
        Validation('pesel', pesel) &&
        Validation('birthDate', dateOfBirth)
      ) {
        handleRemoveDisplay();
        adressForm.classList.add('active-form');
        lastnameField.classList.remove('fail');
        nameField.classList.remove('fail');
        peselField.classList.remove('fail');
        personalIdField.classList.remove('fail');
        phoneField.classList.remove('fail');
        dateOfBirthField.classList.remove('fail');
      } else {
        if (nameField.value.length < 3 || nameField.value.length > 16) {
          displayErrorModal('Wprowadź imię w poprawnym formacie!');
          nameField.classList.add('fail');
        } else nameField.classList.remove('fail');
        if (lastnameField.value.length < 3 || lastnameField.value.length > 22) {
          console.log(lastnameField.value.length);
          displayErrorModal('Wprowadź nazwisko w poprawnym formacie!');
          lastnameField.classList.add('fail');
        } else lastnameField.classList.remove('fail');
        //!!!!  Validation isn't correct !!!!
        // if (!Validation('personalId', personalId)) {
        //   personalIdField.classList.add('fail');
        //   displayErrorModal(
        //     'Wprowadź numer dowodu osobistego w poprawnym formacie! (ABC123456)'
        //   );
        // } else personalIdField.classList.remove('fail');
        if (!Validation('pesel', pesel)) {
          peselField.classList.add('fail');
          displayErrorModal('Wprowadź numer PESEL w poprawnym formacie!');
        } else peselField.classList.remove('fail');
        if (!Validation('telephone', telephone)) {
          phoneField.classList.add('fail');
          displayErrorModal('Wprowadź numer telefonu w poprawnym formacie!');
        } else phoneField.classList.remove('fail');
        if (!Validation('birthDate', dateOfBirth)) {
          dateOfBirthField.classList.add('fail');
          displayErrorModal('Musisz mieć ukończone 18 lat!');
        } else dateOfBirthField.classList.remove('fail');
      }
    } else displayErrorModal('Uzupełnij wszystkie pola!');
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
        /* street & city validate */
        Validation('name', street) &&
        Validation('name', city) &&
        Validation('postalCode', postalCode) &&
        Validation('accountNumber', bankNumber)
        /* Add Validation for house number & apartment number. ONLY IN THIS IF STATEMENT */
      ) {
        // LoadingBar?
        alert('Rejestruję!');
        streetField.classList.remove('fail');
        cityField.classList.remove('fail');
        houseNumberField.classList.remove('fail');
        apartmentNumberField.classList.remove('fail');
      } else {

        if (streetField.value.length < 5) {
          streetField.classList.add('fail');
          displayErrorModal('Wprowadź nazwę ulicy w poprawnym formacie!');
        } else streetField.classList.remove('fail');
        if (cityField.value.length < 3) {
          cityField.classList.add('fail');
          displayErrorModal('Wprowadź nazwę miasta w poprawnym formacie!');
        } else cityField.classList.remove('fail');
        if (houseNumberField.value.length > 4) {
          houseNumberField.classList.add('fail');
          displayErrorModal('Wprowadź numer domu w poprawnym formacie!');
        } else houseNumberField.classList.remove('fail');
        if (apartmentNumberField.value.length > 4) {
          apartmentNumberField.classList.add('fail');
          displayErrorModal('Wprowadź numer mieszkania w poprawnym formacie!');
        } else apartmentNumberField.classList.remove('fail');
        if (!Validation('postalCode', postalCode)) {
          postcodeField.classList.add('fail');
          displayErrorModal('Wprowadź kod pocztowy w poprawnym formacie! (ABC-12345)');
        } else postcodeField.classList.remove('fail');

        if (!Validation('accountNumber', bankNumber)) {
          accountNumberField.classList.add('fail');
          displayErrorModal('Wprowadź poprawny numer konta bankowego!');
        } else accountNumberField.classList.remove('fail');
      }
    } else displayErrorModal('Wszystkie pola muszą być wypełnione!');
  };

  return (
    <div onClick={handleRemoveActiveInfo} className='register-wrapper'>
      <div className="hello">
        <h2 className='register-header'>Zarejestruj się</h2>
        <span>Zaufało nam tysiące polaków! Dołączysz do nich?</span>
      </div>
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
            type='text'
            name='password1'
            placeholder='Wprowadź hasło'
          />
          <label htmlFor='password2'>
            <i className='fa fa-unlock-alt'></i> Powtórz Hasło
          </label>
          <input
            onClick={handlePassword2}
            id='password2'
            type='text'
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
          <label htmlFor='houseNumber'>
            <i className='fa fa-home'></i> Nr Domu
          </label>
          <input
            onClick={handleHouseNumber}
            id='houseNumber'
            type='text'
            name='houseNumber'
            placeholder='Wprowadź nr domu'
            value={houseNumber}
            onChange={(e) => setHouseNumber(e.target.value)}
          />
          <label htmlFor='apartmentNumber'>
            <i className='fa fa-building'></i> Nr mieszkania
          </label>
          <input
            onClick={handleApartmentNumber}
            id='apartmentNumber'
            type='text'
            name='apartmentNumber'
            placeholder='Wprowadź nr mieszkania'
            value={apartmentNumber}
            onChange={(e) => setApartmentNumber(e.target.value)}
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
      {errorVisible && <div className="error-modal" id="errorModal">
        <i className="fa fa-info-circle"></i> <span id="errorMessage">{errorMessage}</span>
      </div>}

      <div className='links'>
        <Link to='/login'>Masz już konto? Zaloguj się!</Link>
        <Link to='/'>Powrót do Strony Głównej</Link>
      </div>
    </div>
  );
};

export default Register;
