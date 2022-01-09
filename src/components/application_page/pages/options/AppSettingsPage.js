import React, { useState, useEffect, useContext } from 'react';
import QuestionModal from '../../../features/modals/QuestionModal';
import earth from '../../../../assets/img/wallpapers/earth.jpg';
import synth from '../../../../assets/img/wallpapers/synth.jpg';
import lake from '../../../../assets/img/wallpapers/lake.jpg';
import male1 from '../../../../assets/img/avatars/avatar_male_blonde_red_glasses.png';
import male2 from '../../../../assets/img/avatars/avatar_male_dark_blue_sunglasses.png';
import female1 from '../../../../assets/img/avatars/avatar_female_auburn_blue_glasses.png';
import female2 from '../../../../assets/img/avatars/avatar_female_blonde_pink.png';
import avatarDefault from '../../../../assets/img/avatars/default_blank.png';
import theme1 from '../../../../assets/img/themes/theme1.png';
import theme2 from '../../../../assets/img/themes/theme2.png';
import theme3 from '../../../../assets/img/themes/theme3.png';
import LoadingBar from '../../../features/LoadingBar';
import { AppContext } from '../../../../AppContext';

const AppSettingsPage = () => {
  const [appPreferences, setAppPreferences] = useState({
    smartAssistant: 0,
    simulationMode: 0,

    twoFactorAuthentication: 0,
  });

  const [showSaveButtons, setShowSaveButtons] = useState(false);
  const [wallpaperChange, setWallpaperChange] = useState(false);
  const [avatarChange, setAvatarChange] = useState(false);
  const [themeChange, setThemeChange] = useState(false);
  const [loading, setLoading] = useState(false);
  const [undisplayTime, setUndisplayTime] = useState(1500);
  const [showModal, setShowModal] = useState(false);

  const { userSettings } = useContext(AppContext);
  const { userId } = useContext(AppContext);
  const { fetchUserData } = useContext(AppContext);
  const { fetchUserSettings } = useContext(AppContext);

  const [currentTheme, setCurrentTheme] = useState();

  const setTheme = () => {
    if (Number(userSettings.theme) === 1) {
      setCurrentTheme(1);
      document.documentElement.style.setProperty('--bg-color', '#333333');
      document.documentElement.style.setProperty('--box-color', '#858484');
      document.documentElement.style.setProperty('--text-color', '#c4c4c4');
      document.documentElement.style.setProperty('--active-color', '#3d84f5');
      document.documentElement.style.setProperty('--hover-color', '#555555');
    } else if (Number(userSettings.theme) === 2) {
      setCurrentTheme(2);
      document.documentElement.style.setProperty('--bg-color', '#1F3336');
      document.documentElement.style.setProperty('--box-color', '#038C3E');
      document.documentElement.style.setProperty('--text-color', '#cdf5c5');
      document.documentElement.style.setProperty('--active-color', '#038C3E');
      document.documentElement.style.setProperty('--hover-color', '#77BF63');
    } else {
      setCurrentTheme(3);
      document.documentElement.style.setProperty('--bg-color', '#191919');
      document.documentElement.style.setProperty('--box-color', '#FFCD00');
      document.documentElement.style.setProperty('--text-color', '#FFFFFF');
      document.documentElement.style.setProperty('--active-color', '#FFCD00');
      document.documentElement.style.setProperty('--hover-color', '#b69917');
    }
  };

  const handleToggleInput = (option) => {
    let tempAppPreferences = appPreferences;

    setShowSaveButtons(true);

    if (option === 'simulationMode') setShowModal(!showModal);

    if (option === 'smartAssistant') {
      tempAppPreferences.smartAssistant = !appPreferences.smartAssistant;
      setAppPreferences({ ...tempAppPreferences });
    }
    if (option === 'twoFactorAuthentication') {
      tempAppPreferences.twoFactorAuthentication =
        !appPreferences.twoFactorAuthentication;
      setAppPreferences({ ...tempAppPreferences });
    }
  };

  const handleChangeOption = (className) => {
    const element = document.querySelector(
      `.settings-page__preferences__list__${className}`
    );
    const icon = element.querySelector('.fa');

    element.classList.toggle('edit');

    if (icon.classList.contains('fa-pencil-square-o')) {
      icon.classList.remove('fa-pencil-square-o');
      icon.classList.add('fa-times');
    } else {
      icon.classList.add('fa-pencil-square-o');
      icon.classList.remove('fa-times');
    }

    if (className === 'wallpaper') setWallpaperChange(!wallpaperChange);
    if (className === 'avatar') setAvatarChange(!avatarChange);
    if (className === 'theme') setThemeChange(!themeChange);
  };

  const handleImageInputChange = (e, category) => {
    let tempAppPreferences = appPreferences;
    if (category === 'wallpaper')
      tempAppPreferences.wallpaper = e.target.dataset.wallpaperid;
    if (category === 'avatar')
      tempAppPreferences.avatar = e.target.dataset.avatarid;
    if (category === 'theme')
      tempAppPreferences.theme = e.target.dataset.themeid;

    setShowSaveButtons(true);
    setAppPreferences({ ...tempAppPreferences });
  };

  const toggleImageSelector = () => {
    let wallpapers = document.querySelectorAll(`.wallpaper.changing input`);
    let avatars = document.querySelectorAll(`.avatar.changing input`);
    let themes = document.querySelectorAll(`.theme.changing input`);

    [...wallpapers].forEach((element) => {
      if (element.dataset.wallpaperid === appPreferences.wallpaper)
        element.classList.add('active');
      else element.classList.remove('active');
    });

    [...avatars].forEach((element) => {
      if (element.dataset.avatarid === appPreferences.avatar)
        element.classList.add('active');
      else element.classList.remove('active');
    });

    [...themes].forEach((element) => {
      if (element.dataset.themeid === appPreferences.theme)
        element.classList.add('active');
      else element.classList.remove('active');
    });
  };

  const displayEditFields = (className) => {
    if (className === 'wallpaper') {
      if (wallpaperChange) {
        return (
          <div className='wallpaper changing'>
            <input
              type='image'
              className='wallpaper'
              src={earth}
              alt='Earth from space'
              data-wallpaperid='1'
              onClick={(e) => handleImageInputChange(e, className)}
              readOnly={true}
            />
            <input
              type='image'
              className='wallpaper'
              src={synth}
              alt='Wallpaper in Synthwave style'
              data-wallpaperid='2'
              onClick={(e) => handleImageInputChange(e, className)}
              readOnly={true}
            />
            <input
              type='image'
              className='wallpaper'
              src={lake}
              alt='Beatiful lake in storm'
              data-wallpaperid='3'
              onClick={(e) => handleImageInputChange(e, className)}
              readOnly={true}
            />
          </div>
        );
      }
    } else if (className === 'avatar') {
      if (avatarChange) {
        return (
          <div className='avatar changing'>
            <input
              type='image'
              className='avatar'
              src={male1}
              alt='Male, glasses, red clothes, blonde'
              data-avatarid='1'
              onClick={(e) => handleImageInputChange(e, className)}
              readOnly={true}
            />
            <input
              type='image'
              className='avatar'
              src={male2}
              alt='Male, sunglasses, blue clothes, dark hair'
              data-avatarid='2'
              onClick={(e) => handleImageInputChange(e, className)}
              readOnly={true}
            />
            <input
              type='image'
              className='avatar'
              src={female1}
              alt='Female, glasses, blue clothes, auburn'
              data-avatarid='3'
              onClick={(e) => handleImageInputChange(e, className)}
              readOnly={true}
            />
            <input
              type='image'
              className='avatar'
              src={female2}
              alt='Female, pink clothes, blonde'
              data-avatarid='4'
              onClick={(e) => handleImageInputChange(e, className)}
              readOnly={true}
            />
            <input
              type='image'
              src={avatarDefault}
              className='avatar'
              alt='Deafult avatar image'
              data-avatarid='5'
              onClick={(e) => handleImageInputChange(e, className)}
              readOnly={true}
            />
          </div>
        );
      }
    } else if (className === 'theme') {
      if (themeChange) {
        return (
          <div className='theme changing'>
            <input
              type='image'
              className='theme'
              src={theme1}
              alt='Theme - gray colors'
              data-themeid='1'
              onClick={(e) => handleImageInputChange(e, className)}
              readOnly={true}
            />
            <input
              type='image'
              className='theme'
              src={theme2}
              alt='theme - blue colors'
              data-themeid='2'
              onClick={(e) => handleImageInputChange(e, className)}
              readOnly={true}
            />
            <input
              type='image'
              className='theme'
              src={theme3}
              alt='Theme - blue-yellow color'
              data-themeid='3'
              onClick={(e) => handleImageInputChange(e, className)}
              readOnly={true}
            />
          </div>
        );
      }
    } else return null;
  };

  const handleChangeSimulationMode = () => {
    let tempAppPreferences = appPreferences;
    tempAppPreferences.simulationMode = !appPreferences.simulationMode;

    setAppPreferences({ ...tempAppPreferences });
    hideQuestionModal();
  };

  const hideQuestionModal = () => setShowModal(false);

  const displayQuestionModal = () => (
    <QuestionModal
      acceptAction={handleChangeSimulationMode}
      denyAction={hideQuestionModal}
      info='Czy na pewno chcesz przełączyć tryb pracy? Wiąże się to z utratą środków w obecnym portfelu. Zmian nie można cofnąć!'
    />
  );

  const saveOptions = async () => {
    setLoading(true);
    const API = 'http://localhost/api/v1/editsettings';
    const urlParams = new URLSearchParams({
      twoFactorAuthentication: appPreferences.twoFactorAuthentication,
      simulationMode: appPreferences.simulationMode,
      emailNotifications: appPreferences.emailNotifications,
      wallpaper: appPreferences.wallpaper,
      theme: appPreferences.theme,
      avatar: appPreferences.avatar,
      id_user: userId,
    });

    const settingsChange = await fetch(API, {
      method: 'POST',
      body: urlParams,
    })
      .then((response) => response.json())
      .catch((err) => console.log(err));

    if (settingsChange.success) {
      const fetchSettings = await fetchUserSettings(userId);
      if (fetchSettings.success) setLoading(false);
      setShowSaveButtons(false);
    } else alert('błąd wysyłania danych');
  };

  const cancelOptions = () => {
    console.log(userSettings);
    setAppPreferences({ ...userSettings });
    setShowSaveButtons(false);
    // window.location.reload(false);
  }; //docelowo aktualizacja state z bazy danych niezmienionych danych

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
    toggleImageSelector();
  });

  useEffect(() => {
    setAppPreferences({ ...userSettings });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => setTheme(), [userSettings]);

  const { simulationMode, smartAssistant, twoFactorAuthentication } =
    appPreferences;
  return (
    <>
      {showModal ? displayQuestionModal() : null}
      <section className='settings-page__preferences'>
        <h1>Ustawienia aplikacji</h1>
        <div className='settings-page__preferences__list'>
          <h2>Wygląd</h2>
          <div className='settings-page__preferences__list__wallpaper'>
            <p>Tapeta strony głównej: </p>
            <span></span>
            <i
              className='fa fa-pencil-square-o'
              aria-hidden='true'
              onClick={() => handleChangeOption('wallpaper')}
            ></i>
          </div>

          {displayEditFields('wallpaper')}

          <div className='settings-page__preferences__list__avatar'>
            <p>Awatar użytkownika: </p>
            <span></span>
            <i
              className='fa fa-pencil-square-o'
              aria-hidden='true'
              onClick={() => handleChangeOption('avatar')}
            ></i>
          </div>

          {displayEditFields('avatar')}

          <div className='settings-page__preferences__list__theme'>
            <p>Motyw aplikacji: </p>
            <span></span>
            <i
              className='fa fa-pencil-square-o'
              aria-hidden='true'
              onClick={() => handleChangeOption('theme')}
            ></i>
          </div>

          {displayEditFields('theme')}
        </div>

        <div className='settings-page__preferences__list'>
          <h2>Funkcjonalności</h2>
          <div>
            <p>Tryb symulacji: </p>

            <span className='switch-button'>
              <span className='switch-button__first-option'>Włączony</span>
              <input
                className='switch-button__checkbox'
                type='checkbox'
                checked={simulationMode ? simulationMode : false}
                onChange={() => handleToggleInput('simulationMode')}
              ></input>
              <label className='switch-button__label'>
                <span className='switch-button__second-option'>Wyłączony</span>
              </label>
            </span>
          </div>

          <div>
            <p>Inteligentny asystent: </p>

            <span className='switch-button'>
              <span className='switch-button__first-option'>Włączony</span>
              <input
                className='switch-button__checkbox'
                type='checkbox'
                checked={smartAssistant ? smartAssistant : false}
                onChange={() => handleToggleInput('smartAssistant')}
              ></input>
              <label className='switch-button__label'>
                <span className='switch-button__second-option'>Wyłączony</span>
              </label>
            </span>
          </div>

          <div>
            <p>Uwierzytelnianie dwuetapowe:</p>
            <span className='switch-button'>
              <span className='switch-button__first-option'>Włączony</span>
              <input
                className='switch-button__checkbox'
                type='checkbox'
                checked={
                  twoFactorAuthentication ? twoFactorAuthentication : false
                }
                onChange={() => handleToggleInput('twoFactorAuthentication')}
              ></input>
              <label className='switch-button__label'>
                <span className='switch-button__second-option'>Wyłączony</span>
              </label>
            </span>
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
        {loading && <LoadingBar announcement='Zapisuję dane...' />}
      </section>
    </>
  );
};

export default AppSettingsPage;
