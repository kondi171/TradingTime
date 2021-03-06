import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import InfoModal from '../../features/modals/InfoModal';
import Validation from '../../features/Validation';
import LoadingBar from '../../features/LoadingBar';
import CapitalizeString from '../../helpers/CapitalizeString';

const Register = () => {
  const navigate = useNavigate();

  const [infoVisible, setInfoVisible] = useState(false);
  const [isLogged, setIsLogged] = useState(false);

  const [loading, setLoading] = useState(false);

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
    setInfoMessage('Login musi mie??ci?? si?? w przedziale od 6 do 12 znak??w');
  };
  const handleMail = () => {
    setInfoVisible(true);
    setInfoMessage('Mail musi mie?? domen?? poprzedzon?? znakiem at(@)');
  };
  const handlePassword1 = () => {
    setInfoVisible(true);
    setInfoMessage(
      'Has??o musi miec conajmniej 8 znak??w, zawiera?? jedn?? du???? liter?? i jeden znak specjalny'
    );
  };
  const handlePassword2 = () => {
    setInfoVisible(true);
    setInfoMessage('Has??a musz?? by?? identyczne');
  };
  const handleName = () => {
    setInfoVisible(true);
    setInfoMessage('Imi?? musi mie??ci?? si?? w przedziale od 3 do 16 znak??w');
  };
  const handleLastName = () => {
    setInfoVisible(true);
    setInfoMessage('Nazwisko musi mie??ci?? si?? w przedziale od 3 do 22 znak??w');
  };
  const handleId = () => {
    setInfoVisible(true);
    setInfoMessage('Nr dowodu musi sk??ada?? si?? z trzech liter i sze??ciu cyfr');
  };
  const handlePesel = () => {
    setInfoVisible(true);
    setInfoMessage('PESEL musi mie?? dok??adnie 11 cyfr');
  };
  const handlePhone = () => {
    setInfoVisible(true);
    setInfoMessage('Numer telefonu musi mie?? dok??adnie 9 cyfr');
  };
  const handleDateOfBirth = () => {
    setInfoVisible(true);
    setInfoMessage('Musisz mie?? conajmniej 18 lat');
  };
  const handleStreet = () => {
    setInfoVisible(true);
    setInfoMessage('Ulica musi zawiera?? conajmniej 5 znak??w');
  };
  const handleCity = () => {
    setInfoVisible(true);
    setInfoMessage('Miasto musi zawiera?? conajmniej 3 znaki');
  };
  const handleHouseNumber = () => {
    setInfoVisible(true);
    setInfoMessage('Numer domu mo??e mie?? maksymalnie 4 znaki');
  };
  const handleApartmentNumber = () => {
    setInfoVisible(true);
    setInfoMessage(
      'Numer mieszkania mo??e mie?? maksymalnie 4 znaki. Je??eli pole ma by?? puste, wstaw "-"'
    );
  };
  const handlePostCode = () => {
    setInfoVisible(true);
    setInfoMessage('Kod pocztowy musi by?? w formacie 12-345');
  };
  const handleAccountNumber = () => {
    setInfoVisible(true);
    setInfoMessage('Numer konta musi zawiera?? dok??adnie 26 cyfr');
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
    else if (apartmentNumberField === document.activeElement)
      setInfoVisible(true);
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
          displayErrorModal('Wprowad?? login w poprawnym formacie!');
          loginField.classList.add('fail');
        } else {
          loginField.classList.remove('fail');
        }

        if (!Validation('email', email)) {
          displayErrorModal('Wprowad?? mail w poprawnym formacie!');
          mailField.classList.add('fail');
        } else {
          mailField.classList.remove('fail');
        }
        if (!Validation('password', password1Value, password2Value)) {
          displayErrorModal('Wprowad?? has??o w poprawnym formacie!');
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
          displayErrorModal('Podane has??a nie s?? zgodne!');
          password1Field.classList.add('fail');
          password2Field.classList.add('fail');
        }
        if (ifLoginExists.success) {
          displayErrorModal('U??ytkownik o podanym loginie istnieje w bazie!');
          loginField.classList.add('fail');
        } else loginField.classList.remove('fail');

        if (ifEmailExists.success) {
          displayErrorModal('U??ytkownik o podanym emailu istnieje w bazie!');
        } else {
          mailField.classList.remove('fail');
        }
      }
    } else displayErrorModal('Uzupe??nij wszystkie pola!');
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
        Validation('personalId', personalId) &&
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
          displayErrorModal('Wprowad?? imi?? w poprawnym formacie!');
          nameField.classList.add('fail');
        } else nameField.classList.remove('fail');
        if (lastnameField.value.length < 3 || lastnameField.value.length > 22) {
          console.log(lastnameField.value.length);
          displayErrorModal('Wprowad?? nazwisko w poprawnym formacie!');
          lastnameField.classList.add('fail');
        } else lastnameField.classList.remove('fail');
        //!!!!  Validation isn't correct !!!!
        if (!Validation('personalId', personalId)) {
          personalIdField.classList.add('fail');
          displayErrorModal(
            'Wprowad?? numer dowodu osobistego w poprawnym formacie! (ABC123456)'
          );
        } else personalIdField.classList.remove('fail');
        if (!Validation('pesel', pesel)) {
          peselField.classList.add('fail');
          displayErrorModal('Wprowad?? numer PESEL w poprawnym formacie!');
        } else peselField.classList.remove('fail');
        if (!Validation('telephone', telephone)) {
          phoneField.classList.add('fail');
          displayErrorModal('Wprowad?? numer telefonu w poprawnym formacie!');
        } else phoneField.classList.remove('fail');
        if (!Validation('birthDate', dateOfBirth)) {
          dateOfBirthField.classList.add('fail');
          displayErrorModal('Musisz mie?? uko??czone 18 lat!');
        } else dateOfBirthField.classList.remove('fail');
      }
    } else displayErrorModal('Uzupe??nij wszystkie pola!');
  };

  const handleRegister = async () => {
    const passwordValue = document.getElementById('password1').value;

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
        Validation('accountNumber', bankNumber) &&
        Validation('houseNumber', houseNumber) &&
        Validation('apartmentNumber', apartmentNumber)
      ) {
        setLoading(true);
        const API = 'http://localhost/api/v1/registry';

        const fetchParams = new URLSearchParams({
          login: login,
          firstName: CapitalizeString(firstName),
          lastName: CapitalizeString(lastName),
          email: email,
          password: passwordValue,
          personalId: personalId,
          pesel: pesel,
          telephone: telephone,
          birthDate: dateOfBirth,
          street: CapitalizeString(street),
          city: CapitalizeString(city),
          house: houseNumber,
          apartment: apartmentNumber,
          postalCode: postalCode,
          bankAccount: bankNumber,
        });

        const register = await fetch(API, {
          method: 'post',
          body: fetchParams,
        })
          .then((response) => response.json())
          .catch((err) => console.log(err));

        if (register.success) {
          navigate('/login');
          setLoading(false);
        } else {
          setLoading(false);
          displayErrorModal('Nie uda??o si?? zarejestrowa??! Spr??buj ponownie');
        }

        streetField.classList.remove('fail');
        cityField.classList.remove('fail');
        houseNumberField.classList.remove('fail');
        apartmentNumberField.classList.remove('fail');
      } else {
        if (Validation('name', street) && streetField.value.length < 5) {
          streetField.classList.add('fail');
          displayErrorModal('Wprowad?? nazw?? ulicy w poprawnym formacie!');
        } else streetField.classList.remove('fail');
        if (Validation('name', city) && cityField.value.length < 3) {
          cityField.classList.add('fail');
          displayErrorModal('Wprowad?? nazw?? miasta w poprawnym formacie!');
        } else cityField.classList.remove('fail');
        if (
          Validation('houseNumber', houseNumber) &&
          houseNumberField.value.length > 4
        ) {
          houseNumberField.classList.add('fail');
          displayErrorModal('Wprowad?? numer domu w poprawnym formacie!');
        } else houseNumberField.classList.remove('fail');
        if (
          (Validation('apartmentNumber', apartmentNumber) &&
            apartmentNumberField.value.length > 4) ||
          apartmentNumber === '-'
        ) {
          apartmentNumberField.classList.add('fail');
          displayErrorModal(
            'Wprowad?? numer mieszkania w poprawnym formacie! (Je??eli pole ma by?? puste wstaw "-")'
          );
        } else apartmentNumberField.classList.remove('fail');
        if (!Validation('postalCode', postalCode)) {
          postcodeField.classList.add('fail');
          displayErrorModal(
            'Wprowad?? kod pocztowy w poprawnym formacie! (ABC-12345)'
          );
        } else postcodeField.classList.remove('fail');

        if (!Validation('accountNumber', bankNumber)) {
          accountNumberField.classList.add('fail');
          displayErrorModal('Wprowad?? poprawny numer konta bankowego!');
        } else accountNumberField.classList.remove('fail');
      }
    } else displayErrorModal('Wszystkie pola musz?? by?? wype??nione!');
  };

  return (
    <div onClick={handleRemoveActiveInfo} className='register-wrapper'>
      <div className='hello'>
        <h2 className='register-header'>Zarejestruj si??</h2>
        <span>Zaufa??o nam tysi??ce polak??w! Do????czysz do nich?</span>
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
            placeholder='Wprowad?? nazw?? u??ytkownika'
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
            placeholder='Wprowad?? adres e-mail'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor='password1'>
            <i className='fa fa-unlock'></i> Has??o
          </label>
          <input
            onClick={handlePassword1}
            id='password1'
            type='password'
            name='password1'
            placeholder='Wprowad?? has??o'
          />
          <label htmlFor='password2'>
            <i className='fa fa-unlock-alt'></i> Powt??rz Has??o
          </label>
          <input
            onClick={handlePassword2}
            id='password2'
            type='password'
            name='password2'
            placeholder='Powt??rz has??o'
          />
          <div className='btn-wrapper'>
            <input onClick={handlePersonalForm} type='button' value='Dalej' />
          </div>
        </div>
        <div id='personalForm' className='personal-data'>
          <h2>2. Dane Osobowe</h2>
          <label htmlFor='name'>
            <i className='fa fa-user-circle-o'></i> Imi??
          </label>
          <input
            onClick={handleName}
            id='name'
            type='text'
            name='name'
            placeholder='Wprowad?? imi??'
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
            placeholder='Wprowad?? nazwisko'
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
            placeholder='Wprowad?? numer dowodu osobistego'
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
            placeholder='Wprowad?? PESEL'
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
            placeholder='Wprowad?? numer telefonu'
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
            placeholder='Wprowad?? Dat?? Urodzenia'
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
            placeholder='Wprowad?? ulice'
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
            placeholder='Wprowad?? miasto'
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
            placeholder='Wprowad?? nr domu'
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
            placeholder='Wprowad?? nr mieszkania'
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
            placeholder='Wprowad?? kod pocztowy'
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
            placeholder='Wprowad?? numer konta bankowego'
            value={bankNumber}
            onChange={(e) => setBankNumber(e.target.value)}
          />
          <div className='btn-wrapper'>
            <input onClick={handlePersonalForm} type='button' value='Wstecz' />
            <input
              onClick={handleRegister}
              type='button'
              value='Zarejestruj si??'
            />
          </div>
        </div>
      </form>
      <InfoModal position='left' visible={infoVisible} message={infoMessage} />
      {errorVisible && (
        <div className='error-modal' id='errorModal'>
          <i className='fa fa-info-circle'></i>{' '}
          <span id='errorMessage'>{errorMessage}</span>
        </div>
      )}
      {loading && (
        <LoadingBar announcement='Trwa rejestracja konta. Prosz?? czeka??...' />
      )}

      <div className='links'>
        <Link to='/login'>Masz ju?? konto? Zaloguj si??!</Link>
        <Link to='/'>Powr??t do Strony G????wnej</Link>
      </div>
    </div>
  );
};

export default Register;
