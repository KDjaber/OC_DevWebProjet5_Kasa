import { useFetch } from '../../hooks';
import { useNavigate } from 'react-router-dom';
import Card from '../../components/card';
import './index.scss';

function Gallery() {
  const navigate = useNavigate();
  const { data, isLoading, error } = useFetch('/logements.json');

  if (error) {
    navigate('/404');
  }

  return (
    <div className="locationGallery">
      {isLoading
        ? null // We don't have any loader in given prototype.
        : data.map((profile, index) => (
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
