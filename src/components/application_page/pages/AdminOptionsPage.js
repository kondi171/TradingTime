import React, { useReducer, useState } from 'react';
// import Validation from '../Validation';
// import InfoModal from '../../features/InfoModal';
import AdminPageUserInfo from '../AdminPageUserInfo';
import UserInfoDetails from '../UserInfoDetails';
// import SearchResult from '../SearchResult';

const users = [
  {
    id: 0,
    firstName: 'Bogdan',
    lastName: 'Ryjec',
    login: 'bogus_96',
  },
  {
    id: 1,
    firstName: 'Bruno',
    lastName: 'Beton',
    login: 'betoniara776',
  },
  {
    id: 2,
    firstName: 'Radosław',
    lastName: 'Kowal',
    login: 'r_kowal',
  },
];

// Obiekty akcji
// {
//   type: 'ADD', //obowiązkowe

// }

const usersReducer = (state, action) => {
  switch (action.type) {
    case 'ADD':
      return;
    case 'REMOVE':
      return;
    case 'FETCH':
      return alert('Fetchuje id' + action.id);
    default:
      throw new Error('Błąd!');
  }
};

const AdminOptionsPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [userIdDetails, setUserIdDetails] = useState('');
  const [state, dispatch] = useReducer(usersReducer, users);

  const handleShowInfo = () => {
    document.querySelector('.users-info-list').classList.toggle('minimized');
    document.querySelector('.user-info-details').classList.toggle('active');
  };

  const handleChangeActiveAction = (id) => {
    let currentId = userIdDetails;

    if (currentId === '') {
      handleShowInfo();
      setUserIdDetails(id);
    } else if (currentId === id) {
      handleShowInfo();
      setUserIdDetails('');
    } else if (currentId !== id) {
      setUserIdDetails(id);
    }
  };

  const handleSearch = (e) => setSearchQuery(e.target.value);

  const displayUsers = (searchQuery) =>
    users
      .filter(
        (user) =>
          user.firstName.toLowerCase().includes(searchQuery.toLowerCase()) ||
          user.lastName.toLowerCase().includes(searchQuery.toLowerCase()) ||
          user.login.toLowerCase().includes(searchQuery.toLowerCase())
      )
      .map((user) => (
        <AdminPageUserInfo
          key={user.id}
          onClickHandler={() => handleChangeActiveAction(user.id)}
          {...user}
        />
      ));

  return (
    <>
      <section className='settings-page__preferences'>
        <h1>Ustawienia administracyjne</h1>
        <div className='searcher-wrapper'>
          <div className='searcher'>
            <input
              type='text'
              onChange={(e) => handleSearch(e)}
              value={searchQuery}
              placeholder='Wyszukaj...'
            />
          </div>
        </div>
        <div className='users-info-list'>{displayUsers(searchQuery)}</div>
      </section>

      <UserInfoDetails id={userIdDetails} />
    </>
  );
};

export default AdminOptionsPage;
