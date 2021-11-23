import React from 'react';
import SearchResult from '../SearchResult';
import allegro from '../../../resources/img/testimages/allegro-favicon.png';
import cdpsa from '../../../resources/img/testimages/cdpsa-favicon.png';

class SearchPage extends React.Component {
  state = {
    searchQuery: '',
    actions: [
      {
        id: 0,
        actionName: 'Allegro',
        price: '4,20',
        image: allegro,
      },
      {
        id: 1,
        actionName: 'CD Project Red',
        price: '1,10',
        image: cdpsa,
      },
    ],
    activeAction: '',
  };

  handleChangeActiveAction = (id) => {
    let currentId = this.state.activeAction;
    let choosenId = id;
    console.log('current id' + currentId);
    console.log('choosen id' + id);

    this.setState({ activeAction: id });

    this.handleShowInfo();
  };

  actionList = [...this.state.actions].map((result) => (
    <SearchResult
      key={result.id}
      actionName={result.actionName}
      price={result.price}
      image={result.image}
      click={() => this.handleChangeActiveAction(result.id)}
    />
  ));

  handleSearch = (e) => {
    const searchQuery = e.target.value;
    this.setState({
      searchQuery,
    });

    this.showResults(searchQuery);
  };

  showResults = (searchQuery) => {
    let results = [...this.state.actions];

    results = results.filter((result) => {
      return result.actionName
        .toLowerCase()
        .includes(searchQuery.toLowerCase());
    });

    this.actionList = results.map((result) => (
      <SearchResult
        key={result.id}
        actionName={result.actionName}
        price={result.price}
        image={result.image}
        click={() => this.handleChangeActiveAction(result.id)}
      />
    ));
  };

  handleShowInfo = () => {
    document
      .querySelector('.search-page_searcher')
      .classList.toggle('minimized');
    document.querySelector('.search-page_info').classList.toggle('active');
  };

  render() {
    return (
      <>
        <main className='search-page'>
          <div className='search-page_search-wrapper'>
            <div className='search-page_searcher'>
              <input
                type='text'
                onChange={this.handleSearch}
                value={this.state.searchQuery}
                placeholder='Wyszukaj...'
              />
            </div>

            <div className='search-page_results'>{this.actionList}</div>
          </div>

          <div className='search-page_info'></div>
        </main>
      </>
    );
  }
}

export default SearchPage;
