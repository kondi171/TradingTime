function QuestionModal(props) {
  return (
    <aside className='question-modal'>
      <div className='question-modal__wrapper'>
        <p>Czy na pewno...</p>

        <button
          className='question-modal__wrapper--button'
          onClick={props.changePermission}
        >
          Tak
        </button>
        <button
          className='question-modal__wrapper--button'
          onClick={props.hideQuestionModal}
        >
          Nie
        </button>
      </div>
    </aside>
  );
}

export default QuestionModal;
