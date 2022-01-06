import React, { useState, useEffect } from 'react';
import Validation from './Validation';
import InfoModal from '../features/InfoModal';

const userInfo = {
  firstName: 'Imie',
  lastName: 'Nazwisko',
  login: 'login',
  email: 'mail@mail.pl',
  telephone: '111222333',
  city: 'Miasto',
  street: 'Ulica',
  house: '11',
  apartment: '1',
  postalCode: '88-888',
  pesel: '12345678912',
  personalId: 'CCC 12345',
};

const UserInfoDetails = ({ id, handleChangeActiveAction }) => {
  // const { userPersonalData } = useContext(AppContext);
  // const { isUserLogged } = useContext(AppContext);
  // const { userIds } = useContext(AppContext);

  // const [userLogin, setUserLogin] = useState(login);
  // const [userEmail, setUserEmail] = useState(email);
  // const [userTelephone, setUserTelephone] = useState(telephone);
  // const [userCity, setUserCity] = useState(city);
  // const [userStreet, setUserStreet] = useState(street);
  // const [userHouse, setUserHouse] = useState(house);
  // const [userApartment, setUserApartment] = useState(apartment);
  // const [userPostalCode, setUserPostalCode] = useState(postalCode);
  // const [userPesel, setUserPesel] = useState(pesel);
  // const [userPersonalId, setUserPersonalId] = useState(personalId);

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

  const [infoVisible, setInfoVisible] = useState(false);
  const [infoMessage, setInfoMessage] = useState('');

  const [userData, setUserData] = useState({});

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

  const displayInfoModal = (message) => {
    setInfoVisible(true);
    setInfoMessage(message);
    setTimeout(() => {
      setInfoVisible(false);
    }, 4000);
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
  };

  const saveProperty = (e, type = '') => {
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
      tempUserData.login = newLogin;
      hideButtons();
    } else if (type === 'email') {
      if (Validation(type, newEmail)) {
        tempUserData.email = newEmail;
        hideButtons();
      } else displayInfoModal('Format nowego adresu e-mail jest niepoprawny!');
    } else if (type === 'telephone') {
      if (Validation(type, newTelephone)) {
        tempUserData.telephone = newTelephone;
        hideButtons();
      } else
        displayInfoModal('Format nowego numeru telefonu jest niepoprawny!');
    } else if (type === 'city') {
      tempUserData.city = newCity;
      hideButtons();
    } else if (type === 'street') {
      tempUserData.street = newStreet;
      hideButtons();
    } else if (type === 'house') {
      tempUserData.house = newHouse;
      hideButtons();
    } else if (type === 'apartment') {
      tempUserData.apartment = newApartment;
      hideButtons();
    } else if (type === 'postalCode') {
      if (Validation(type, newPostalCode)) {
        tempUserData.postalCode = newPostalCode;
        hideButtons();
      } else
        displayInfoModal('Format nowego kodu pocztowego jest niepoprawny!');
    } else if (type === 'pesel') {
      if (Validation(type, newPesel)) {
        tempUserData.pesel = newPesel;
        hideButtons();
      } else displayInfoModal('Format nowego numeru PESEL jest niepoprawny!');
    } else if (type === 'personalId') {
      tempUserData.personalId = newPersonalId;
      hideButtons();
    } else {
      hideButtons();
    }

    setUserData({ ...tempUserData });
  };

  const editUserProperty = (e) => {
    console.log(newEmail);

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
      .then((request) => request.json())
      .then((data) => data.user[0])
      .catch((err) => console.log(err));

    console.log(userData);

    setUserData({ ...userData });
  };

  useEffect(() => {
    if (id) fetchUserData();
  }, [id]);

  return (
    <>
      {/* {console.log(userPersonalData)}
      {console.log(isUserLogged)}
      {console.log(userIds)} */}
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
                  value={login}
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
              <p className='user-info-details__user_property user-info-details__user_property_id'>
                <i
                  className='fa fa-pencil-square-o'
                  aria-hidden='true'
                  onClick={editUserProperty}
                ></i>
                <span className='property-title'>ID w bazie (delete):</span>
                <input type='text' className='edit-input-field hidden' />
                <span className='property-value'>{id}</span>
                <i
                  className='fa fa-check save-button hidden'
                  aria-hidden='true'
                  onClick={(e) => saveProperty(e)}
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
                  value={email}
                  onChange={(e) => setNewEmail(e.target.value)}
                />
                <span className='property-value'>{email}</span>
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
                  value={telephone}
                  onChange={(e) => setNewTelephone(e.target.value)}
                />
                <span className='property-value'>{telephone}</span>
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
                  value={city}
                  onChange={(e) => setNewCity(e.target.value)}
                />
                <span className='property-value'>{city}</span>
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
                  value={street}
                  onChange={(e) => setNewStreet(e.target.value)}
                />
                <span className='property-value'>{street}</span>
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
                  value={house}
                  onChange={(e) => setNewHouse(e.target.value)}
                />
                <span className='property-value'>{house}</span>
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
                  value={apartment}
                  onChange={(e) => setNewApartment(e.target.value)}
                />
                <span className='property-value'>{apartment}</span>
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
                  value={postalCode}
                  onChange={(e) => setNewPostalCode(e.target.value)}
                />
                <span className='property-value'>{postalCode}</span>
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
                  value={pesel}
                  onChange={(e) => setNewPesel(e.target.value)}
                />
                <span className='property-value'>{pesel}</span>
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
                  value={personalId}
                  onChange={(e) => setNewPersonalId(e.target.value)}
                />
                <span className='property-value'>{personalId}</span>
                <i
                  className='fa fa-check save-button hidden'
                  aria-hidden='true'
                  onClick={(e) => saveProperty(e, 'personalId')}
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
            onClick={deleteUser}
          ></i>
        </div>

        <div className='user-info-details__footer'>
          <button className='button button--large button--green_bgc'>
            Zaakceptuj zmiany <i className='fa fa-check' aria-hidden='true'></i>
          </button>
          <button className='button button--large button--red_bgc'>
            Odrzuć zmiany <i className='fa fa-times' aria-hidden='true'></i>
          </button>
        </div>
      </aside>
      <InfoModal message={infoMessage} visible={infoVisible} position='left' />
    </>
  );
};

export default UserInfoDetails;
