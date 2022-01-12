import React, { useContext } from 'react';
import FacebookLogin from 'react-facebook-login';
import { useNavigate } from 'react-router-dom';

import { AppContext } from '../../../AppContext';

const FacebookLoginPage = ({ loadUserAccountData }) => {
  const { isUserLogged } = useContext(AppContext);
  const navigate = useNavigate();

  const responseFacebook = async (response) => {
    const fbAPI = 'http://localhost/api/v1/fblogin';
    const loginAPI = 'http://localhost/api/v1/login';
    const names = response.name.split(' ');

    const fbLoginParams = new URLSearchParams({
      login: response.userID,
      password: response.accessToken,
      firstName: names[0],
      lastName: names[names.length - 1],
    });

    console.log(fbLoginParams.login);
    console.log(fbLoginParams.password);
    console.log(fbLoginParams.firstName);
    console.log(fbLoginParams.lastName);

    const loginFb = await fetch(fbAPI, {
      method: 'POST',
      body: fbLoginParams,
    })
      .then((response) => response.json())
      .catch((err) => console.log(err));

    if (loginFb.success) {
      console.log(response.userID);
      console.log(response.accessToken);
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

      if (login.success) {
        loadUserAccountData(login.id_user);
        navigate('/app/home');
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
