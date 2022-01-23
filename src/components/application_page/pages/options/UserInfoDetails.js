import React, { useState, useEffect } from 'react';
import Validation from '../../../features/Validation';
import InfoModal from '../../../features/modals/InfoModal';
import LoadingBar from '../../../features/LoadingBar';
import ModifyAccountNumber from '../../../helpers/ModifyAccountNumber';

const UserInfoDetails = ({
  id,
  handleChangeActiveAction,
  toDelete,
  setToDelete,
  fetchAllUsers,
}) => {
  const [newLogin, setNewLogin] = useState('');
  const [newEmail, setNewEmail] = useState('');
  const [newTelephone, setNewTelephone] = useState('');
  const [newCity, setNewCity] = useState('');
  const [newStreet, setNewStreet] = useState('');
  const [newHouse, setNewHouse] = useState('');
  const [newApartment, setNewApartment] = useState('');
  const [newPostalCode, setNewPostalCode] = useState('');
  const [newPesel, setNewPesel] = useState('');
  const [newPersonalId, setNewPersonalId] = useState('');
  const [newBankAccount, setNewBankAccount] = useState('');

  const [infoVisible, setInfoVisible] = useState(false);
  const [infoMessage, setInfoMessage] = useState('');

  const [loading, setLoading] = useState(false);
  const [userData, setUserData] = useState({});

  const [changeDelete, setChangeDelete] = useState(false);

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
    bankAccount,
  } = userData;

  const displayInfoModal = (message) => {
    setInfoVisible(true);
    setInfoMessage(message);
    setTimeout(() => {
      setInfoVisible(false);
    }, 4000);
  };

  const checkToDelete = () => {
    const deleteButton = document.getElementById('delete-button');
    if (deleteButton.classList.contains('fa-undo')) setToDelete(true);
    else setToDelete(false);
  };

  const deleteUser = (e) => {
    const elementsToLineThrough = document.querySelectorAll(
      `.user-info-details__edit-fields ul > li`
    );

    [...elementsToLineThrough].map((element) =>
      element.classList.toggle('deleted')
    );

    const deleteButton = e.target;

    deleteButton.classList.toggle('fa-trash');
    deleteButton.classList.toggle('fa-undo');
    setChangeDelete(!changeDelete);
  };

  const saveProperty = async (e, type = '') => {
    const API = `http://localhost/api/v1/usercheck/`;
    const ifLoginExists = await fetch(API + newLogin + '&login')
      .then((response) => response.json())
      .catch((err) => console.log(err));

    const ifEmailExists = await fetch(API + newEmail + '&email')
      .then((response) => response.json())
      .catch((err) => console.log(err));

    const tempUserData = userData;

    const parentNodeClass =
      '.' + e.target.parentNode.className.split(' ').join('.');
    const editButton = document.querySelector(`${parentNodeClass} i`);
    const input = document.querySelector(`${parentNodeClass} input`);
    const propertyValue = document.querySelector(
      `${parentNodeClass} .property-value`
    );
    const acceptButton = document.querySelector(`${parentNodeClass} .fa-check`);

    const hideButtons = () => {
      input.classList.toggle('hidden');
      propertyValue.classList.toggle('hidden');
      editButton.classList.toggle('fa-pencil-square-o');
      editButton.classList.toggle('fa-times');
      acceptButton.classList.toggle('hidden');
    };

    if (type === 'login') {
      if (ifLoginExists.success) {
        displayInfoModal('Użytkownik o podanym emailu istnieje w bazie!');
      } else {
        tempUserData.login = newLogin;
        setNewLogin('');
        hideButtons();
      }
    } else if (type === 'email') {
      if (Validation(type, newEmail)) {
        if (ifEmailExists.success) {
          displayInfoModal('Użytkownik o podanym emailu istnieje w bazie!');
        } else {
          tempUserData.email = newEmail;
          setNewEmail('');
          hideButtons();
        }
      } else displayInfoModal('Format nowego adresu e-mail jest niepoprawny!');
    } else if (type === 'telephone') {
      if (Validation(type, newTelephone)) {
        tempUserData.telephone = newTelephone;
        setNewTelephone('');
        hideButtons();
      } else
        displayInfoModal('Format nowego numeru telefonu jest niepoprawny!');
    } else if (type === 'city') {
      if (Validation('name', newCity) && newCity.length > 3) {
        tempUserData.city = newCity;
        setNewCity('');
        hideButtons();
      } else displayInfoModal('Wprowadź poprawny format miasta!');
    } else if (type === 'street') {
      if (Validation('name', newStreet) && newStreet.length > 3) {
        tempUserData.street = newStreet;
        setNewStreet('');
        hideButtons();
      } else displayInfoModal('Wprowadź poprawny format ulicy!');
    } else if (type === 'house') {
      if (Validation('houseNumber', newHouse)) {
        tempUserData.house = newHouse;
        setNewHouse('');
        hideButtons();
      } else displayInfoModal('Wprowadź numer domu w poprawnym formacie!');
    } else if (type === 'apartment') {
      if (Validation('apartmentNumber', newApartment)) {
        tempUserData.apartment = newApartment;
        setNewApartment('');
        hideButtons();
      } else
        displayInfoModal(
          'Wprowadź numer mieszkania w poprawnym formacie! (Jeżeli puste wpisz "-")'
        );
    } else if (type === 'postalCode') {
      if (Validation(type, newPostalCode)) {
        tempUserData.postalCode = newPostalCode;
        setNewPostalCode('');
        hideButtons();
      } else
        displayInfoModal('Format nowego kodu pocztowego jest niepoprawny!');
    } else if (type === 'pesel') {
      if (Validation(type, newPesel)) {
        tempUserData.pesel = newPesel;
        setNewPesel('');
        hideButtons();
      } else displayInfoModal('Format nowego numeru PESEL jest niepoprawny!');
    } else if (type === 'personalId') {
      if (Validation('personalId', newPersonalId)) {
        tempUserData.personalId = newPersonalId;
        setNewPersonalId('');
        hideButtons();
      } else
        displayInfoModal(
          'Format nowego numeru dowodu osobistego jest niepoprawny!'
        );
    } else if (type === 'bankAccount') {
      if (Validation('accountNumber', newBankAccount)) {
        tempUserData.bankAccount = newBankAccount;
        setNewBankAccount('');
        hideButtons();
      } else
        displayInfoModal(
          'Format nowego numeru konta bankowego jest niepoprawny!'
        );
    } else {
      hideButtons();
    }

    setUserData({ ...tempUserData });
  };

  const editUserProperty = (e) => {
    const parentNodeClass =
      '.' + e.target.parentNode.className.split(' ').join('.');

    const editButton = document.querySelector(`${parentNodeClass} i`);

    const input = document.querySelector(`${parentNodeClass} input`);
    const propertyValue = document.querySelector(
      `${parentNodeClass} .property-value`
    );
    const acceptButton = document.querySelector(`${parentNodeClass} .fa-check`);
    console.log(acceptButton);

    if (acceptButton) acceptButton.classList.toggle('hidden');

    input.classList.toggle('hidden');
    propertyValue.classList.toggle('hidden');

    editButton.classList.toggle('fa-pencil-square-o');
    editButton.classList.toggle('fa-times');
  };

  const fetchUserData = async () => {
    const API = `http://localhost/api/v1/user/${id}`;
    const userData = await fetch(API)
      .then((response) => response.json())
      .catch((err) => console.log(err));

    setUserData({ ...userData.user[0] });

    return userData;
  };

  const saveOptions = async () => {
    setLoading(true);

    if (toDelete) {
      const API = `http://localhost/api/v1/deleteuser/${id}`;

      const deleteUser = await fetch(API)
        .then((response) => response.json())
        .catch((err) => console.log(err));

      if (deleteUser.success) {
        handleChangeActiveAction(id);
        await fetchAllUsers();
        setLoading(false);
        displayInfoModal('Konto usunięte!');
      } else {
        console.log(deleteUser);
        displayInfoModal('Błąd usuwania konta!');
        setLoading(false);
      }
    } else {
      const API = 'http://localhost/api/v1/admineditdata';
      const urlParams = new URLSearchParams({
        firstName: userData.firstName,
        lastName: userData.lastName,
        login: userData.login,
        email: userData.email,
        telephone: userData.telephone,
        city: userData.city,
        street: userData.street,
        house: userData.house,
        apartment: userData.apartment,
        postalCode: userData.postalCode,
        pesel: userData.pesel,
        personalId: userData.personalId,
        bankAccount: userData.bankAccount,
        id_user: id,
      });

      const dataChange = await fetch(API, {
        method: 'POST',
        body: urlParams,
      })
        .then((response) => response.json())
        .catch((err) => console.log(err));

      if (dataChange.success) {
        const fetchData = await fetchUserData();
        if (fetchData.success) setLoading(false);
      } else {
        alert('błąd wysyłania danych');
        setLoading(false);
      }
    }
  }; //wysłanie danych do bazy

  const cancelOptions = async () => {
    setLoading(true);
    const fetchData = await fetchUserData();

    if (fetchData.success) {
      displayInfoModal('Dane zapisane!');
      setLoading(false);
    } else {
      displayInfoModal(
        'Podczas zapisywania danych wystąpił błąd! Spróbuj ponownie'
      );
      setLoading(false);
    }
  }; //docelowo aktualizacja state z bazy danych niezmienionych danych

  useEffect(() => {
    if (id) fetchUserData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);
  useEffect(() => checkToDelete(), [changeDelete]);
  useEffect(() => checkToDelete());

  return (
    <>
      <aside className='user-info-details'>
        <div className='user-info-details__edit-fields'>
          <ul>
            <li>
              <h1 className='user-info-details__user_names'>
                {firstName} {lastName}
              </h1>
            </li>

            <li>
              <p className='user-info-details__user_property user-info-details__user_property__login'>
                <i
                  className='fa fa-pencil-square-o'
                  aria-hidden='true'
                  onClick={editUserProperty}
                ></i>
                <span className='property-title'>Login:</span>
                <input
                  type='text'
                  className='edit-input-field hidden'
                  value={newLogin}
                  onChange={(e) => setNewLogin(e.target.value)}
                />
                <span className='property-value'>{login}</span>
                <i
                  className='fa fa-check save-button hidden'
                  aria-hidden='true'
                  onClick={(e) => saveProperty(e, 'login')}
                ></i>
              </p>
            </li>
            <li>
              <p className='user-info-details__user_property user-info-details__user_property__email'>
                <i
                  className='fa fa-pencil-square-o'
                  aria-hidden='true'
                  onClick={editUserProperty}
                ></i>
                <span className='property-title'>Adres e-mail:</span>
                <input
                  type='text'
                  className='edit-input-field hidden'
                  value={newEmail}
                  onChange={(e) => setNewEmail(e.target.value)}
                />
                <span className='property-value'>
                  {email === '' || email === null || email === 'null'
                    ? 'Brak danych!'
                    : email}
                </span>
                <i
                  className='fa fa-check save-button hidden'
                  aria-hidden='true'
                  onClick={(e) => saveProperty(e, 'email')}
                ></i>
              </p>
            </li>
            <li>
              <p className='user-info-details__user_property user-info-details__user_property__telephone'>
                <i
                  className='fa fa-pencil-square-o'
                  aria-hidden='true'
                  onClick={editUserProperty}
                ></i>
                <span className='property-title'>Numer telefonu:</span>
                <input
                  type='number'
                  min='0'
                  className='edit-input-field hidden'
                  value={newTelephone}
                  onChange={(e) => setNewTelephone(e.target.value)}
                />
                <span className='property-value'>
                  {telephone === '' ||
                  telephone === 'null' ||
                  telephone === null
                    ? 'Brak danych!'
                    : telephone}
                </span>
                <i
                  className='fa fa-check save-button hidden'
                  aria-hidden='true'
                  onClick={(e) => saveProperty(e, 'telephone')}
                ></i>
              </p>
            </li>
            <li>
              <p className='user-info-details__user_property user-info-details__user_property__city'>
                <i
                  className='fa fa-pencil-square-o'
                  aria-hidden='true'
                  onClick={editUserProperty}
                ></i>
                <span className='property-title'>Miasto:</span>
                <input
                  type='text'
                  className='edit-input-field hidden'
                  value={newCity}
                  onChange={(e) => setNewCity(e.target.value)}
                />
                <span className='property-value'>
                  {city === '' || city === null || city === 'null'
                    ? 'Brak danych!'
                    : city}
                </span>
                <i
                  className='fa fa-check save-button hidden'
                  aria-hidden='true'
                  onClick={(e) => saveProperty(e, 'city')}
                ></i>
              </p>
            </li>
            <li>
              <p className='user-info-details__user_property user-info-details__user_property__street'>
                <i
                  className='fa fa-pencil-square-o'
                  aria-hidden='true'
                  onClick={editUserProperty}
                ></i>
                <span className='property-title'>Ulica:</span>
                <input
                  type='text'
                  className='edit-input-field hidden'
                  value={newStreet}
                  onChange={(e) => setNewStreet(e.target.value)}
                />
                <span className='property-value'>
                  {street === '' || street === 'null' || street === null
                    ? 'Brak danych!'
                    : street}
                </span>
                <i
                  className='fa fa-check save-button hidden'
                  aria-hidden='true'
                  onClick={(e) => saveProperty(e, 'street')}
                ></i>
              </p>
            </li>
            <li>
              <p className='user-info-details__user_property user-info-details__user_property__house'>
                <i
                  className='fa fa-pencil-square-o'
                  aria-hidden='true'
                  onClick={editUserProperty}
                ></i>
                <span className='property-title'>Numer domu:</span>
                <input
                  type='text'
                  className='edit-input-field hidden'
                  value={newHouse}
                  onChange={(e) => setNewHouse(e.target.value)}
                />
                <span className='property-value'>
                  {house === '' || house === 'null' || house === null
                    ? 'Brak danych!'
                    : house}
                </span>
                <i
                  className='fa fa-check save-button hidden'
                  aria-hidden='true'
                  onClick={(e) => saveProperty(e, 'house')}
                ></i>
              </p>
            </li>
            <li>
              <p className='user-info-details__user_property user-info-details__user_property__apartment'>
                <i
                  className='fa fa-pencil-square-o'
                  aria-hidden='true'
                  onClick={editUserProperty}
                ></i>
                <span className='property-title'>Numer mieszkania:</span>
                <input
                  type='text'
                  className='edit-input-field hidden'
                  value={newApartment}
                  onChange={(e) => setNewApartment(e.target.value)}
                />
                <span className='property-value'>
                  {apartment === '' ||
                  apartment === 'null' ||
                  apartment === null
                    ? 'Brak danych!'
                    : apartment}
                </span>
                <i
                  className='fa fa-check save-button hidden'
                  aria-hidden='true'
                  onClick={(e) => saveProperty(e, 'apartment')}
                ></i>
              </p>
            </li>
            <li>
              <p className='user-info-details__user_property user-info-details__user_property__postalCode'>
                <i
                  className='fa fa-pencil-square-o'
                  aria-hidden='true'
                  onClick={editUserProperty}
                ></i>
                <span className='property-title'>Kod pocztowy:</span>
                <input
                  type='text'
                  className='edit-input-field hidden'
                  value={newPostalCode}
                  onChange={(e) => setNewPostalCode(e.target.value)}
                />
                <span className='property-value'>
                  {postalCode === '' ||
                  postalCode === null ||
                  postalCode === 'null'
                    ? 'Brak danych'
                    : postalCode}
                </span>
                <i
                  className='fa fa-check save-button hidden'
                  aria-hidden='true'
                  onClick={(e) => saveProperty(e, 'postalCode')}
                ></i>
              </p>
            </li>
            <li>
              <p className='user-info-details__user_property user-info-details__user_property__pesel'>
                <i
                  className='fa fa-pencil-square-o'
                  aria-hidden='true'
                  onClick={editUserProperty}
                ></i>
                <span className='property-title'>PESEL:</span>
                <input
                  type='number'
                  min='0'
                  className='edit-input-field hidden'
                  value={newPesel}
                  onChange={(e) => setNewPesel(e.target.value)}
                />
                <span className='property-value'>
                  {pesel === '' || pesel === null || pesel === 'null'
                    ? 'Brak danych!'
                    : pesel}
                </span>
                <i
                  className='fa fa-check save-button hidden'
                  aria-hidden='true'
                  onClick={(e) => saveProperty(e, 'pesel')}
                ></i>
              </p>
            </li>
            <li>
              <p className='user-info-details__user_property user-info-details__user_property__personalId'>
                <i
                  className='fa fa-pencil-square-o'
                  aria-hidden='true'
                  onClick={editUserProperty}
                ></i>
                <span className='property-title'>Numer dowodu:</span>
                <input
                  type='text'
                  className='edit-input-field hidden'
                  value={newPersonalId}
                  onChange={(e) => setNewPersonalId(e.target.value)}
                />
                <span className='property-value'>
                  {personalId === '' ||
                  personalId === null ||
                  personalId === 'null'
                    ? 'Brak danych!'
                    : personalId}
                </span>
                <i
                  className='fa fa-check save-button hidden'
                  aria-hidden='true'
                  onClick={(e) => saveProperty(e, 'personalId')}
                ></i>
              </p>
            </li>
            <li>
              <p className='user-info-details__user_property user-info-details__user_property__bankAccount'>
                <i
                  className='fa fa-pencil-square-o'
                  aria-hidden='true'
                  onClick={editUserProperty}
                ></i>
                <span className='property-title'>Numer konta bankowego:</span>
                <input
                  type='text'
                  className='edit-input-field hidden'
                  value={newBankAccount}
                  onChange={(e) => setNewBankAccount(e.target.value)}
                />
                <span className='property-value'>
                  {bankAccount === '' ||
                  bankAccount === null ||
                  bankAccount === 'null'
                    ? 'Brak danych'
                    : bankAccount !== undefined &&
                      ModifyAccountNumber(bankAccount)}
                </span>
                <i
                  className='fa fa-check save-button hidden'
                  aria-hidden='true'
                  onClick={(e) => saveProperty(e, 'bankAccount')}
                ></i>
              </p>
            </li>
          </ul>
        </div>

        <div className='user-info-details__options'>
          <i
            className='fa fa-arrow-right'
            onClick={() => {
              handleChangeActiveAction(id);
            }}
            aria-hidden='true'
          ></i>

          <i
            className='fa fa-trash'
            aria-hidden='true'
            id='delete-button'
            onClick={deleteUser}
          ></i>
        </div>

        <div className='user-info-details__footer'>
          <button
            className='button button--large button--green_bgc'
            onClick={saveOptions}
          >
            Zaakceptuj zmiany <i className='fa fa-check' aria-hidden='true'></i>
          </button>
          <button
            className='button button--large button--red_bgc'
            onClick={cancelOptions}
          >
            Odrzuć zmiany <i className='fa fa-times' aria-hidden='true'></i>
          </button>
        </div>
      </aside>
      <InfoModal message={infoMessage} visible={infoVisible} position='left' />
      {loading && (
        <LoadingBar announcement='Trwa zmiana danych. Proszę czekać...' />
      )}
    </>
  );
};

export default UserInfoDetails;
