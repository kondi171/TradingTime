import React, { useState, useEffect } from 'react';
import AdminPageUserInfo from './AdminPageUserInfo';
import UserInfoDetails from './UserInfoDetails';

const AdminOptionsPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [userIdDetails, setUserIdDetails] = useState('');
  const [toDelete, setToDelete] = useState(false);
  const [allUsers, setAllUsers] = useState('');

  const fetchAllUsers = async () => {
    const API = 'http://localhost/api/v1/user';

    const users = await fetch(API)
      .then((request) => request.json())
      .then((data) => data.users)
      .catch((err) => new Error(err));

    setAllUsers(users);
  };

  const resetEditOptions = () => {
    const deleteButton = document.querySelector('.fa-undo');
    const lineThroughElements = document.querySelectorAll('.deleted');
    const inputFields = document.querySelectorAll('.edit-input-field');
    const propertyValues = document.querySelectorAll('.property-value.hidden');
    const editButtons = document.querySelectorAll('li i.fa-times');
    const acceptButtons = document.querySelectorAll('li i.fa-check');

    if (deleteButton !== null) {
      deleteButton.classList.remove('fa-undo');
      deleteButton.classList.add('fa-trash');
    }

    if ([...lineThroughElements].length !== 0)
      [...lineThroughElements].forEach((element) =>
        element.classList.remove('deleted')
      );

    [...inputFields].forEach((field) => {
      if (![field.classList].includes('hidden')) field.classList.add('hidden');
    });

    [...propertyValues].forEach((property) => {
      property.classList.remove('hidden');
    });

    [...editButtons].forEach((button) => {
      button.classList.remove('fa-times');
      button.classList.add('fa-pencil-square-o');
    });
  };

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
      resetEditOptions();
    }
  };

  const handleSearch = (e) => setSearchQuery(e.target.value);

  const displayUsers = (searchQuery) =>
    allUsers
      .filter(
        (user) =>
          user.firstName.toLowerCase().includes(searchQuery.toLowerCase()) ||
          user.lastName.toLowerCase().includes(searchQuery.toLowerCase()) ||
          user.login.toLowerCase().includes(searchQuery.toLowerCase())
      )
      .map((user) => (
        <AdminPageUserInfo
          key={user.id_account}
          onClickHandler={() => handleChangeActiveAction(user.id_account)}
          {...user}
        />
      ));

  useEffect(() => fetchAllUsers(), []);

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
        <div className='users-info-list'>
          {allUsers !== '' && displayUsers(searchQuery)}
        </div>
      </section>

      <UserInfoDetails
        id={userIdDetails}
        handleChangeActiveAction={handleChangeActiveAction}
        toDelete={toDelete}
        setToDelete={setToDelete}
        fetchAllUsers={fetchAllUsers}
      />
    </>
  );
};

export default AdminOptionsPage;
