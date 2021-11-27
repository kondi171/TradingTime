import React from 'react';

class UserSettingsPage extends React.Component {
  state = {
    userData: {
      name: 'Bogdan',
      lastname: 'Ryjec',
      login: 'bogus_96',
      email: 'bogdan.ryjec87@gmail.com',
      telephone: '696707821',
      city: 'Zbąszynek',
      street: 'Górna',
      house: '54B',
      apartment: '-',
      postalCode: '10-241',
      pesel: '91328719023',
      personalId: 'CFE 23123',
      password: 'llskasd2',
    },
    passwordChange: false,
    emailChange: false,
    telephoneChange: false,

    newEmail: '',
    newTelephone: '',
  };

  handleChangeOption = (className) => {
    const element = document.querySelector(`.${className}`);
    const icon = element.querySelector(`.fa`);

    element.classList.toggle('edit');

    if (icon.classList.contains('fa-pencil-square-o')) {
      icon.classList.remove('fa-pencil-square-o');
      icon.classList.add('fa-times');
    } else {
      icon.classList.add('fa-pencil-square-o');
      icon.classList.remove('fa-times');
    }

    if (className === 'password')
      this.setState({ passwordChange: !this.state.passwordChange });
    if (className === 'email')
      this.setState({ emailChange: !this.state.emailChange });
    if (className === 'telephone')
      this.setState({ telephoneChange: !this.state.telephoneChange });
  };

  handleChangeInput = (e, className) => {
    if (className === 'email') this.setState({ newEmail: e.target.value });
    if (className === 'telephone')
      this.setState({ newTelephone: e.target.value });
  };

  handleChangeData = (className) => {
    const userData = this.state.userData;

    if (className === 'password') {
      const passwordField = document.querySelectorAll('.password-field');
      let passwordValidation = false;

      if (passwordField[0].value === passwordField[1].value)
        passwordValidation = true;

      if (passwordValidation) {
        userData.password = this.state.newPassword;
        this.handleChangeOption(className);
        this.setState({ userData });
      } else {
        alert('Hasła się nie zgadzają!');
      }
    } //później bezpośrednie wywołanie skryptu php do bazy

    if (className === 'email') {
      userData.email = this.state.newEmail;
      this.setState({ userData });
      this.handleChangeOption(className);
    }
    if (className === 'telephone') {
      userData.telephone = this.state.newTelephone;
      this.setState({ userData });
      this.handleChangeOption(className);
    }
  };

  render() {
    const {
      name,
      lastname,
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
    } = this.state.userData;

    return (
      <>
        <section className='settings-page__user-preferences'>
          <h1>Ustawienia użytkownika</h1>
          <div className='settings-page__user-preferences__list'>
            <h2>Dane podstawowe </h2>
            <div>
              <p>Imię i nazwisko: </p>
              <span>
                {name} {lastname}
              </span>
            </div>

            <div>
              <p>Login: </p>
              <span>{login}</span>
            </div>

            <div className='password'>
              <p>Hasło: </p>
              <span>*********</span>
              <i
                className='fa fa-pencil-square-o'
                aria-hidden='true'
                onClick={() => this.handleChangeOption('password')}
              ></i>
            </div>

            {this.state.passwordChange ? (
              <>
                <div className='new-password changing'>
                  <p>Nowe hasło: </p>
                  <span>
                    <input type='text' class='password-field' id='password' />
                  </span>
                </div>
                <div className='confirm-password changing'>
                  <p>Potwierdź hasło: </p>
                  <span>
                    <input
                      type='password'
                      class='password-field'
                      id='confirm-password'
                    />
                  </span>
                  <i
                    className='fa fa-check'
                    onClick={() => this.handleChangeData('password')}
                  ></i>
                </div>
              </>
            ) : null}

            <div className='email'>
              <p>Adres e-mail: </p>
              <span>{email}</span>
              <i
                className='fa fa-pencil-square-o'
                aria-hidden='true'
                onClick={() => this.handleChangeOption('email')}
              ></i>
            </div>

            {this.state.emailChange ? (
              <div className='email changing'>
                <p>Nowy e-mail: </p>
                <span>
                  <input
                    type='text'
                    onChange={(e) => this.handleChangeInput(e, 'email')}
                  />
                </span>
                <i
                  className='fa fa-check'
                  onClick={() => this.handleChangeData('email')}
                ></i>
              </div>
            ) : null}

            <div className='telephone'>
              <p>Numer telefonu: </p>
              <span>{telephone}</span>
              <i
                class='fa fa-pencil-square-o'
                aria-hidden='true'
                onClick={() => this.handleChangeOption('telephone')}
              ></i>
            </div>

            {this.state.telephoneChange ? (
              <div className='telephone changing'>
                <p>Nowy numer telefonu: </p>
                <span>
                  <input
                    type='number'
                    min='0'
                    onChange={(e) => this.handleChangeInput(e, 'telephone')}
                  />
                </span>
                <i
                  className='fa fa-check'
                  onClick={() => this.handleChangeData('telephone')}
                ></i>
              </div>
            ) : null}
          </div>

          <div className='settings-page__user-preferences__list'>
            <h2>Dane adresowe</h2>

            <div>
              <p>Miejscowość: </p>
              <span>{city}</span>
            </div>

            <div>
              <p>Ulica: </p>
              <span>{street}</span>
            </div>
            <div>
              <p>
                {(apartment !== '-' && 'Nr domu / mieszkania:') || 'Nr domu:'}
              </p>
              <span>{(apartment !== '-' && house / apartment) || house}</span>
            </div>
            <div>
              <p>Kod pocztowy: </p>
              <span>{postalCode}</span>
            </div>
            <div>
              <p>Numer PESEL: </p>
              <span>{pesel}</span>
            </div>
            <div>
              <p>Numer dowodu osobistego: </p>
              <span>{personalId}</span>
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default UserSettingsPage;
