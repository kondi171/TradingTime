import React from 'react';
import SearchResult from '../SearchResult';
class SearchPage extends React.Component {
  state = {
    searchQuery: '',
  };

  render() {
    return (
      <>
        <main className='search-page'>
          <div className='search-page_search-wrapper'>
            <div className='search-page_searcher'>
              <input type='text' placeholder='Wyszukaj...' />
            </div>

            <div className='search-page_results'>
              <SearchResult actionName='Allegro' />
              <SearchResult actionName='CD Project Red' />
            </div>
          </div>

          <div className='search-page_info'></div>
        </main>
      </>
    );
  }
}

export default SearchPage;
