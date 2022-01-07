function SearchResult({ actionName, image, click }) {
  return (
    <div className='search-page_result' onClick={click}>
      {console.log(image)}
      <img src={image} alt='' />
      <h3>{actionName}</h3>
    </div>
  );
}

export default SearchResult;
