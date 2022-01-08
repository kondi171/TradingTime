import React, { createContext, useState } from 'react';

export const AppContext = createContext();

const AppProvider = ({ children }) => {
  // let userPersonalData = {
  //   first_name: 'asd',
  //   // last_name: '',
  //   // mail: '',
  //   // phone: '',
  //   // city: '',
  //   // street: '',
  //   // house: '',
  //   // apartment: '',
  //   // postalCode: '',
  //   // pesel: '',
  //   // personalId: '',
  //   // bankAccount: '',
  // };
  // const userSettings = {
  //   wallpaper: '',
  //   avatar: '',
  //   theme: '',
  //   simulationMode: '',
  //   smartAssistant: '',
  //   twoFactorAuth: '',
  // };

  const [userAccountBalance, setUserAccountBalance] = useState('');
  const [isUserLogged, setIsUserLogged] = useState(false); //deafult false
  const [userLogin, setUserLogin] = useState('');
  const [userId, setUserId] = useState('');
  const [userPersonalData, setUserPersonalData] = useState({});
  const [userSettings, setUserSettings] = useState({});
  const [userFavouriteActions, setUserFavouriteActions] = useState({});
  const [userBoughtActions, setUserBoughtActions] = useState({});
  const [isUserAdmin, setIsUserAdmin] = useState(0);
  const toggleLoggedState = () => {
    setIsUserLogged((prevValue) => !prevValue);
  };
  const setLogin = (login) => setUserLogin(login);

  const fetchUserData = async (id) => {
    const API = `http://localhost/api/v1/user/${id}`;
    fetch(API)
      .then((response) => response.json())
      .then((json) => json.user[0])
      .then((data) => setUserPersonalData({ ...data }))
      .catch((err) => console.log(err));
  };

  // const fetchUserActions = async (id) => {
  //   const API = `http://localhost/api/v1/user/${id}`;

  //   fetch(API)
  //     .then((response) => response.json())
  //     .then((json) => (userActions = json.userActions))
  //     .catch((err) => console.log(err));
  // };

  const fetchUserSettings = async (id) => {
    const API = `http://localhost/api/v1/user/${id}`;

    const settings = await fetch(API)
      .then((response) => response.json())
      .then((data) => data.userSettings[0])
      .catch((err) => console.log(err));

    setUserSettings({ ...settings });
    setIsUserAdmin(Number(settings.isAdmin));
  };

  const fetchUserFavouriteActions = (id) => {
    const API = `http://localhost/api/v1/favourite/${id}`;

    fetch(API)
      .then((response) => response.json())
      .then((data) => data.favouriteAction)
      .then((data) => setUserFavouriteActions(data))
      .catch((err) => console.log(err));
  };
  const fetchUserBoughtActions = (id) => {
    const API = `http://localhost/api/v1/stock/${id}`;

    fetch(API)
      .then((response) => response.json())
      .then((data) => data.stock)
      .then((data) => setUserBoughtActions(data))
      .catch((err) => console.log(err));
  };

  const fetchAccountBalance = (id) => {
    const API = `http://localhost/api/v1/wallet/${id}`;

    fetch(API)
      .then((response) => response.json())
      .then((data) => data.accountBalance)
      .then((data) => setUserAccountBalance(data))
      .catch((err) => console.log(err));
  };

  const setUserIdNumber = (id) => {
    setUserId(id);
  };

  const addActionToFavourite = async (userId, actionId) => {
    const API = `http://localhost/api/v1/addfavourite/${userId}&${actionId}`;

    const status = await fetch(API)
      .then((response) => response.json())
      .catch((error) => console.log(error));

    fetchUserFavouriteActions(userId);
    return status;
  };

  const deleteActionFromFavourite = async (userId, actionId) => {
    const API = `http://localhost/api/v1/deletefavourite/${userId}&${actionId}`;

    const status = await fetch(API)
      .then((response) => response.json())
      .catch((error) => console.log(error));

    fetchUserFavouriteActions(userId);
    return status;
  };

  return (
    <AppContext.Provider
      value={{
        toggleLoggedState,
        setLogin,
        fetchUserData,
        fetchUserBoughtActions,
        fetchUserSettings,
        fetchUserFavouriteActions,
        fetchAccountBalance,
        setUserIdNumber,
        deleteActionFromFavourite,
        addActionToFavourite,
        isUserLogged,
        userPersonalData,
        userId,
        userSettings,
        userFavouriteActions,
        userAccountBalance,
        userBoughtActions,
        isUserAdmin,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
