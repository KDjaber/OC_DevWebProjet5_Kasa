import Card from '../../components/card';
import LocationList from '../../assets/logements.json';
import './index.scss';

function Gallery() {
  return (
    <div className="locationGallery">
      {LocationList.map((profile, index) => (
        <Card
          key={`${profile.id}-${index}`}
          id={profile.id}
          cover={profile.cover}
          title={profile.title}
        />
      ))}
    </div>
  );
}

export default Gallery;
