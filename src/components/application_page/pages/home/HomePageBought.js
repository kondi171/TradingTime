import HomePageAction from './HomePageAction';

const displayActions = (props) => {
  let boughtActionsList = [];
  let emptyFields = [];

  if (props.length > 0)
    boughtActionsList = props.map((action) => (
      <HomePageAction
        key={action.id_action}
        id={action.id_action}
        isTrue={true}
        image={action.image}
        symbol={action.symbol}
      />
    ));

  for (let i = boughtActionsList.length; i < 6; i++) {
    emptyFields.push(<HomePageAction key={i} isTrue={false} />);
  }
  boughtActionsList = boughtActionsList.concat(emptyFields);

  return boughtActionsList.slice(0, 6);
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
