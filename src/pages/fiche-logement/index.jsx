import LocationList from '../../assets/logements.json';
import { useParams } from 'react-router-dom';
import Slideshow from '../../components/slideshow';
import Dropdown from '../../components/dropdown';
import Rating from '../../components/rating';
import Error from '../error';
import './index.scss';

function Location() {
  const { cardID } = useParams();
  const accomodation = LocationList.find(
    (accomodation) => accomodation.id === cardID,
  );

  if (accomodation) {
    return (
      <main>
        <Slideshow slides={accomodation.pictures} />
        <article>
          <div className="location-info">
            <h2>{accomodation.title}</h2>
            <h3>{accomodation.location}</h3>
            <div className="tags">
              {accomodation.tags.map((tag, index) => (
                <span key={index} className="tag-btn">
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <div className="host-info">
            <div className="profile">
              <span className="host-name">{accomodation.host.name}</span>
              <img src={accomodation.host.picture} alt="Hôte" />
            </div>
            <div className="rating">
              <Rating />
            </div>
          </div>
        </article>
        <div className="menus">
          <Dropdown title="Description" text={accomodation.description} />
          <Dropdown
            title="Équipements"
            text={accomodation.equipments.map((equipment, index) => (
              <ul key={index}>
                <li key={index}>{equipment}</li>
              </ul>
            ))}
          />
        </div>
      </main>
    );
  } else {
    return <Error />;
  }
}

export default Location;
