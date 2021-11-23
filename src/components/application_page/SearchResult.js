import image from '../../resources/img/testimages/allegro-favicon.png';

function SearchResult(actionName) {
  return (
    <>
      <div className='search-page_result'>
        <img src={image} alt='' />
        <h3>{actionName}</h3>
      </div>
    </>
  );
}

export default SearchResult;
