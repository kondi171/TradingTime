import PayPal from '../../application_page/PayPal';

function OperateMoneyModal(props) {
  return (
    <aside className='modal'>
      <div
        className={
          props.type === 'deposit' ? 'modal__wrapper--large' : 'modal__wrapper'
        }
      >
        <i
          className='fa fa-times modal__exit-button'
          aria-hidden='true'
          onClick={props.handleModal}
        ></i>
        <form onSubmit={(e) => props.handleMoney(e, props.amount)}>
          <label>
            Podaj ilość pieniędzy którą chcesz{' '}
            {props.type === 'deposit' ? 'wpłacić do' : 'wypłacić z'} portfela
          </label>

          <input
            type='number'
            placeholder='Wpisz kwotę...'
            min='1'
            step='0.01'
            value={props.amount}
            onChange={props.handleInputChange}
          />
          {props.type === 'deposit' ? (
            <PayPal
              amount={props.amount}
              handleDepositMoney={props.handleMoney}
              displayInfoModal={props.displayInfoModal}
            />
          ) : (
            <button className='button'>Wypłać</button>
          )}
        </form>
      </div>
    </aside>
  );
}

export default OperateMoneyModal;
