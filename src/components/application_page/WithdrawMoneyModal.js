function WithdrawMoneyModal(props) {
  return (
    <aside className='modal'>
      <div className='modal__wrapper'>
        <i
          className='fa fa-times modal__exit-button'
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

          <button className='button'>Wypłać</button>
        </form>
      </div>
    </aside>
  );
}

export default WithdrawMoneyModal;
