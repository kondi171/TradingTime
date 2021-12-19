const SwitchButton = ({
  firstOption,
  secondOption,
  checkedState,
  toggleOptionHandler,
}) => {
  return (
    <span className='switch-button'>
      <span className='switch-button__first-option'>{firstOption}</span>
      <input
        className='switch-button__checkbox'
        type='checkbox'
        checked={checkedState}
        onChange={toggleOptionHandler}
      ></input>
      <label className='switch-button__label'>
        <span className='switch-button__second-option'>{secondOption}</span>
      </label>
    </span>
  );
};

export default SwitchButton;
