import HomePageAction from './HomePageAction';

const displayActions = (props) => {
  const favouriteActionsList = props.map((action) => (
    <HomePageAction
      key={action.actionId}
      isTrue={action.isFavourite}
      image={action.image}
    />
  ));

  return favouriteActionsList;
};

function HomePageFavourites({ actions }) {
  return (
    <div className='home-page__favourites'>
      <h2>
        <i className='fa fa-heart'></i> Ulubione:
      </h2>
      <div className='home-page__favourites--icons'>
        {displayActions(actions)}
      </div>
    </div>
  );

  // <></>
}

export default HomePageFavourites;
