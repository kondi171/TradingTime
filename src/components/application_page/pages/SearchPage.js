import React from 'react';
import SearchResult from '../SearchResult';
import ActionInfo from '../ActionInfo';

class SearchPage extends React.Component {
  state = {
    searchQuery: '',
    actions: [
      // {
      //   id_action: 1,
      //   name: 'Allegro',
      //   image: 'images/actions/allegro-favicon.png',
      // },
      // {
      //   id_action: 2,
      //   name: 'CD Project Red',
      //   // price: '1,10',
      //   image: cdpsa,
      //   // isFavourite: false,
      //   // isBought: false,
      //   // lastUpdate: '18.11.2021',
      //   // short: 'CDR',
      //   // volume: '147,386',
      //   // open: '177.23',
      //   // close: '178.54',
      //   // change: '-1.60',
      //   // changePercentage: '-0.89',
      // },
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

    isLoaded: true,
  };

  fetchData = async () => {
    const API = 'http://localhost/api/v1/action';

    fetch(API)
      .then((response) => response.json())
      .then((json) => this.setState({ actions: json.actions }))
      .then(() => this.loadActionList())
      .then(() => this.setState({ isLoaded: true }))
      .catch((err) => console.log(err));
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

  actionList = [];

  loadActionList = () => {
    console.log(this.state.actions);
    this.actionList = [...this.state.actions].map((result) => (
      <SearchResult
        key={result.id_action}
        actionName={result.actionName}
        price={result.price}
        image={result.image}
        click={() => this.handleChangeActiveAction(result.id_action)}
      />
    ));
  };

  handleSearch = (e) => {
    const searchQuery = e.target.value;
    this.setState({
      searchQuery,
    });

    this.showResults(searchQuery);
  };

  showResults = (searchQuery) => {
    console.log(this.state.actions);
    let results = [...this.state.actions];

    results = results.filter((result) => {
      return result.name.toLowerCase().includes(searchQuery.toLowerCase());
    });

    this.actionList = results.map((result) => (
      <SearchResult
        key={result.id_action}
        actionName={result.actionName}
        price={result.price}
        image={result.image}
        click={() => this.handleChangeActiveAction(result.id_action)}
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

  componentDidMount() {
    this.fetchData();
    this.loadActionList();
  }

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

          <div className='search-page_results'>
            {!this.state.isLoaded ? null : this.actionList}
          </div>
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
