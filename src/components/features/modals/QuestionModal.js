const QuestionModal = (props) => {
  return (
    <aside className='modal'>
      <div className='modal__wrapper'>
        <p className='modal__info'>{props.info}</p>

        <button className='button' onClick={props.acceptAction}>
          Tak
        </button>
        <button className='button' onClick={props.denyAction}>
          Nie
        </button>
      </div>
    </aside>
  );
};

export default QuestionModal;
