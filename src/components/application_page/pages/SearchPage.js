import React from 'react';
import SearchResult from '../SearchResult';
import ActionInfo from '../ActionInfo';
import allegro from '../../../assets/img/testimages/allegro-favicon.png';
import cdpsa from '../../../assets/img/testimages/cdpsa-favicon.png';

class SearchPage extends React.Component {
  state = {
    searchQuery: '',
    actions: [
      {
        id: 0,
        actionName: 'Allegro',
        price: '4.20',
        image: allegro,
        isFavourite: true,
        isBought: true,
        lastUpdate: '22.11.2021',
        short: 'ALE',
        volume: '1,593,265',
        open: '38.54',
        close: '38.00',
        change: '-1.16',
        changePercentage: '-2.96',
      },
      {
        id: 1,
        actionName: 'CD Project Red',
        price: '1,10',
        image: cdpsa,
        isFavourite: false,
        isBought: false,
        lastUpdate: '18.11.2021',
        short: 'CDR',
        volume: '147,386',
        open: '177.23',
        close: '178.54',
        change: '-1.60',
        changePercentage: '-0.89',
      },
    ],
    activeAction: '',

    activeActionProps: {
      id: '',
      actionName: '',
      price: '',
      image: '',
      isFavourite: '',
      isBought: '',
      lastUpdate: '',
      short: '',
      volume: '',
      open: '',
      close: '',
      change: '',
      changePercentage: '',
    },
  };

  handleChangeActiveAction = (id) => {
    let currentId = this.state.activeAction;
    this.takeActionDetails(id);

    if (currentId === '') {
      this.handleShowInfo();
      this.setState({ activeAction: id });
    } else if (currentId === id) {
      this.handleShowInfo();
      this.setState({ activeAction: '' });
    } else if (currentId !== id) {
      this.setState({ activeAction: id });
    }
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
      .querySelector('.search-page_search-wrapper')
      .classList.toggle('minimized');
    document.querySelector('.search-page__info').classList.toggle('active');
  };

  takeActionDetails = (activeAction) => {
    this.setState({
      activeActionProps: [...this.state.actions].filter((action) => {
        return action.id === activeAction;
      })[0],
    });
  };

  checkFavourite = () => {
    if (this.state.activeActionProps.isFavourite) {
      document
        .querySelector('.search-page_info--favouriteHeart')
        .classList.add('fa-heart');
      document
        .querySelector('.search-page_info--favouriteHeart')
        .classList.remove('fa-heart-o');
    } else {
      document
        .querySelector('.search-page_info--favouriteHeart')
        .classList.add('fa-heart-o');
      document
        .querySelector('.search-page_info--favouriteHeart')
        .classList.remove('fa-heart');
    }
  };

  toggleFavourite = () => {
    let activeActionProps = this.state.activeActionProps;
    activeActionProps.isFavourite = !this.state.activeActionProps.isFavourite;

    this.setState({
      activeActionProps,
    });
  };

  componentDidUpdate() {
    this.checkFavourite();
  }

  render() {
    return (
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
        <ActionInfo
          {...this.state.activeActionProps}
          toggleFavourite={this.toggleFavourite}
          handleShowInfo={this.handleShowInfo}
        />
      </main>
    );
  }
}

export default SearchPage;
