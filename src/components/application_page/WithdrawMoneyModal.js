function WithdrawMoneyModal(props) {
  return (
    <div className='settings-page__preferences__modal'>
      <div className='settings-page__preferences__modal__wrapper'>
        <i
          className='fa fa-times'
          aria-hidden='true'
          onClick={props.handleModal}
        ></i>
        <form
          onSubmit={(e) => props.handleWithdrawMoney(e, props.amountToWithdraw)}
        >
          <label>Podaj ilość pieniędzy którą chcesz wypłacić</label>

          <input
            type='number'
            placeholder='Wpisz kwotę...'
            min='1'
            value={props.amountToWithdraw}
            onChange={props.handleWithdrawInputChange}
          />

          <button>Wypłać</button>
        </form>
      </div>
    </div>
  );
}

export default WithdrawMoneyModal;
