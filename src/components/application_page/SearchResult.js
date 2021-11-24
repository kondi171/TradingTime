import allegro from '../../assets/img/testimages/allegro-favicon.png';
import cdpsa from '../../assets/img/testimages/cdpsa-favicon.png';

function SearchResult({ actionName, image, click }) {
  return (
    <>
      <div className='search-page_result' onClick={click}>
        <img src={image} alt='' />
        <h3>{actionName}</h3>
      </div>
    </>
  );
}

export default SearchResult;
