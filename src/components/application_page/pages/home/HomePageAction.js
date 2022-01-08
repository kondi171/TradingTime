import { Link } from 'react-router-dom';

function HomePageAction(props) {
  if (props.isTrue) return <Link className='action-link' to={`/app/marketplace/${props.id}`}><img src={props.image} alt={`Icon of ${props.name} action`} /></Link>;
  else return <Link className='empty-link' to='/app/search'>+</Link>;
}

export default HomePageAction;
