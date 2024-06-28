import { Link } from 'react-router-dom';
import './index.scss';

function Card({ cover, title, id }) {
  return (
    <Link to={`/logement/${id}`} className="CardWrapper">
      <img src={cover} alt="Location" />
      <span className="CardTitle">{title}</span>
    </Link>
  );
}

export default Card;
