import React from 'react';
import WithdrawMoneyModal from '../WithdrawMoneyModal';

class WalletSettingsPage extends React.Component {
  state = {
    walletPreferences: {
      accountNr: '23 1435 4452 1000 0000 6425 2357',
      accountBalance: 200,
    },

    amountToWithdraw: '',

    withdrawMoneyModalShow: false,
  };

  handleWithdrawMoney = (e, amountToWithdraw) => {
    e.preventDefault();

    let walletPreferences = this.state.walletPreferences;
    if (amountToWithdraw > walletPreferences.accountBalance)
      alert('Nie masz tyle kasy ziomek');
    else {
      walletPreferences.accountBalance -= amountToWithdraw;
      this.setState({
        walletPreferences,
        amountToWithdraw: '',
      });
      this.handleModal();
    }
  };

  handleModal = () => {
    this.setState({
      withdrawMoneyModalShow: !this.state.withdrawMoneyModalShow,
    });
  };

  handleDepositMoney = () => {};

  handleWithdrawInputChange = (e) => {
    const amountToWithdraw = e.target.value;

    this.setState({ amountToWithdraw });
  };

  render() {
    const { accountNr, accountBalance } = this.state.walletPreferences;
    return (
      <>
        <section className='settings-page__preferences'>
          <h1>Ustawienia portfela</h1>
          <div className='settings-page__preferences__list'>
            <h2>Ogólne</h2>
            <div className='settings-page__preferences__list__resources'>
              <p>Dostępne środki na koncie: </p>
              <span>{accountBalance.toFixed(2)} zł</span>
            </div>

            <div className='settings-page__preferences__list__account-number'>
              <p>Numer konta do wpłat: </p>
              <span>{accountNr}</span>
              <i className='fa fa-question-circle-o' aria-hidden='true'>
                <span></span>
              </i>
            </div>

            <div className='settings-page__preferences__list__account-buttons'>
              <button
                className='button button--large'
                onClick={this.handleModal}
              >
                Wypłać pieniądze na konto
              </button>
              <button
                className='button button--large'
                onClick={this.handleDepositMoney}
              >
                Wpłać pieniądze do aplikacji
              </button>
            </div>
          </div>

          {this.state.withdrawMoneyModalShow ? (
            <WithdrawMoneyModal
              handleModal={this.handleModal}
              handleWithdrawMoney={(e) =>
                this.handleWithdrawMoney(e, this.state.amountToWithdraw)
              }
              amountToWithdraw={this.state.amountToWithdraw}
              handleWithdrawInputChange={this.handleWithdrawInputChange}
              e={this.event}
            />
          ) : null}
        </section>
      </>
    );
  }
}

export default WalletSettingsPage;
