import { Link } from 'react-router-dom';

function HomePageAction(props) {
  if (props.isTrue) return <img src={props.image} alt='Icon of action' />;
  else return <Link to='/app/search'>+</Link>;
}

export default HomePageAction;
