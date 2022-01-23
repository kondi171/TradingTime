import React, { useContext, useState } from 'react';
import FacebookLogin from 'react-facebook-login';
import InfoModal from '../../features/modals/InfoModal';
import { useNavigate } from 'react-router-dom';

import { AppContext } from '../../../AppContext';

const FacebookLoginPage = ({
  loadUserAccountData,
  setInfoVisible,
  setInfoMessage,
}) => {
  const { isUserLogged } = useContext(AppContext);
  const navigate = useNavigate();

  const responseFacebook = async (response) => {
    console.log(response);
    if (response.status === 'unknown') {
      setInfoMessage(
        'Nie można zalogować się za pomocą Facebooka. Spróbuj później.'
      );
      setInfoVisible(true);
    } else {
      const fbAPI = 'http://localhost/api/v1/fblogin';
      const loginAPI = 'http://localhost/api/v1/login';
      const names = response.name.split(' ');

      const fbLoginParams = new URLSearchParams({
        login: response.userID,
        password: response.accessToken,
        firstName: names[0],
        lastName: names[names.length - 1],
      });

      console.log(response);
      const loginFb = await fetch(fbAPI, {
        method: 'POST',
        body: fbLoginParams,
      })
        .then((response) => response.json())
        .catch((err) => console.log(err));

      if (loginFb.success) {
        const login = await fetch(loginAPI, {
          method: 'POST',
          body: new URLSearchParams({
            login: response.userID,
            password: response.accessToken,
            grant_type: 'password',
          }),
        })
          .then((response) => response.json())
          .catch((err) => console.log(err));

        console.log(login);

        if (login.success) {
          loadUserAccountData(login.id_user);
          navigate('/app/home');
        }
      } else {
        setInfoMessage(
          'Nie można zalogować się za pomocą Facebooka. Spróbuj później.'
        );
        setInfoVisible(true);
      }
    }
  };

  if (!isUserLogged) {
    return (
      <FacebookLogin
        appId='320757999952636'
        autoLoad={false}
        fields='name,email,picture'
        scope='public_profile,user_friends'
        callback={responseFacebook}
        icon='fa-facebook'
        textButton='Zaloguj się z Facebookiem'
        className='facebook'
      />
    );
  } else return null;
};
// };

export default FacebookLoginPage;
