import { useFetch } from '../../hooks';
import { useNavigate } from 'react-router-dom';
import CoverImage from '../../components/cover-image';
import Dropdown from '../../components/dropdown';
import BackgroundImage from '../../assets/image2.png';
import './index.scss';

function About() {
  const navigate = useNavigate();
  const { data, isLoading, error } = useFetch('/infos.json');

  if (error) {
    navigate('/404');
  }

  return (
    <main>
      <div className="about">
        <div className="about-cover">
          <CoverImage image={BackgroundImage} />
        </div>
        <div className="dropdown-menus">
          {isLoading
            ? null // We don't have any loader in given prototype.
            : data.map((profile, index) => (
                <Dropdown
                  key={`${profile}-${index}`}
                  title={profile.title}
                  text={profile.description}
                />
              ))}
        </div>
      </div>
    </main>
  );
}

export default About;
