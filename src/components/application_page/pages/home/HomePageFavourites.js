import HomePageAction from './HomePageAction';

const displayActions = (props) => {
  let favouriteActionsList = [];
  let emptyFields = [];

  if (props.length > 0)
    favouriteActionsList = props.map((action) => (
      <HomePageAction
        key={action.id_action}
        id={action.id_action}
        isTrue={true}
        image={action.image}
        name={action.actionName}
      />
    ));

  for (let i = favouriteActionsList.length; i < 6; i++) {
    emptyFields.push(<HomePageAction key={i} isTrue={false} />);
  }

  favouriteActionsList = favouriteActionsList.concat(emptyFields);

  return favouriteActionsList.slice(0, 6);
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
