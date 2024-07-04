import { useParams } from 'react-router-dom';
import { useFetch } from '../../hooks';
import { useNavigate } from 'react-router-dom';
import Slideshow from '../../components/slideshow';
import Dropdown from '../../components/dropdown';
import Rating from '../../components/rating';
import Error from '../error';
import './index.scss';

function Location() {
  const navigate = useNavigate();
  const { cardID } = useParams();
  const { data, isLoading, error } = useFetch('/logements.json', (data) => {
    return data.find((accomodation) => accomodation.id === cardID);
  });

  if (error) {
    navigate('/404');
  }

  if (isLoading) {
    // We don't have any loader in given prototype.
    return null;
  } else {
    if (data) {
      return (
        <main>
          <Slideshow slides={data.pictures} />
          <article>
            <div className="location-info">
              <h2>{data.title}</h2>
              <h3>{data.location}</h3>
              <div className="tags">
                {data.tags.map((tag, index) => (
                  <span key={index} className="tag-btn">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <div className="host-info">
              <div className="profile">
                <span className="host-name">{data.host.name}</span>
                <img src={data.host.picture} alt="Hôte" />
              </div>
              <div className="rating">
                <Rating currentRating={data.rating} />
              </div>
            </div>
          </article>
          <div className="menus">
            <Dropdown title="Description" text={data.description} />
            <Dropdown
              title="Équipements"
              text={data.equipments.map((equipment, index) => (
                <li key={index}>{equipment}</li>
              ))}
            />
          </div>
        </main>
      );
    } else {
      return <Error />;
    }
  }
}

export default Location;
