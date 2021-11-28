import React from 'react';
import earth from '../../../assets/img/earth.jpg';
import synth from '../../../assets/img/synth.jpg';
import lake from '../../../assets/img/lake.jpg';

class AppSettingsPage extends React.Component {
  state = {
    appPreferences: {
      simulationMode: true,
      smartAssistant: false,
      twoFactorAuthentication: true,
      wallpaper: '1',
      theme: '1',
      avatar: '9',
    },

    showSaveButtons: false,
    wallpaperChange: false,
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
  };

  handleWallpaperChange = (e) => {
    let appPreferences = this.state.appPreferences;
    appPreferences.wallpaper = e.target.dataset.wallpaperid;
    this.setState({ appPreferences });

    this.setState({ showSaveButtons: true });
  };

  toggleImageSelector = () => {
    let images = document.querySelectorAll('.wallpaper.changing input');

    [...images].forEach((element) => {
      if (element.dataset.wallpaperid === this.state.appPreferences.wallpaper)
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
              src={earth}
              alt='Earth from space'
              data-wallpaperid='1'
              onClick={this.handleWallpaperChange}
              readOnly={true}
            />
            <input
              type='image'
              src={synth}
              alt='Wallpaper in Synthwave style'
              data-wallpaperid='2'
              onClick={this.handleWallpaperChange}
              readOnly={true}
            />
            <input
              type='image'
              src={lake}
              alt='Beatiful lake in storm'
              data-wallpaperid='3'
              onClick={this.handleWallpaperChange}
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
          <h1>Ustawienia aplikacji</h1>
          <div className='settings-page__preferences__list'>
            <h2>Wygląd</h2>
            <div className='settings-page__preferences__list__wallpaper'>
              <p>Tapeta strony głównej: </p>
              <span></span>
              <i
                className='fa fa-pencil-square-o'
                aria-hidden='true'
                onClick={() => this.handleChangeOption('wallpaper')}
              ></i>
            </div>

            {this.displayEditFields('wallpaper')}

            <div className='settings-page__preferences__list__avatar'>
              <p>Awatar użytkownika: </p>
              <span></span>
              <i
                className='fa fa-pencil-square-o'
                aria-hidden='true'
                onClick={() => this.handleChangeOption('avatar')}
              ></i>
            </div>
            <div className='settings-page__preferences__list__theme'>
              <p>Motyw aplikacji: </p>
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

export default AppSettingsPage;
