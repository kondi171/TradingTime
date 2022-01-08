import React, { useState, useEffect, useContext } from 'react';
import SearchResult from './SearchResult';
import ActionInfo from './ActionInfo';
import matchFavouriteActions from '../../../helpers/MatchFavBoughtActions';

import { AppContext } from '../../../../AppContext';

const SearchPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [actions, setActions] = useState('');
  const [activeAction, setActiveAction] = useState('');
  const [activeActionProps, setActiveActionProps] = useState('');
  const [isLoaded, setIsLoaded] = useState(true);
  const [showLoadingBar, setShowLoadingBar] = useState(false);

  const { userFavouriteActions } = useContext(AppContext);
  const { userBoughtActions } = useContext(AppContext);
  const { addActionToFavourite } = useContext(AppContext);
  const { deleteActionFromFavourite } = useContext(AppContext);
  const { userId } = useContext(AppContext);

  const fetchData = async () => {
    const API = 'http://localhost/api/v1/action';

    const allActions = await fetch(API)
      .then((response) => response.json())
      .then((data) => data.actions)
      .catch((err) => console.log(err));

    setActions(
      matchFavouriteActions(allActions, userFavouriteActions, userBoughtActions)
    );

    setIsLoaded(true);
  };

  const refreshActions = () => {
    if (actions !== '')
      setActions(
        matchFavouriteActions(actions, userFavouriteActions, userBoughtActions)
      );
  };

  const handleChangeActiveAction = (id) => {
    let currentId = activeAction;
    takeActionDetails(id);

    if (currentId === '') {
      handleShowInfo();
      setActiveAction(id);
    } else if (currentId === id) {
      handleShowInfo();
      setActiveAction('');
    } else if (currentId !== id) {
      setActiveAction(id);
    }
  };

  const handleSearch = (e) => {
    const searchQuery = e.target.value;
    setSearchQuery(searchQuery);
    showResults(searchQuery);
  };

  const showResults = (searchQuery) => {
    let results = [...actions];

    results = results.filter((result) => {
      return result.actionName
        .toLowerCase()
        .includes(searchQuery.toLowerCase());
    });

    const actionList = results.map((result) => (
      <SearchResult
        key={result.id_action}
        actionName={result.actionName}
        price={result.value}
        image={result.image}
        click={() => handleChangeActiveAction(result.id_action)}
      />
    ));
    return actionList;
  };

  const handleShowInfo = () => {
    document
      .querySelector('.search-page_search-wrapper')
      .classList.toggle('minimized');
    document.querySelector('.search-page__info').classList.toggle('active');
  };

  const takeActionDetails = (activeAction) => {
    const currentActive = [...actions].filter((action) => {
      return action.id_action === activeAction;
    })[0];
    setActiveActionProps(currentActive);
  };

  const checkFavourite = () => {
    if (activeActionProps.isFavourite) {
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

  const toggleFavourite = async () => {
    setShowLoadingBar(true);
    if (activeActionProps.isFavourite) {
      const status = await deleteActionFromFavourite(
        userId,
        activeActionProps.id_action
      );
      if (status.success) setShowLoadingBar(false);
    } else {
      const status = await addActionToFavourite(
        userId,
        activeActionProps.id_action
      );
      if (status.success) setShowLoadingBar(false);
    }
  };

  useEffect(() => checkFavourite());

  useEffect(() => fetchData(), []);

  useEffect(() => refreshActions(), [userFavouriteActions]);

  return (
    <main className='search-page'>
      <div className='search-page_search-wrapper'>
        <div className='search-page_searcher'>
          <input
            type='text'
            onChange={handleSearch}
            value={searchQuery}
            placeholder='Wyszukaj...'
          />
        </div>
        <div className='search-page_results'>
          {isLoaded ? showResults(searchQuery) : null}
        </div>
      </div>
      <ActionInfo
        {...activeActionProps}
        toggleFavourite={toggleFavourite}
        handleShowInfo={handleShowInfo}
      />
    </main>
  );
};

export default SearchPage;
