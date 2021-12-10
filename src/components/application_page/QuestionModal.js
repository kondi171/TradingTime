const QuestionModal = (props) => {
  return (
    <aside className='modal'>
      <div className='modal__wrapper'>
        <p className='modal__info'>{props.info}</p>

        <button className='button' onClick={props.changePermission}>
          Tak
        </button>
        <button className='button' onClick={props.hideQuestionModal}>
          Nie
        </button>
      </div>
    </aside>
  );
};

export default QuestionModal;
