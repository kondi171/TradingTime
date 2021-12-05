import HomePageAction from './HomePageAction';

const displayActions = (props) => {
  const boughtActionsList = props.map((action) => (
    <HomePageAction
      key={action.actionId}
      isTrue={action.isBought}
      image={action.image}
    />
  ));

  return boughtActionsList;
};

function HomePageBought({ actions }) {
  return (
    <div className='home-page__actions'>
      <h2>
        <i className='fa fa-line-chart'></i> Twoje Akcje:
      </h2>
      <div className='home-page__actions--icons'>{displayActions(actions)}</div>
    </div>
  );
}

export default HomePageBought;
