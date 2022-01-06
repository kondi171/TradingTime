import React, { useState, useEffect, useContext } from 'react';
import Validation from '../Validation';
import InfoModal from '../../features/InfoModal';
import LoadingBar from '../../features/LoadingBar';

import { AppContext } from '../../../AppContext';

const UserSettingsPage = () => {
  const [passwordChange, setPasswordChange] = useState(false);
  const [emailChange, setEmailChange] = useState(false);
  const [telephoneChange, setTelephoneChange] = useState(false);
  const [infoVisble, setInfoVisible] = useState(false);
  const [infoMessage, setInfoMessage] = useState('');
  const [newEmail, setNewEmail] = useState(false);
  const [newTelephone, setNewTelephone] = useState(false);
  const [userData, setUserData] = useState({});
  const [showSaveButtons, setShowSaveButtons] = useState(false);
  const [loading, setLoading] = useState(false);
  const [undisplayTime, setUndisplayTime] = useState(1500);

  const { userPersonalData } = useContext(AppContext);

  const handleChangeOption = (className) => {
    const element = document.querySelector(
      `.settings-page__preferences__list__${className}`
    );
    const icon = element.querySelector(`.fa`);

    element.classList.toggle('edit');

    if (icon.classList.contains('fa-pencil-square-o')) {
      icon.classList.remove('fa-pencil-square-o');
      icon.classList.add('fa-times');
    } else {
      icon.classList.add('fa-pencil-square-o');
      icon.classList.remove('fa-times');
    }

    if (className === 'password') setPasswordChange(!passwordChange);
    if (className === 'email') setEmailChange(!emailChange);
    if (className === 'telephone') setTelephoneChange(!telephoneChange);
  };

  const handleChangeInput = (e, className) => {
    if (className === 'email') setNewEmail(e.target.value);
    if (className === 'telephone') setNewTelephone(e.target.value);
  };

  const handleChangeData = (className) => {
    const userTempData = userData;

    if (className === 'password') {
      const passwordField = document.querySelectorAll('.password-field');

      if (
        Validation(
          className,
          passwordField[0].value,
          passwordField[1].value
        ) === true
      ) {
        userTempData.password = passwordField[0].value;
        handleChangeOption(className);
        setUserData(userTempData);
        setShowSaveButtons(true);
      } else if (
        Validation(
          className,
          passwordField[0].value,
          passwordField[1].value
        ) === 'DifferentValues'
      )
        displayInfoModal('Hasła się nie zgadzają!');
      else
        displayInfoModal(
          'Hasło nie spełnia minimalnych wymogów bezpieczeństwa!'
        );
    } //później bezpośrednie wywołanie skryptu php do bazy

    if (className === 'email') {
      if (Validation(className, newEmail)) {
        userTempData.email = newEmail;
        setUserData(userTempData);
        handleChangeOption(className);
        setShowSaveButtons(true);
      } else displayInfoModal('Format nowego adresu e-mail jest niepoprawny!');
    }

    if (className === 'telephone') {
      if (Validation(className, newTelephone)) {
        userTempData.telephone = newTelephone;
        setUserData(userTempData);
        handleChangeOption(className);
        setShowSaveButtons(true);
      } else
        displayInfoModal('Format nowego numeru telefonu jest niepoprawny!');
    }
  };

  const displayEditFields = (className) => {
    if (className === 'password') {
      if (passwordChange) {
        return (
          <>
            <div className='new-password changing'>
              <p>Nowe hasło: </p>
              <span>
                <input type='text' className='password-field' id='password' />
              </span>
            </div>
            <div className='confirm-password changing'>
              <p>Potwierdź hasło: </p>
              <span>
                <input
                  type='password'
                  className='password-field'
                  id='confirm-password'
                />
              </span>
              <i
                className='fa fa-check'
                onClick={() => handleChangeData('password')}
              ></i>
            </div>
          </>
        );
      }
    } else if (className === 'email') {
      if (emailChange) {
        return (
          <div className='email changing'>
            <p>Nowy e-mail: </p>
            <span>
              <input
                type='text'
                onChange={(e) => handleChangeInput(e, 'email')}
              />
            </span>
            <i
              className='fa fa-check'
              onClick={() => handleChangeData('email')}
            ></i>
          </div>
        );
      }
    } else if (className === 'telephone') {
      if (telephoneChange) {
        return (
          <div className='telephone changing'>
            <p>Nowy numer telefonu: </p>
            <span>
              <input
                type='number'
                min='0'
                onChange={(e) => handleChangeInput(e, 'telephone')}
              />
            </span>
            <i
              className='fa fa-check'
              onClick={() => handleChangeData('telephone')}
            ></i>
          </div>
        );
      }
    } else return null;
  };

  const displayInfoModal = (message) => {
    setInfoVisible(true);
    // this.setState({ infoVisble: true });
    setInfoMessage(message);
    // infoMessage = message;
    setTimeout(() => {
      // this.setState({ infoVisble: false });
      setInfoVisible(false);
      setInfoMessage('');
    }, 3000);
  };

  const saveOptions = () => {
    setLoading(true);
    setShowSaveButtons(false);

    setTimeout(() => {
      setLoading(!loading);
    }, undisplayTime);
  }; //wysłanie danych do bazy

  const cancelOptions = () => {
    setUserData({ ...userPersonalData });
    setShowSaveButtons(false);
    // window.location.reload(false);
  }; //docelowo aktualizacja state z bazy danych niezmienionych danych

  useEffect(() => {
    setUserData({ ...userPersonalData });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (showSaveButtons) {
      document
        .querySelectorAll('.settings-page__preferences__footer > .button')
        .forEach((element) => element.classList.remove('button--hidden'));
    } else {
      document
        .querySelectorAll('.settings-page__preferences__footer > .button')
        .forEach((element) => element.classList.add('button--hidden'));
    }
  });
  const {
    firstName,
    lastName,
    login,
    email,
    telephone,
    city,
    street,
    house,
    apartment,
    postalCode,
    pesel,
    personalId,
  } = userData;

  return (
    <section className='settings-page__preferences'>
      <h1>Ustawienia użytkownika</h1>
      <div className='settings-page__preferences__list'>
        <h2>Dane podstawowe </h2>
        <div>
          <p>Imię i nazwisko: </p>
          <span>
            {firstName} {lastName}
          </span>
        </div>

        <div>
          <p>Login: </p>
          <span>{login}</span>
        </div>

        <div className='settings-page__preferences__list__password'>
          <p>Hasło: </p>
          <span>*********</span>
          <i
            className='fa fa-pencil-square-o'
            aria-hidden='true'
            onClick={() => handleChangeOption('password')}
          ></i>
        </div>

        {displayEditFields('password')}

        <div className='settings-page__preferences__list__email'>
          <p>Adres e-mail: </p>
          <span>{email}</span>
          <i
            className='fa fa-pencil-square-o'
            aria-hidden='true'
            onClick={() => handleChangeOption('email')}
          ></i>
        </div>

        {displayEditFields('email')}

        <div className='settings-page__preferences__list__telephone'>
          <p>Numer telefonu: </p>
          <span>{telephone}</span>
          <i
            className='fa fa-pencil-square-o'
            aria-hidden='true'
            onClick={() => handleChangeOption('telephone')}
          ></i>
        </div>

        {displayEditFields('telephone')}
      </div>

      <div className='settings-page__preferences__list'>
        <h2>Dane adresowe</h2>

        <div>
          <p>Miejscowość: </p>
          <span>{city}</span>
        </div>

        <div>
          <p>Ulica: </p>
          <span>{street}</span>
        </div>
        <div>
          <p>{(apartment !== '-' && 'Nr domu / mieszkania:') || 'Nr domu:'}</p>
          <span>{(apartment !== '-' && house / apartment) || house}</span>
        </div>
        <div>
          <p>Kod pocztowy: </p>
          <span>{postalCode}</span>
        </div>
        <div>
          <p>Numer PESEL: </p>
          <span>{pesel}</span>
        </div>
        <div>
          <p>Numer dowodu osobistego: </p>
          <span>{personalId}</span>
        </div>
      </div>

      <footer className='settings-page__preferences__footer'>
        <button onClick={saveOptions} className='button button--hidden'>
          Zapisz
        </button>
        <button onClick={cancelOptions} className='button button--hidden'>
          Anuluj
        </button>
      </footer>

      {loading && <LoadingBar loading={loading} time={undisplayTime} />}
      <InfoModal message={infoMessage} visible={infoVisble} position='right' />
    </section>
  );
};

export default UserSettingsPage;
