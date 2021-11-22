function Opinion(props) {
  return (
    <div className='opinions'>
      <blockquote>{props.text}</blockquote>
      <p className='person'>{props.name}</p>
    </div>
  );
}

export default Opinion;
