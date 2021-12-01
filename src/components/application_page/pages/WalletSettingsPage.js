import React from 'react';
import earth from '../../../assets/img/earth.jpg';
import synth from '../../../assets/img/synth.jpg';
import lake from '../../../assets/img/lake.jpg';
import male1 from '../../../assets/img/avatars/avatar_male_blonde_red_glasses.png';
import male2 from '../../../assets/img/avatars/avatar_male_dark_blue_sunglasses.png';
import female1 from '../../../assets/img/avatars/avatar_female_auburn_blue_glasses.png';
import female2 from '../../../assets/img/avatars/avatar_female_blonde_pink.png';
import avatarDefault from '../../../assets/img/avatars/default_blank.png';
import theme1 from '../../../assets/img/themes/theme1.png';
import theme2 from '../../../assets/img/themes/theme2.png';
import theme3 from '../../../assets/img/themes/theme3.png';

class WalletSettingsPage extends React.Component {
  state = {
    appPreferences: {
      simulationMode: true,
      smartAssistant: false,
      twoFactorAuthentication: true,
      wallpaper: '1',
      theme: '1',
      avatar: '4',
    },

    showSaveButtons: false,
    wallpaperChange: false,
    avatarChange: false,
    themeChange: false,
  };

  handleToggleInput = (option) => {
    let appPreferences = this.state.appPreferences;

    this.setState({ showSaveButtons: true });

    if (option === 'simulationMode') {
      appPreferences.simulationMode = !this.state.appPreferences.simulationMode;

      this.setState({
        appPreferences,
      });
    }
    if (option === 'smartAssistant') {
      appPreferences.smartAssistant = !this.state.appPreferences.smartAssistant;

      this.setState({
        appPreferences,
      });
    }
    if (option === 'twoFactorAuthentication') {
      appPreferences.twoFactorAuthentication =
        !this.state.appPreferences.twoFactorAuthentication;

      this.setState({
        appPreferences,
      });
    }
  };

  handleChangeOption = (className) => {
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

    if (className === 'wallpaper')
      this.setState({ wallpaperChange: !this.state.wallpaperChange });
    if (className === 'avatar')
      this.setState({ avatarChange: !this.state.avatarChange });
    if (className === 'theme')
      this.setState({ themeChange: !this.state.themeChange });
  };

  handleImageInputChange = (e, category) => {
    let appPreferences = this.state.appPreferences;

    if (category === 'wallpaper')
      appPreferences.wallpaper = e.target.dataset.wallpaperid;
    if (category === 'avatar')
      appPreferences.avatar = e.target.dataset.avatarid;
    if (category === 'theme') appPreferences.theme = e.target.dataset.themeid;

    this.setState({ appPreferences });

    this.setState({ showSaveButtons: true });
  };

  toggleImageSelector = (className) => {
    let wallpapers = document.querySelectorAll(`.wallpaper.changing input`);
    let avatars = document.querySelectorAll(`.avatar.changing input`);
    let themes = document.querySelectorAll(`.theme.changing input`);

    [...wallpapers].forEach((element) => {
      if (element.dataset.wallpaperid === this.state.appPreferences.wallpaper)
        element.classList.add('active');
      else element.classList.remove('active');
    });

    [...avatars].forEach((element) => {
      if (element.dataset.avatarid === this.state.appPreferences.avatar)
        element.classList.add('active');
      else element.classList.remove('active');
    });

    [...themes].forEach((element) => {
      if (element.dataset.themeid === this.state.appPreferences.theme)
        element.classList.add('active');
      else element.classList.remove('active');
    });
  };

  displayEditFields = (className) => {
    if (className === 'wallpaper') {
      if (this.state.wallpaperChange) {
        return (
          <div className='wallpaper changing'>
            <input
              type='image'
              className='wallpaper'
              src={earth}
              alt='Earth from space'
              data-wallpaperid='1'
              onClick={(e) => this.handleImageInputChange(e, className)}
              readOnly={true}
            />
            <input
              type='image'
              className='wallpaper'
              src={synth}
              alt='Wallpaper in Synthwave style'
              data-wallpaperid='2'
              onClick={(e) => this.handleImageInputChange(e, className)}
              readOnly={true}
            />
            <input
              type='image'
              className='wallpaper'
              src={lake}
              alt='Beatiful lake in storm'
              data-wallpaperid='3'
              onClick={(e) => this.handleImageInputChange(e, className)}
              readOnly={true}
            />
          </div>
        );
      }
    } else if (className === 'avatar') {
      if (this.state.avatarChange) {
        return (
          <div className='avatar changing'>
            <input
              type='image'
              className='avatar'
              src={male1}
              alt='Male, glasses, red clothes, blonde'
              data-avatarid='1'
              onClick={(e) => this.handleImageInputChange(e, className)}
              readOnly={true}
            />
            <input
              type='image'
              className='avatar'
              src={male2}
              alt='Male, sunglasses, blue clothes, dark hair'
              data-avatarid='2'
              onClick={(e) => this.handleImageInputChange(e, className)}
              readOnly={true}
            />
            <input
              type='image'
              className='avatar'
              src={female1}
              alt='Female, glasses, blue clothes, auburn'
              data-avatarid='3'
              onClick={(e) => this.handleImageInputChange(e, className)}
              readOnly={true}
            />
            <input
              type='image'
              className='avatar'
              src={female2}
              alt='Female, pink clothes, blonde'
              data-avatarid='4'
              onClick={(e) => this.handleImageInputChange(e, className)}
              readOnly={true}
            />
            <input
              type='image'
              src={avatarDefault}
              className='avatar'
              alt='Deafult avatar image'
              data-avatarid='5'
              onClick={(e) => this.handleImageInputChange(e, className)}
              readOnly={true}
            />
          </div>
        );
      }
    } else if (className === 'theme') {
      if (this.state.themeChange) {
        return (
          <div className='theme changing'>
            <input
              type='image'
              className='theme'
              src={theme1}
              alt='Theme - gray colors'
              data-themeid='1'
              onClick={(e) => this.handleImageInputChange(e, className)}
              readOnly={true}
            />
            <input
              type='image'
              className='theme'
              src={theme2}
              alt='theme - blue colors'
              data-themeid='2'
              onClick={(e) => this.handleImageInputChange(e, className)}
              readOnly={true}
            />
            <input
              type='image'
              className='theme'
              src={theme3}
              alt='Theme - blue-yellow color'
              data-themeid='3'
              onClick={(e) => this.handleImageInputChange(e, className)}
              readOnly={true}
            />
          </div>
        );
      }
    } else return null;
  };

  saveOptions = () => {
    alert('zapisuje dane');
    this.setState({ showSaveButtons: false });
  }; //wysłanie danych do bazy

  cancelOptions = () => {
    this.setState({ showSaveButtons: false });
    window.location.reload(false);
  }; //docelowo aktualizacja state z bazy danych niezmienionych danych

  componentDidUpdate() {
    if (this.state.showSaveButtons) {
      document
        .querySelectorAll('.settings-page__preferences__footer > button')
        .forEach((element) => element.classList.remove('hidden'));
    } else {
      document
        .querySelectorAll('.settings-page__preferences__footer > button')
        .forEach((element) => element.classList.add('hidden'));
    }

    this.toggleImageSelector();
  }

  render() {
    const { simulationMode, smartAssistant, twoFactorAuthentication } =
      this.state.appPreferences;
    return (
      <>
        <section className='settings-page__preferences'>
          <h1>Ustawienia portfela</h1>
          <div className='settings-page__preferences__list'>
            <h2>Ogólne</h2>
            <div className='settings-page__preferences__list__wallpaper'>
              <p>Dostępne środki na koncie: </p>
              <span></span>
            </div>

            <div className='settings-page__preferences__list__avatar'>
              <p>Numer konta do wpłat: </p>
              <span></span>
              <i
                className='fa fa-pencil-square-o'
                aria-hidden='true'
                onClick={() => this.handleChangeOption('avatar')}
              ></i>
            </div>

            {this.displayEditFields('avatar')}

            <div className='settings-page__preferences__list__theme'>
              <p>Wypłać pieniądze na konto </p>
              <span></span>
              <i
                className='fa fa-pencil-square-o'
                aria-hidden='true'
                onClick={() => this.handleChangeOption('theme')}
              ></i>
            </div>

            <div className='settings-page__preferences__list__theme'>
              <p>Wpłać pieniądze do aplikacji </p>
              <span></span>
              <i
                className='fa fa-pencil-square-o'
                aria-hidden='true'
                onClick={() => this.handleChangeOption('theme')}
              ></i>
            </div>
          </div>

          <div className='settings-page__preferences__list'>
            <h2>Funkcjonalności</h2>

            <div>
              <p>Tryb symulacji: </p>
              <span className='settings-page__preferences__list--switch-button'>
                <span className='settings-page__preferences__list--switch-button--second-option'>
                  Włączony
                </span>
                <input
                  className='settings-page__preferences__list--switch-button--checkbox'
                  type='checkbox'
                  checked={simulationMode}
                  onChange={() => this.handleToggleInput('simulationMode')}
                ></input>
                <label className='settings-page__preferences__list--switch-button--label'>
                  <span className='settings-page__preferences__list--switch-button--label--span'>
                    Wyłączony
                  </span>
                </label>
              </span>
            </div>

            <div>
              <p>Inteligentny asystent: </p>
              <span className='settings-page__preferences__list--switch-button'>
                <span className='settings-page__preferences__list--switch-button--second-option'>
                  Włączony
                </span>
                <input
                  className='settings-page__preferences__list--switch-button--checkbox'
                  type='checkbox'
                  checked={smartAssistant}
                  onChange={() => this.handleToggleInput('smartAssistant')}
                ></input>
                <label className='settings-page__preferences__list--switch-button--label'>
                  <span className='settings-page__preferences__list--switch-button--label--span'>
                    Wyłączony
                  </span>
                </label>
              </span>
            </div>

            <div>
              <p>Uwierzytelnianie dwuetapowe:</p>
              <span className='settings-page__preferences__list--switch-button'>
                <span className='settings-page__preferences__list--switch-button--second-option'>
                  Włączone
                </span>
                <input
                  className='settings-page__preferences__list--switch-button--checkbox'
                  type='checkbox'
                  checked={twoFactorAuthentication}
                  onChange={() =>
                    this.handleToggleInput('twoFactorAuthentication')
                  }
                ></input>
                <label className='settings-page__preferences__list--switch-button--label'>
                  <span className='settings-page__preferences__list--switch-button--label--span'>
                    Wyłączone
                  </span>
                </label>
              </span>
            </div>
          </div>
          <footer className='settings-page__preferences__footer'>
            <button
              onClick={this.saveOptions}
              className='settings-page__preferences__footer--save-button hidden'
            >
              Zapisz
            </button>
            <button
              onClick={this.cancelOptions}
              className='settings-page__preferences__footer--cancel-button hidden'
            >
              Anuluj
            </button>
          </footer>
        </section>
      </>
    );
  }
}

export default WalletSettingsPage;
